import asyncio
from cache import get_redis

## TO TEST REDIS CONNECTION LOCALLY

async def test_redis():
    try:
        r = await get_redis()
        await r.ping()
        print("Redis connection successful")
    except Exception as e:
        print(f"Redis connection failed: {e}")

asyncio.run(test_redis())