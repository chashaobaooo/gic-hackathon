import time
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


### Another method to call supabase that might be faster
# import psycopg
# def psycop_call(): #user_ids: list[str]):
#     user="YOUR_SUPABASE_USER"
#     password="YOUR_SUPABASE_PASSWORD"
#     host="SUPABASE_HOST"
#     port=5432
#     database="postgres"
#     with psycopg.connect(f"host={host} port={port} dbname={database} user={user} password={password}") as conn:
#         # Open a cursor to perform database operations
#         results = []
#         with conn.cursor() as cur:
#             start = time.time()
#             # Execute a command: this creates a new table
#             cur.execute("SELECT * FROM public.your_table_name")
#             cur.fetchall()
#             for record in cur:
#                 results.append(record)
#             stop = time.time()
#             return (stop - start)
