import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../context';
import CreateTask from './CreateTask';

describe('Create task test', () => {
  test('render Create task', () => {
    const open = true;
    const mockSetOpen = jest.fn();

    render(
      <Provider store={store}>
        <CreateTask open={open} setOpen={mockSetOpen} />
      </Provider>,
    );
    const createNewTaskTitle = screen.getByText(/Create New Task/i);

    expect(createNewTaskTitle).toBeInTheDocument();
  });

  test('it should try to create a new task', async () => {
    const open = true;
    const mockSetOpen = jest.fn();

    render(
      <Provider store={store}>
        <CreateTask open={open} setOpen={mockSetOpen} />
      </Provider>,
    );

    const taskTitleInput = screen.getByRole('textbox', {
      name: /Task title/i,
    });

    fireEvent.change(taskTitleInput, { target: { value: 'Task 1' } });

    const taskCreateButton = screen.getByText(/Create Task/i);

    fireEvent.click(taskCreateButton);

    await waitFor(() => {
      const taskTitleInput = screen.getByRole('textbox', {
        name: /Task title/i,
      });

      expect(taskTitleInput).toHaveValue('');
    });
  });

  test('it should close the modal', () => {
    let open = true;
    const mockSetOpen = jest.fn((value) => {
      open = value;
    });

    render(
      <Provider store={store}>
        <CreateTask open={open} setOpen={mockSetOpen} />
      </Provider>,
    );

    const closeButton = screen.getByTestId('close-icon');

    fireEvent.click(closeButton);

    expect(open).toBeFalsy();
  });
});
