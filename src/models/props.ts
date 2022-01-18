import { ReactNode } from "react";
import { Kids } from "./table";

export interface ChildrenProps {
  children: ReactNode;
}

export interface TableProps {
  id?: string;
}

export interface TableRowProps {
  id: string;
  kids: string[];
  vals: string[];
  widths: number[];
  isDeletable: boolean;
}

export interface TableColumnsProps {
  vals: string[];
  widths: number[];
  onClick: () => void;
}