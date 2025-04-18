import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { CheckCircle } from '@mui/icons-material';
import Videos from './Videos';

const VideoDetails = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]));

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setRelatedVideos(data.items));

    }, [id]);

    if (!videoDetail?.snippet) return 'Loading...';

    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

    return (
        <Box sx={{ minHeight: '95vh' }}>
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            className='react-player'
                            controls />
                        <Typography
                            color='#fff'
                            variant='h5'
                            fontWeight='bold' p={2}>
                            {title}
                        </Typography>
                        <Stack
                            direction='row'
                            justifyContent='space-between'
                            sx={{ color: '#fff' }}
                            px={2}
                            py={1}>
                            <Link to={`channel/${channelId}`}>
                                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff'>
                                    {channelTitle}
                                    <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                                </Typography>
                            </Link>
                            <Stack direction='row' gap='20px' alignItems='center'>
                                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                                    {parseInt(likeCount).toLocaleString()} views
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{ xs: 5, md: 1 }} justifyContent='center' alignItems='center'>
                    <Videos videos={relatedVideos} direction='column' />
                </Box>
            </Stack>
        </Box>
    );
};

export default VideoDetails;;;
