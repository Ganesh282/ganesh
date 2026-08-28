import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { demoVulnerabilities, type Vulnerability } from '@/data/demoData';

type VulnOpsContextValue = {
  vulnerabilities: Vulnerability[];
  budget: number;
  setBudget: (budget: number) => void;
  selectedIds: string[];
  optimize: () => void;
  addDemoCritical: () => void;
  resetDemo: () => void;
  planRun: number;
};

const VulnOpsContext = createContext<VulnOpsContextValue | null>(null);

export function VulnOpsProvider({ children }: { children: ReactNode }) {
  const [vulnerabilities, setVulnerabilities] = useState(demoVulnerabilities);
  const [budget, setBudget] = useState(10);
  const [selectedIds, setSelectedIds] = useState<string[]>(['1', '3', '4', '5']);
  const [planRun, setPlanRun] = useState(1);

  const optimize = () => {
    const sorted = [...vulnerabilities].sort((a, b) => (b.riskReduction / b.effort) - (a.riskReduction / a.effort));
    let used = 0;
    const selected: string[] = [];
    sorted.forEach((vulnerability) => {
      if (used + vulnerability.effort <= budget) {
        selected.push(vulnerability.id);
        used += vulnerability.effort;
      }
    });
    setSelectedIds(selected);
    setVulnerabilities((current) => current.map((item) => selected.includes(item.id) ? { ...item, status: 'In remediation' } : item));
    setPlanRun((run) => run + 1);
  };

  const addDemoCritical = () => {
    setVulnerabilities((current) => [{ id: 'demo', cve: 'CVE-2026-DEMO-001', cvss: 10, severity: 'Critical', exploitability: 100, exposure: 100, criticality: 100, asset: 'Payment Gateway', effort: 1.5, riskScore: 100, riskReduction: 31, fix: 'Isolate service and deploy hotfix', status: 'Open', discovered: 'Just now' }, ...current]);
    setPlanRun((run) => run + 1);
  };

  const resetDemo = () => {
    setVulnerabilities(demoVulnerabilities);
    setSelectedIds(['1', '3', '4', '5']);
    setPlanRun(1);
  };

  const value = useMemo(() => ({ vulnerabilities, budget, setBudget, selectedIds, optimize, addDemoCritical, resetDemo, planRun }), [vulnerabilities, budget, selectedIds, planRun]);
  return <VulnOpsContext.Provider value={value}>{children}</VulnOpsContext.Provider>;
}

export function useVulnOps() {
  const context = useContext(VulnOpsContext);
  if (!context) throw new Error('useVulnOps must be used within VulnOpsProvider');
  return context;
}
