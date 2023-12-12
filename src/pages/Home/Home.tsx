import React, { useState } from 'react';
import { CreateTask, DataTable } from '../../components';
import { tableColumns } from '../../types';
import { useGetAllTasksQuery } from '../../service';
import { Button } from '@mui/material';

const Home = () => {
  const [openCreateTaskModal, setOpenCreateTaskModal] = useState<boolean>(false);

  const columns: tableColumns[] = [
    {
      field: 'title',
      title: 'Title',
    },
    {
      field: 'type',
      title: 'Type',
    },
    {
      field: 'priority',
      title: 'Priority',
    },
    {
      field: 'storyPoints',
      title: 'Story Points',
    },
  ];

  const { data } = useGetAllTasksQuery('');
  const handleOpenCreateTask = () => setOpenCreateTaskModal(true);
  return (
    <>
      <h1>Tickets</h1>
      <Button onClick={() => handleOpenCreateTask()}> Create new task</Button>
      <DataTable columns={columns} rows={data} />
      <CreateTask open={openCreateTaskModal} setOpen={setOpenCreateTaskModal} />
    </>
  );
};

export default Home;
