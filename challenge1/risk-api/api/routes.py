from fastapi import APIRouter, Query
from pydantic import BaseModel, Field
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

@router.get(
        '/blah',
        summary="BLAHSUMMARY",
        description="BLAHBLAHBLACKSHEEP",
        response_description="BLAHRESPONSE"
)
async def blah():
    return {"message": "Peekaboo"}

class VolatilityResponse(BaseModel):
    volatility: float = Field(..., description="Computed volatility value", example=0.045)
    cached: bool = Field(..., description="Indicates if the result was retrieved from cache", example=False)
    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    "volatility": 0.045,
                    "cached": False
                },
                {
                    "volatility": 0.032,
                    "cached": True
                }
            ]
        }
    }

@router.get(
        '/volatility/',
        summary="Compute Volatility",
        description="Takes a symbol and date range, fetches price data from Supabase, and computes volatility",
        response_description="Computed volatility with caching information",
        response_model=VolatilityResponse,
        responses={
            200: {
                "description": "Successful response",
                "content": {
                    "application/json": {
                        "examples": {
                            "fresh_calculation": {
                                "summary": "Fresh calculation",
                                "description": "Volatility calculated fresh from data",
                                "value": {
                                    "volatility": 0.045,
                                    "cached": False
                                }
                            },
                            "cached_result": {
                                "summary": "Cached result",
                                "description": "Volatility retrieved from cache",
                                "value": {
                                    "volatility": 0.032,
                                    "cached": True
                                }
                            }
                        }
                    }
                }
            }
        }
)
async def volatility(
    symbol: str = Query(..., description="Stock symbol, e.g. AAPL", example="AAPL"), 
    start: str = Query(..., description="Start date in YYYY-MM-DD format", example="2024-01-01"), 
    end: str = Query(..., description="End date in YYYY-MM-DD format", example="2024-12-31")
):
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
