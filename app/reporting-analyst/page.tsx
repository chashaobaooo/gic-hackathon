import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export default function ReportingAnalyst() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-8 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"}>GIC Hackathon Dashboard</Link>
              <span className="text-muted-foreground">/</span>
              <span>Reporting Analyst</span>
            </div>
          </div>
        </nav>

        <div className="flex-1 w-full max-w-6xl p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Reporting Analyst Dashboard
            </h1>
            <p className="text-muted-foreground">
              Monitor financial reports, analyze performance metrics, and
              generate insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Key Metrics Cards */}
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">
                Portfolio Performance
              </h3>
              <div className="text-3xl font-bold text-green-600 mb-1">
                +12.5%
              </div>
              <p className="text-sm text-muted-foreground">YTD Return</p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">
                Assets Under Management
              </h3>
              <div className="text-3xl font-bold mb-1">$2.4B</div>
              <p className="text-sm text-muted-foreground">Total AUM</p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">Risk Metrics</h3>
              <div className="text-3xl font-bold text-yellow-600 mb-1">
                Medium
              </div>
              <p className="text-sm text-muted-foreground">
                Current Risk Level
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Reports Section */}
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Recent Reports</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <div className="font-medium">
                      Monthly Performance Report
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Generated 2 hours ago
                    </div>
                  </div>
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>
                </div>
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <div className="font-medium">Risk Assessment Summary</div>
                    <div className="text-sm text-muted-foreground">
                      Generated yesterday
                    </div>
                  </div>
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>
                </div>
                <div className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <div className="font-medium">
                      Quarterly Holdings Analysis
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Generated 3 days ago
                    </div>
                  </div>
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Generate Performance Report</div>
                  <div className="text-sm text-muted-foreground">
                    Create detailed performance analysis
                  </div>
                </button>
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Risk Analysis Dashboard</div>
                  <div className="text-sm text-muted-foreground">
                    View current risk metrics and trends
                  </div>
                </button>
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Export Data</div>
                  <div className="text-sm text-muted-foreground">
                    Download reports in various formats
                  </div>
                </button>
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Schedule Report</div>
                  <div className="text-sm text-muted-foreground">
                    Set up automated report generation
                  </div>
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
