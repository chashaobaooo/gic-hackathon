import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export default function ComplianceAnalyst() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-8 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"}>GIC Hackathon Dashboard</Link>
              <span className="text-muted-foreground">/</span>
              <span>Compliance Analyst</span>
            </div>
          </div>
        </nav>
        
        <div className="flex-1 w-full max-w-6xl p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Compliance Analyst Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor regulatory compliance, track violations, and manage risk assessments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Compliance Status Cards */}
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">Compliance Score</h3>
              <div className="text-3xl font-bold text-green-600 mb-1">98.5%</div>
              <p className="text-sm text-muted-foreground">Overall Rating</p>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">Open Issues</h3>
              <div className="text-3xl font-bold text-red-600 mb-1">3</div>
              <p className="text-sm text-muted-foreground">Requires Attention</p>
            </div>
            
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">Reviews Pending</h3>
              <div className="text-3xl font-bold text-yellow-600 mb-1">12</div>
              <p className="text-sm text-muted-foreground">This Month</p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-lg font-semibold mb-2">Last Audit</h3>
              <div className="text-3xl font-bold text-green-600 mb-1">Pass</div>
              <p className="text-sm text-muted-foreground">Q3 2024</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Compliance Issues */}
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Active Compliance Issues</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start p-3 border rounded">
                  <div className="flex-1">
                    <div className="font-medium text-red-600">High Priority</div>
                    <div className="text-sm">Investment Limit Breach - Portfolio ABC</div>
                    <div className="text-xs text-muted-foreground">Due: 2 days</div>
                  </div>
                  <button className="text-blue-600 hover:underline text-sm">Review</button>
                </div>
                <div className="flex justify-between items-start p-3 border rounded">
                  <div className="flex-1">
                    <div className="font-medium text-yellow-600">Medium Priority</div>
                    <div className="text-sm">Documentation Update Required</div>
                    <div className="text-xs text-muted-foreground">Due: 1 week</div>
                  </div>
                  <button className="text-blue-600 hover:underline text-sm">Review</button>
                </div>
                <div className="flex justify-between items-start p-3 border rounded">
                  <div className="flex-1">
                    <div className="font-medium text-yellow-600">Medium Priority</div>
                    <div className="text-sm">KYC Review Overdue</div>
                    <div className="text-xs text-muted-foreground">Due: 5 days</div>
                  </div>
                  <button className="text-blue-600 hover:underline text-sm">Review</button>
                </div>
              </div>
            </div>

            {/* Regulatory Tools */}
            <div className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Compliance Tools</h3>
              <div className="space-y-3">
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Risk Assessment Wizard</div>
                  <div className="text-sm text-muted-foreground">Evaluate investment compliance risks</div>
                </button>
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Regulatory Filing Center</div>
                  <div className="text-sm text-muted-foreground">Manage regulatory submissions</div>
                </button>
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Audit Trail Viewer</div>
                  <div className="text-sm text-muted-foreground">Track all compliance-related activities</div>
                </button>
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Policy Management</div>
                  <div className="text-sm text-muted-foreground">Update and review compliance policies</div>
                </button>
                <button className="w-full p-3 text-left border rounded hover:bg-primary/5 transition-colors">
                  <div className="font-medium">Training Module</div>
                  <div className="text-sm text-muted-foreground">Access compliance training resources</div>
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
