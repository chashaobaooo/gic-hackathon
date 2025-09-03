#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include <vector>
#include <cmath>

namespace py = pybind11;

// DUMMY EXAMPLE: compute volatility
double compute_volatility(const std::vector<double>& returns) {
    double mean = 0.0, var = 0.0;
    for (auto r: returns) {
        mean += r;
    }
    mean /= returns.size();

    for (auto r: returns) {
        var += (r - mean) * (r - mean);
    }
    var /= (returns.size() - 1);

    return std::sqrt(var);
}

PYBIND11_MODULE(risklib, m) {
    // module docstring for better inspection in python
    m.doc() = "Risk library module for financial computations";
    // function binding - can be called with risklib.compute_volatility
    m.def("compute_volatility", &compute_volatility, "Compute volatility from returns"); 
}