import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface TableProps {
  id?: string;
}

export interface TableRowProps {
  id: string;
  kidsIds: string[];
  vals: string[];
  widths: number[];
  isDeletable: boolean;
}

export interface TableColumnsProps {
  vals: string[];
  widths: number[];
}