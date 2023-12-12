import React, { FormEvent, useState } from 'react';
import { createTaskReq, taskType } from '../../types';
import { Box, Button, IconButton, MenuItem, Modal, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useCreateTaskMutation } from '../../service';

import './CreateTask.scss';

const CreateTask = ({ open, setOpen }: createTaskReq) => {
  const handleClose = () => setOpen(false);

  const [createTask] = useCreateTaskMutation();

  const initialState = {
    title: '',
    type: '',
    priority: '',
    description: '',
    storyPoints: 0,
  };

  const [newTaskData, setNewTaskData] = useState<taskType>(initialState);

  const handleOnChange = <typeProperty extends keyof taskType>(
    property: typeProperty,
    value: taskType[typeProperty],
  ) => {
    const updatedTaskData = { ...newTaskData };

    updatedTaskData[property] = value;

    setNewTaskData(updatedTaskData);
  };

  const handleOnSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await createTask(newTaskData);
      setNewTaskData(initialState);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className='modal-container'>
        <IconButton className='modal-close__icon' onClick={handleClose} sx={{ position: 'fixed' }}>
          <CloseIcon />
        </IconButton>
        <Typography id='modal-modal-title' variant='h4' component='h2'>
          Create New Task
        </Typography>
        <Box
          className='form-container'
          sx={{
            '& .MuiTextField-root': { m: 1 },
          }}
          component='form'
          onSubmit={handleOnSubmit}
        >
          <Typography
            id='modal-modal-title'
            variant='h6'
            sx={{ my: '1rem', alignSelf: 'flex-start' }}
          >
            General Information
          </Typography>

          <TextField
            required
            value={newTaskData.title}
            label='Task title'
            sx={{ width: '98%' }}
            onChange={(e) => handleOnChange('title', e?.target?.value)}
          />
          <TextField
            required
            value={newTaskData.type}
            id='outlined-select-currency'
            select
            label='Type'
            sx={{ width: '98%' }}
            onChange={(e) => handleOnChange('type', e?.target?.value)}
          >
            <MenuItem key={1} value={1}>
              Issue
            </MenuItem>
            <MenuItem key={2} value={2}>
              Bug
            </MenuItem>
          </TextField>
          <TextField
            required
            id='outlined-select-currency'
            select
            label='Priority'
            value={newTaskData.priority}
            sx={{ width: '98%' }}
            onChange={(e) => handleOnChange('priority', e?.target?.value)}
          >
            <MenuItem key={1} value={1}>
              Normal
            </MenuItem>
            <MenuItem key={2} value={2}>
              Urgent
            </MenuItem>
          </TextField>
          <TextField
            required
            id='outlined-multiline-static'
            label='Description'
            multiline
            rows={4}
            value={newTaskData.description}
            sx={{ width: '98%' }}
            onChange={(e) => handleOnChange('description', e?.target?.value)}
          />
          <TextField
            id='outlined-number'
            label='Story Points'
            type='number'
            InputLabelProps={{
              shrink: true,
            }}
            value={newTaskData.storyPoints}
            sx={{ width: '98%' }}
            onChange={(e) => handleOnChange('storyPoints', Number(e?.target?.value))}
          />

          <Button
            variant='contained'
            type='submit'
            sx={{ maxWidth: '10rem', mt: '1rem', alignSelf: 'center' }}
          >
            Create Task
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateTask;
