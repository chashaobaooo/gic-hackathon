from supabase import create_client
import os
from dotenv import load_dotenv

##### This file works with supabase and execute sql-like queries
##### sql-like queries should be used when aggregation (e.g. avg, sum, max, min) is the main computation
##### if computation is heavy, reco just get the data and process it in a) c++ code for heavy computations b) polars for time-series data

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

async def fetch_data(symbol: str, start: str, end: str):
    """
    DUMMY FUNCTION
    """
    response = (
        supabase.table("prices")
        .select("*")
        .eq("symbol", symbol)
        .gte("date", start)
        .lte("date", end)
        .execute()
    )

    return response.data
