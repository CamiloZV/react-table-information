import React from 'react';
import { render, screen } from '@testing-library/react';
import DataTable from './DataTable';
import { mockColumns, mockRows } from '../../types';

describe('data table test', () => {
  test('render the table component', () => {
    render(<DataTable columns={[]} rows={[]} />);
    const table = screen.getByRole('table');

    expect(table).toBeTruthy();
  });

  test('it should render some information on the table', () => {
    render(<DataTable columns={mockColumns} rows={mockRows} />);

    const nameJhon = screen.getByText(/Jhon Doe/i);

    expect(nameJhon).toBeInTheDocument();
  });
});
