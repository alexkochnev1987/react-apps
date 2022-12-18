import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { AppBar, Box, IconButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import SearchBar from './SearchBar';

const pages = ['Products', 'Pricing', 'Blog'];

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>
          <SearchBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
