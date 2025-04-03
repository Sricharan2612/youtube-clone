import { Box, colors, Stack, Typography } from '@mui/material';
import React from 'react';
import Sidebar from './Sidebar';

const Feed = () => {
    return (
        <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
            <Box sx={{ height: { xs: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { xs: 0, md: 2 } }}>
                <Sidebar />
                <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>Copyright 2025 Sricharan</Typography>
            </Box>
            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                    New
                    <span style={{ color: '#F31503' }}>Videos</span>
                </Typography>
                <Videos />
            </Box>
        </Stack >
    );
};

export default Feed;
