import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import Search from '@mui/icons-material/Search';
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    //Handlers
    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    };
    return (
        <Paper
            component='form'
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                paddingLeft: 2,
                boxShadow: 'none',
                marginRight: { sm: 5 }
            }}>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='search-bar' type="text" placeholder='Search ...' />
            <IconButton type='submit' sx={{ padding: '10px', color: 'red' }}>
                <Search />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
