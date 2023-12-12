export interface tableColumns {
  field: string;
  title: string;
}

export interface tableReq {
  columns: tableColumns[];
  rows: tableRow[];
}

export interface tableRow {
  id: number;
  [key: string]: string | number;
}
