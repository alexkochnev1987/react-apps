import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { AppBar, Box, IconButton, Typography } from '@mui/material';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import Button from '@mui/material/Button';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { pages } from 'App';
import { useAuth } from 'hook/useAuth';

const Header = () => {
  const user = useAuth();
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
              <Link to={page} key={page}>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>{page}</Button>
              </Link>
            ))}
          </Box>
          <SearchBar />
          {user.isUser ? (
            <Link to="edit">
              <Button
                sx={{ my: 2, color: 'white' }}
                variant="outlined"
                startIcon={<EditSharpIcon sx={{ color: 'white' }} />}
              >
                Hello {user.name}!
              </Button>
            </Link>
          ) : (
            <p>Login</p>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
