import polars as pl
from db import fetch_data

# Note: Polars is faster than Pandas for large datasets and supports lazy evaluation

async def timeseries_processing(data):
    data = fetch_data(symbol="AAPL", start="2023-01-01", end="2023-10-01")

    # Process with Polars (lazy evaluation)
    df = pl.DataFrame(data.data)
    result = (
        df.lazy()
        .with_columns([
            pl.col("price").pct_change().alias("returns"),
            pl.col("price").rolling_mean(20).alias("sma_20")
        ])
        .select([
            pl.col("returns").std().alias("volatility"),
            pl.col("price").corr(pl.col("volume")).alias("price_volume_corr")
        ])
        .collect()
    )
    return result.to_dict()