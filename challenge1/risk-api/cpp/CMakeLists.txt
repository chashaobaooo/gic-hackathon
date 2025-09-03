cmake_minimum_required(VERSION 3.14)
project(risklib)

set(CMAKE_CXX_STANDARD 17)

find_package(pybind11 REQUIRED)

pybind11_add_module(risklib risklib.cpp)