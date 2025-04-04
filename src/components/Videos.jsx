import { Box, Stack } from '@mui/material';
import React from 'react';
import { VideoCard, ChannelCard } from './index';

const Videos = ({ videos }) => {
    return (
        <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
            {
                videos?.map((item, i) => (
                    <Box key={i}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channelDetail={item} />}
                    </Box>
                ))
            }
        </Stack>
    );
};

export default Videos;