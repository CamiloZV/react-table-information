import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import DataTable from './DataTable';
import { BrowserRouter } from 'react-router-dom';
import * as router from 'react-router';
import { mockColumns, mockRows } from '../../mocks';

describe('data table test', () => {
  test('render the table component', () => {
    render(
      <BrowserRouter>
        <DataTable columns={[]} rows={[]} />
      </BrowserRouter>,
    );
    const table = screen.getByRole('table');

    expect(table).toBeTruthy();
  });

  test('it should render some information on the table', () => {
    render(
      <BrowserRouter>
        <DataTable columns={mockColumns} rows={mockRows} />
      </BrowserRouter>,
    );

    const nameJhon = screen.getByText(/Jhon Doe/i);

    expect(nameJhon).toBeInTheDocument();
  });

  test('it should try to inspect info', () => {
    const mockNavigate = jest.fn();
    jest.spyOn(router, 'useNavigate').mockImplementation(() => mockNavigate);

    render(
      <BrowserRouter>
        <DataTable columns={mockColumns} rows={mockRows} />
      </BrowserRouter>,
    );

    const tableCell = screen.getByText(/Jhon Doe/i);

    fireEvent.click(tableCell);

    expect(mockNavigate).toBeCalled();
  });
});
