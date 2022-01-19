import { ReactNode } from "react";
import { Data, Kids } from "./table";

export interface ChildrenProps {
  children: ReactNode;
}

export interface TableProps {
  id?: string;
}

export interface TableHeaderProps {
  name: string;
  labels: string[];
  widths: number[];
}

export interface TableRowProps {
  id: string;
  data: Data;
  kids: Kids;
  widths: number[];
  isDeletable: boolean;
}

export interface TableColumnsProps {
  vals: string[];
  widths: number[];
}