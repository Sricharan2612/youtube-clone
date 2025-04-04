import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import { VideoCard, ChannelCard } from './index';

const Videos = ({ videos, direction }) => {
    if (!videos?.length) return 'Loading...';
    return (
        <Grid sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', }} direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
            {
                videos?.map((item, i) => (
                    <Box key={i}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.playlistId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channelDetail={item} />}
                    </Box>
                ))
            }
        </Grid>
    );
};

export default Videos;