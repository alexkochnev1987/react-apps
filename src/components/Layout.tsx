import 'react-toastify/dist/ReactToastify.css';
import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Container sx={{ mt: '50px' }}>
        <Outlet />
      </Container>
      <footer>2022</footer>
    </>
  );
};

export default Layout;
