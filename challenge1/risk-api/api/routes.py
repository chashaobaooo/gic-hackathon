from fastapi import APIRouter
# from db import fetch_data
from cache import cache_get, cache_set
import numpy as np
import sys

try:
    import risklib
    print("Success import!!! WOOO")

    # test function from risklib
    res = risklib.compute_volatility([1.0, 2.0, 3.0])
    print(res)
except ImportError as e:
    print(f"Failed to import risklib: {e}")
    sys.exit(1)

router = APIRouter()

@router.get('/blah')
async def blah():
    return {"message": "Peekaboo"}

@router.get('/volatility/') # IMPT: extra slash if query parameters are needed
async def volatility(symbol: str, start: str, end: str):
    # DUMMY CALL TO SHOW HOW TO USE CACHE
    cache_key = f"volatility:{symbol}:{start}:{end}"
    cached_result = await cache_get(cache_key)
    if cached_result is not None:
        return {"volatility": cached_result, "cached": True}

    # prices = await fetch_data(symbol=symbol, start=start, end=end)
    prices = [100, 102, 101, 105, 107, 110]
    result = risklib.compute_volatility(prices)

    await cache_set(cache_key, result, ttl=60) # expire in 60 seconds
    return {"volatility": result, "cached": False}
