export interface Client {
  id: string;
  name: string;
  email: string;
  company: string;
}

export interface FinancialData {
  id: string;
  clientId: string;
  date: string;
  revenue: number;
  expenses: number;
  profit: number;
  category: string;
}

export interface Report {
  id: string;
  clientId: string;
  type: 'weekly' | 'monthly' | 'quarterly';
  startDate: string;
  endDate: string;
  status: 'draft' | 'sent';
}