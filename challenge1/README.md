# Risk API Backend - Challenge 1

A high-performance financial risk computation API built with FastAPI, featuring C++ extensions for computationally intensive calculations and Redis caching for optimal performance.

## Project Overview

This project implements a scalable financial risk API with the following architecture:

### Core Architecture & Strategy

1. **Database Layer (Supabase)**: Primary data source for financial information
   - Query aggregation-heavy computations directly in Supabase when possible
   - Leverage PostgreSQL's built-in functions for better performance

2. **Computation Layer**: Multi-tiered approach for different computation types
   - **Simple aggregations**: Handle in Supabase
   - **Complex calculations**: Bring data locally and compute using C++ extensions via Pybind11
   - **TO DO**: Integrate Polars for high-performance data manipulation and analysis

3. **API Layer (FastAPI)**: Expose computed results through RESTful endpoints
   - Clean, documented API endpoints
   - Automatic OpenAPI documentation

4. **Caching Layer (Redis)**: Cache expensive computations
   - Configurable TTL for different computation types
   - Reduces database load and improves response times

5. **Performance Extensions (C++)**: Handle CPU-intensive financial calculations
   - Volatility calculations, risk metrics, statistical computations
   - Compiled to Python extensions using Pybind11

## Project Structure

```
challenge1/
├── risk-api/
│   ├── api/                    # FastAPI application
│   │   ├── main.py            # Application entry point
│   │   ├── routes.py          # API endpoints
│   │   ├── cache.py           # Redis caching utilities
│   │   ├── db.py              # Database connection and queries
│   │   └── risklib.cp311-win_amd64.pyd  # Compiled C++ extension
│   └── cpp/                   # C++ source code
│       ├── risklib.cpp        # C++ implementations
│       ├── risklib.h          # Header file
│       ├── CMakeLists.txt     # CMake build configuration
│       └── build/             # Build artifacts
├── requirements.txt           # Python dependencies
├── uv.lock                   # UV lock file
├── .env                      # Environment variables
└── Dockerfile               # Docker configuration (WIP)
```

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- Python 3.11
- C++ compiler (Visual Studio Build Tools on Windows)
- CMake
- Redis server
- UV package manager

### 1. Install UV Package Manager

UV is a fast Python package installer and resolver. Install it using:

**Windows (PowerShell):**

```powershell
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
```

**macOS/Linux:**

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

**Alternative (using pip):**

```bash
pip install uv
```

### 2. Set Up Python Environment

Navigate to the project directory and create a virtual environment:

```bash
cd c:\courses\gic-hackathon\challenge1
uv venv
```

Activate the virtual environment:

**Windows:**

```bash
.venv\Scripts\activate
```

**macOS/Linux:**

```bash
source .venv/bin/activate
```

### 3. Install Python Dependencies

Install dependencies using UV (recommended):

```bash
uv pip install -r requirements.txt
```

### 4. Install C++ Build Tools

#### Windows

1. Download and install **Visual Studio Build Tools 2022**:
   - Go to https://visualstudio.microsoft.com/downloads/
   - Download "Build Tools for Visual Studio 2022"
   - During installation, select "C++ build tools" workload
   - Ensure "MSVC v143 - VS 2022 C++ x64/x86 build tools" is selected
   - Also select "Windows 10/11 SDK"

2. Install **CMake**:
   - Download from https://cmake.org/download/
   - Choose "Windows x64 Installer"
   - During installation, select "Add CMake to system PATH"

#### macOS

```bash
# Install Xcode command line tools
xcode-select --install

# Install CMake using Homebrew
brew install cmake
```

#### Linux (Ubuntu/Debian)

```bash
sudo apt-get update
sudo apt-get install build-essential cmake
```

### 5. Build C++ Extension

Navigate to the C++ directory and build the extension:

```bash
cd risk-api\cpp
mkdir build
cd build
cmake ..
```

**For Windows (using Visual Studio):**

```bash
cmake --build . --config Release
```

**For macOS/Linux:**

```bash
make
```

### 6. Copy Compiled Extension

After successful compilation, copy the compiled library to the API directory:

**Windows:**

