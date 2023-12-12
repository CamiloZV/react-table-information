import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const PageContainer = () => {
  return (
    <Box sx={{ m: '0.5rem' }}>
      <Outlet />
    </Box>
  );
};

export default PageContainer;
