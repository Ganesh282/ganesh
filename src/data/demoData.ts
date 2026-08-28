export type Severity = 'Critical' | 'High' | 'Medium' | 'Low';
export type VulnStatus = 'Open' | 'In remediation' | 'Accepted';

export type Vulnerability = {
  id: string;
  cve: string;
  cvss: number;
  severity: Severity;
  exploitability: number;
  exposure: number;
  criticality: number;
  asset: string;
  effort: number;
  riskScore: number;
  riskReduction: number;
  fix: string;
  status: VulnStatus;
  discovered: string;
};

export const demoVulnerabilities: Vulnerability[] = [
  { id: '1', cve: 'CVE-2024-3094', cvss: 10, severity: 'Critical', exploitability: 98, exposure: 94, criticality: 96, asset: 'Payment Gateway', effort: 2.5, riskScore: 98, riskReduction: 28, fix: 'Upgrade liblzma package', status: 'In remediation', discovered: '2h ago' },
  { id: '2', cve: 'CVE-2024-21410', cvss: 9.8, severity: 'Critical', exploitability: 91, exposure: 88, criticality: 91, asset: 'Identity Platform', effort: 3.5, riskScore: 94, riskReduction: 24, fix: 'Apply Exchange security patch', status: 'Open', discovered: '5h ago' },
  { id: '3', cve: 'CVE-2023-48795', cvss: 8.1, severity: 'High', exploitability: 86, exposure: 72, criticality: 84, asset: 'VPN Edge Cluster', effort: 1.5, riskScore: 87, riskReduction: 19, fix: 'Patch SSH transport layer', status: 'Open', discovered: '1d ago' },
  { id: '4', cve: 'CVE-2024-1709', cvss: 8.8, severity: 'High', exploitability: 78, exposure: 64, criticality: 89, asset: 'Admin Console', effort: 2, riskScore: 84, riskReduction: 16, fix: 'Upgrade ConnectWise ScreenConnect', status: 'Open', discovered: '1d ago' },
  { id: '5', cve: 'CVE-2023-44487', cvss: 7.5, severity: 'High', exploitability: 82, exposure: 58, criticality: 77, asset: 'API Gateway', effort: 1, riskScore: 79, riskReduction: 12, fix: 'Enable HTTP/2 request limits', status: 'In remediation', discovered: '2d ago' },
  { id: '6', cve: 'CVE-2024-21619', cvss: 7.2, severity: 'High', exploitability: 62, exposure: 66, criticality: 73, asset: 'Customer Portal', effort: 2.5, riskScore: 71, riskReduction: 14, fix: 'Update Jenkins core', status: 'Open', discovered: '3d ago' },
  { id: '7', cve: 'CVE-2023-46747', cvss: 7.5, severity: 'High', exploitability: 59, exposure: 54, criticality: 69, asset: 'Load Balancer', effort: 4, riskScore: 68, riskReduction: 11, fix: 'Apply F5 BIG-IP hotfix', status: 'Open', discovered: '4d ago' },
  { id: '8', cve: 'CVE-2024-22250', cvss: 6.1, severity: 'Medium', exploitability: 52, exposure: 49, criticality: 62, asset: 'Dev Workstation Pool', effort: 1, riskScore: 56, riskReduction: 7, fix: 'Upgrade VMware Workstation', status: 'Accepted', discovered: '5d ago' },
  { id: '9', cve: 'CVE-2023-34362', cvss: 9.8, severity: 'Critical', exploitability: 74, exposure: 39, criticality: 51, asset: 'Legacy File Transfer', effort: 6, riskScore: 63, riskReduction: 18, fix: 'Migrate MOVEit workloads', status: 'Open', discovered: '6d ago' },
  { id: '10', cve: 'CVE-2024-6387', cvss: 6.5, severity: 'Medium', exploitability: 47, exposure: 41, criticality: 56, asset: 'Bastion Hosts', effort: 1.5, riskScore: 52, riskReduction: 8, fix: 'Upgrade OpenSSH', status: 'Open', discovered: '1w ago' },
  { id: '11', cve: 'CVE-2023-23397', cvss: 9.8, severity: 'Critical', exploitability: 44, exposure: 31, criticality: 58, asset: 'Executive Mailboxes', effort: 3, riskScore: 57, riskReduction: 15, fix: 'Patch Outlook clients', status: 'Accepted', discovered: '1w ago' },
  { id: '12', cve: 'CVE-2024-29849', cvss: 5.3, severity: 'Medium', exploitability: 35, exposure: 28, criticality: 44, asset: 'Internal Wiki', effort: 2, riskScore: 39, riskReduction: 5, fix: 'Update Confluence node', status: 'Open', discovered: '1w ago' },
  { id: '13', cve: 'CVE-2024-28185', cvss: 4.2, severity: 'Low', exploitability: 26, exposure: 18, criticality: 30, asset: 'QA Kubernetes', effort: 1, riskScore: 27, riskReduction: 4, fix: 'Refresh ingress image', status: 'Open', discovered: '2w ago' },
  { id: '14', cve: 'CVE-2023-4911', cvss: 7.8, severity: 'High', exploitability: 32, exposure: 21, criticality: 37, asset: 'Analytics Cluster', effort: 2.5, riskScore: 42, riskReduction: 9, fix: 'Patch glibc runtime', status: 'Open', discovered: '2w ago' },
];

export const heatmap = [
  [19, 28, 32, 35, 42, 48, 52, 44, 39, 31],
  [15, 22, 27, 33, 41, 55, 64, 58, 46, 37],
  [11, 17, 25, 38, 56, 72, 81, 69, 52, 41],
  [8, 14, 31, 49, 68, 85, 94, 82, 66, 48],
  [5, 10, 22, 37, 54, 69, 76, 63, 47, 29],
];
