import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetails, ChannelDetails, SearchedFeed } from './components/index';

function App() {
  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetails />} />
        <Route path='/channel/:id' element={<ChannelDetails />} />
        <Route path='/search/:searchTerm' element={<SearchedFeed />} />
      </Routes>
    </Box>
  );
}

export default App;
