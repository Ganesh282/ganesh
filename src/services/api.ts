export async function analyzeDataset<T>(rows: T[]): Promise<{ rows: T[]; analyzedAt: string }> {
  await new Promise((resolve) => window.setTimeout(resolve, 700));
  return { rows, analyzedAt: new Date().toISOString() };
}
