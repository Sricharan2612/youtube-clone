import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Box } from '@mui/material';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';
import Videos from './Videos';

const ChannelDetails = () => {
    const { id } = useParams();
    const [channelDetail, setChannelDetail] = useState(null);
    const [channelVideos, setChannelVideos] = useState([]);
    console.log(channelVideos);
    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]));

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setChannelVideos(data?.items));
    }, [id]);
    return (
        <Box sx={{ minHeight: '95vh' }}>
            <Box>
                <div
                    style={{ background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%,rgba(206,3,184,1) 100%,rgba(0,212,255,1))', zIndex: 10, height: '300px' }} />
                <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
            </Box>
            <Box p={5}>
                <Box>
                    <Videos videos={channelVideos} />
                </Box>
            </Box>
        </Box >
    );
};

export default ChannelDetails;;