```bash
# From the cpp/build directory
copy Release\risklib.cp311-win_amd64.pyd ..\api\
```

**macOS/Linux:**

```bash
# From the cpp/build directory
cp risklib*.so ../api/
```

### 7. Set Up Redis Server

#### Using Docker (Recommended)

```bash
docker run -d -p 6379:6379 --name redis redis:alpine
```

#### Windows (Native Installation)

1. Download Redis for Windows from https://github.com/microsoftarchive/redis/releases
2. Extract and run `redis-server.exe`

#### macOS

```bash
brew install redis
brew services start redis
```

#### Linux

```bash
sudo apt-get install redis-server
sudo systemctl start redis-server
```

### 8. Configure Environment Variables

Create or update your `.env` file in the project root:

```env
REDIS_URL=redis://localhost:6379
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

### 9. Verify Setup

Test that everything is working:

```bash
# Navigate to API directory
cd risk-api\api

# Test Redis connection
python check-redis.py

# Test C++ extension import
python -c "import risklib; print('C++ extension working!')"
```

## Running the Application

### Start the Development Server

From the `risk-api/api` directory:

```bash
python main.py
```

Or using uvicorn directly:

```bash
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

The API will be available at:

- **API Base**: http://localhost:8000
- **Interactive Documentation**: http://localhost:8000/docs
- **ReDoc Documentation**: http://localhost:8000/redoc
- **OpenAPI JSON Schema**: http://localhost:8000/openapi.json

### Testing the API

#### Test Basic Endpoint

```bash
curl http://localhost:8000/blah
```

#### Test Volatility Calculation

```bash
curl "http://localhost:8000/volatility?symbol=AAPL&start=2024-01-01&end=2024-12-31"
```

## Adding New C++ Functions

### 1. Modify C++ Code

Edit `risk-api/cpp/risklib.cpp` to add your new function:

```cpp
// Add your function implementation
double my_new_function(const std::vector<double>& data) {
    // Your implementation here
    return result;
}

// In the PYBIND11_MODULE section, add:
PYBIND11_MODULE(risklib, m) {
    m.doc() = "Risk library module for financial computations";
    m.def("compute_volatility", &compute_volatility, "Compute volatility from returns");
    m.def("my_new_function", &my_new_function, "Description of new function");
}
```

### 2. Rebuild the Extension

```bash
cd risk-api\cpp\build
cmake --build . --config Release
copy Release\risklib.cp311-win_amd64.pyd ..\api\
```

### 3. Use in Python

```python
import risklib
result = risklib.my_new_function([1.0, 2.0, 3.0])
```

## Troubleshooting

### Common Issues

1. **Import Error for risklib**:
   - Ensure the `.pyd` file is in the same directory as your Python scripts
   - Verify Python version matches the compiled extension

2. **Redis Connection Failed**:
   - Check if Redis server is running: `redis-cli ping`
   - Verify REDIS_URL in your .env file

3. **CMake Build Errors**:
   - Ensure Visual Studio Build Tools are installed
   - Try running from "Developer Command Prompt for VS 2022"

4. **"getaddrinfo failed" Error**:
   - Check your host configuration in main.py
   - Use "127.0.0.1" instead of "0.0.0.0" for local development

### Performance Tips

- Use Redis caching for expensive computations
- Implement database connection pooling for high-load scenarios
- Consider using Polars for large dataset manipulations (TODO)
- Profile C++ functions for optimization opportunities

## API Endpoints

### Available Endpoints

- `GET /blah` - Simple test endpoint
- `GET /volatility` - Calculate volatility with caching
  - Parameters: `symbol` (string), `start` (string), `end` (string)

### Response Format

```json
{
  "volatility": 0.045,
  "cached": false
}
```

## Future Enhancements

- [ ] Integrate Polars for data manipulation
- [ ] Add more sophisticated caching strategies
- [ ] Implement database connection pooling
- [ ] Add comprehensive error handling
- [ ] Extend C++ library with more financial functions
- [ ] Add authentication and rate limiting
- [ ] Complete Docker containerization

---

For questions or issues, check the interactive documentation at `/docs` when running the server
