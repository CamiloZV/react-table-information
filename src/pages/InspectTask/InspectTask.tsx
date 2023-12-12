import React from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';

import './InspectTask.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetAllTasksQuery } from '../../service';
import { taskType } from '../../types';

const InspecTask = () => {
  const navigate = useNavigate();
  const { data } = useGetAllTasksQuery('');
  const { id } = useParams();

  const selectedTask = data?.find((task: taskType) => task.id === Number(id));

  const handlerOnGoBack = () => {
    navigate('/');
  };
  return (
    <Box className='inspect-task--container'>
      <Box
        className='inspect-task--title-container inspect-task__full-row'
        sx={{ py: '1rem', px: '0.5rem' }}
      >
        <Typography variant='subtitle1' sx={{ fontWeight: 600, letterSpacing: 1 }}>
          #{`${selectedTask?.id} ${selectedTask?.title}`}
        </Typography>
      </Box>
      <Button onClick={handlerOnGoBack} sx={{ width: '6rem' }}>
        Go Back
      </Button>
      <Box className='inspect-task__box inspect-task__full-row'>
        <Typography variant='h6'>Closed and distributed</Typography>
        <Typography variant='body1'>All projects memenesrs can see the completed task</Typography>
      </Box>
      <Box className='inspect-task__box inspect-task__mid-row '>
        <Typography>Oficial response</Typography>

        <Typography>Approved</Typography>
        <Typography>The task was approved</Typography>
      </Box>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        className='inspect-task__box inspect-task__mid-row '
      >
        <Typography>General information</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant='h5'>Description</Typography>
            <Typography variant='body1'>{selectedTask?.description}</Typography>
          </Box>
          <Box>
            <Typography variant='h5'>type</Typography>
            <Typography variant='body1'>{selectedTask?.type}</Typography>
            <Typography variant='h5'>priority</Typography>
            <Typography variant='body1'>{selectedTask?.priority}</Typography>
            <Typography variant='h5'>storyPoints</Typography>
            <Typography variant='body1'>{selectedTask?.storyPoints}</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ justifyContent: 'center' }} className='inspect-task__box inspect-task__end-row'>
        <Typography variant='h5' sx={{ mb: '1rem', borderBottom: '1px solid gray' }}>
          Activity log
        </Typography>
        <Typography variant='h6' sx={{ mb: '0.5rem' }}>
          Assign to:
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Avatar />
          <Typography sx={{ mx: '0.5rem', textAlign: 'center', alignSelf: 'center' }}>
            Camilo Zuluaga
          </Typography>
        </Box>
        <Typography variant='h6' sx={{ mb: '0.5rem' }}>
          report to:
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Avatar />
          <Typography sx={{ mx: '0.5rem', textAlign: 'center', alignSelf: 'center' }}>
            Camilo Zuluaga
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InspecTask;
