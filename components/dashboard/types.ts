import { TooltipProps } from "recharts";

export type CustomTooltipProps = TooltipProps<number, string> & {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: {
      percentage?: number;
    };
    name?: string;
  }>;
  label?: string;
};

export interface SummaryCard {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  bgColor: string;
}

export interface Transaction {
  user: string;
  type: string;
  amount: string;
  date: string;
  status: string;
}

export interface PendingApproval {
  user: string;
  type: string;
  amount: string;
  date: string;
}

export interface ChartData {
  name: string;
  amount?: number;
  users?: number;
  value?: number;
  percentage?: number;
}
