"use client";

import Link from "next/link";
import { useState } from "react";

const roles = [
  { name: "Reporting Analyst", path: "/reporting-analyst" },
  { name: "Compliance Analyst", path: "/compliance-analyst" },
  { name: "Portfolio Manager", path: "/portfolio-manager" },
  { name: "Engineering Lead", path: "/engineering-lead" },
];

export function RoleSelector() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-4xl p-5">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to GIC Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          Select your role to access your personalized dashboard
        </p>
      </div>

      <div className="w-full max-w-2xl">
        {/* Tab Navigation */}
        <div className="flex border-b border-border">
          {roles.map((role, idx) => (
            <button
              key={role.name}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === idx
                  ? "border-b-2 border-primary text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
              onClick={() => setActiveTab(idx)}
            >
              {role.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8 p-8 border border-border rounded-lg bg-card">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              {roles[activeTab].name}
            </h2>
            <p className="text-muted-foreground mb-8">
              Access your role-specific tools and analytics dashboard
            </p>
            <Link
              href={roles[activeTab].path}
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-2 font-semibold transition-colors"
            >
              Continue as {roles[activeTab].name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
