import redis.asyncio as redis
import os
import json
from dotenv import load_dotenv

load_dotenv()

REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379")

r = None

## Note to self: might be good to add in in-memory caching for super hot data

async def get_redis():
    global r
    if r is None:
        r = await redis.from_url(REDIS_URL, decode_responses=True)
    return r

async def cache_get(key: str):
    r = await get_redis()
    value = await r.get(key)
    return json.loads(value) if value else None

async def cache_set(key: str, value, ttl: int):
    r = await get_redis()
    await r.set(key, json.dumps(value), ex=ttl)

