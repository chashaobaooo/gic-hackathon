from fastapi import FastAPI
from routes import router

app = FastAPI(title="Risk API Group 7")

app.include_router(router)

if __name__ == "__main__":
    ## to run the backend server
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)