import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface TableProps {
  id?: string;
}

export interface TableRowProps {
  vals: string[];
  isExpandable: boolean;
  isDeletable: boolean;
  id: string;
  widths: number[];
}