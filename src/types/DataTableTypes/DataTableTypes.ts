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

export const mockColumns: tableColumns[] = [
  {
    field: 'name',
    title: 'Full Name',
  },
  {
    field: 'age',
    title: 'Age',
  },
];

export const mockRows: tableRow[] = [
  {
    id: 0,
    name: 'Jhon Doe',
    age: 99,
  },
  {
    id: 1,
    name: 'Alan Turing',
    age: 111,
  },
];
