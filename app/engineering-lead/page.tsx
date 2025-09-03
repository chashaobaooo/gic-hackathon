import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export default function EngineeringLead() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-8 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"}>GIC Hackathon Dashboard</Link>
              <span className="text-muted-foreground">/</span>
              <span>Engineering Lead</span>
            </div>
          </div>
        </nav>
        
        <div className="flex-1 w-full max-w-6xl p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Engineering Lead Dashboard</h1>
            <p className="text-muted-foreground">
              Manage development teams, monitor system performance, and oversee technical infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* System Status Cards */}
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">System Uptime</h3>
              <div className="text-3xl font-bold text-green-600 mb-1">99.8%</div>
              <div className="text-sm text-muted-foreground">Last 30 days</div>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">Active Deployments</h3>
              <div className="text-3xl font-bold mb-1">47</div>
              <div className="text-sm text-green-600">3 deployed today</div>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">Open Issues</h3>
              <div className="text-3xl font-bold text-yellow-600 mb-1">23</div>
              <div className="text-sm text-muted-foreground">5 critical</div>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">Team Velocity</h3>
              <div className="text-3xl font-bold text-green-600 mb-1">85</div>
              <div className="text-sm text-muted-foreground">Story points/sprint</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Deployments */}
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Recent Deployments</h3>
              <div className="space-y-3">
                <div className="p-3 border rounded">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-green-600">SUCCESS</div>
                    <div className="text-sm text-muted-foreground">1 hour ago</div>
                  </div>
                  <div className="text-sm font-medium">Trading API v2.1.4</div>
                  <div className="text-xs text-muted-foreground">Production deployment</div>
                </div>
                <div className="p-3 border rounded">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-green-600">SUCCESS</div>
                    <div className="text-sm text-muted-foreground">3 hours ago</div>
                  </div>
                  <div className="text-sm font-medium">Portfolio Dashboard v1.8.2</div>
                  <div className="text-xs text-muted-foreground">Staging deployment</div>
                </div>
                <div className="p-3 border rounded">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-red-600">FAILED</div>
                    <div className="text-sm text-muted-foreground">6 hours ago</div>
                  </div>
                  <div className="text-sm font-medium">Risk Engine v3.0.1</div>
                  <div className="text-xs text-muted-foreground">Production rollback</div>
                </div>
                <div className="p-3 border rounded">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-green-600">SUCCESS</div>
                    <div className="text-sm text-muted-foreground">1 day ago</div>
                  </div>
                  <div className="text-sm font-medium">Authentication Service v2.5.0</div>
                  <div className="text-xs text-muted-foreground">Production deployment</div>
                </div>
              </div>
            </div>

            {/* Team Performance */}
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Team Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Frontend Team</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Backend Team</span>
                    <span>87%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '87%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>DevOps Team</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>QA Team</span>
                    <span>89%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '89%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Engineering Tools */}
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Engineering Tools</h3>
              <div className="space-y-3">
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">CI/CD Pipeline</div>
                  <div className="text-sm text-muted-foreground">Manage deployment workflows</div>
                </button>
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">System Monitoring</div>
                  <div className="text-sm text-muted-foreground">View application performance</div>
                </button>
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Code Review Dashboard</div>
                  <div className="text-sm text-muted-foreground">Track pull requests and reviews</div>
                </button>
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Sprint Planning</div>
                  <div className="text-sm text-muted-foreground">Manage agile development</div>
                </button>
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Infrastructure Console</div>
                  <div className="text-sm text-muted-foreground">Manage cloud resources</div>
                </button>
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Security Audit</div>
                  <div className="text-sm text-muted-foreground">Review security vulnerabilities</div>
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
