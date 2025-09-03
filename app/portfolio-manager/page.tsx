import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export default function PortfolioManager() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-8 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"}>GIC Hackathon Dashboard</Link>
              <span className="text-muted-foreground">/</span>
              <span>Portfolio Manager</span>
            </div>
          </div>
        </nav>
        
        <div className="flex-1 w-full max-w-6xl p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Portfolio Manager Dashboard</h1>
            <p className="text-muted-foreground">
              Manage investment portfolios, analyze market opportunities, and optimize asset allocation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Portfolio Metrics Cards */}
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">Total Portfolio Value</h3>
              <div className="text-3xl font-bold mb-1">$156.8M</div>
              <div className="text-sm text-green-600">+2.4% today</div>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">Active Positions</h3>
              <div className="text-3xl font-bold mb-1">247</div>
              <div className="text-sm text-muted-foreground">Across 12 sectors</div>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">Cash Available</h3>
              <div className="text-3xl font-bold mb-1">$12.3M</div>
              <div className="text-sm text-muted-foreground">7.8% of portfolio</div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">Sharpe Ratio</h3>
              <div className="text-3xl font-bold text-green-600 mb-1">1.84</div>
              <div className="text-sm text-muted-foreground">Risk-adjusted return</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Top Holdings */}
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Top Holdings</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Apple Inc. (AAPL)</div>
                    <div className="text-sm text-muted-foreground">Technology</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">8.2%</div>
                    <div className="text-sm text-green-600">+1.5%</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Microsoft Corp. (MSFT)</div>
                    <div className="text-sm text-muted-foreground">Technology</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">7.8%</div>
                    <div className="text-sm text-green-600">+0.9%</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Amazon.com Inc. (AMZN)</div>
                    <div className="text-sm text-muted-foreground">Consumer Discretionary</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">6.5%</div>
                    <div className="text-sm text-red-600">-0.3%</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Alphabet Inc. (GOOGL)</div>
                    <div className="text-sm text-muted-foreground">Communication Services</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">5.9%</div>
                    <div className="text-sm text-green-600">+2.1%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Trades */}
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Recent Trades</h3>
              <div className="space-y-3">
                <div className="p-3 border rounded">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-green-600">BUY</div>
                    <div className="text-sm text-muted-foreground">2 hours ago</div>
                  </div>
                  <div className="text-sm">Tesla Inc. (TSLA)</div>
                  <div className="text-sm text-muted-foreground">500 shares @ $245.80</div>
                </div>
                <div className="p-3 border rounded">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-red-600">SELL</div>
                    <div className="text-sm text-muted-foreground">1 day ago</div>
                  </div>
                  <div className="text-sm">Meta Platforms (META)</div>
                  <div className="text-sm text-muted-foreground">300 shares @ $298.45</div>
                </div>
                <div className="p-3 border rounded">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-green-600">BUY</div>
                    <div className="text-sm text-muted-foreground">2 days ago</div>
                  </div>
                  <div className="text-sm">NVIDIA Corp. (NVDA)</div>
                  <div className="text-sm text-muted-foreground">200 shares @ $432.10</div>
                </div>
              </div>
            </div>

            {/* Portfolio Management Tools */}
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Management Tools</h3>
              <div className="space-y-3">
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Asset Allocation</div>
                  <div className="text-sm text-muted-foreground">Rebalance portfolio weights</div>
                </button>
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Risk Analytics</div>
                  <div className="text-sm text-muted-foreground">Analyze portfolio risk metrics</div>
                </button>
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Trade Execution</div>
                  <div className="text-sm text-muted-foreground">Execute buy/sell orders</div>
                </button>
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Performance Attribution</div>
                  <div className="text-sm text-muted-foreground">Analyze return sources</div>
                </button>
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Market Research</div>
                  <div className="text-sm text-muted-foreground">Access research and analysis</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-8">
          <ThemeSwitcher />
        </footer>
      </div>
    </main>
  );
}
