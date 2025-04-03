import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import Search from '@mui/icons-material/Search';
const SearchBar = () => {
    return (
        <Paper
            component='form'
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                paddingLeft: 2,
                boxShadow: 'none',
                marginRight: { sm: 5 }
            }}>
            <input className='search-bar' type="text" placeholder='Search ...' />
            <IconButton type='submit' sx={{ padding: '10px', color: 'red' }}>
                <Search />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
