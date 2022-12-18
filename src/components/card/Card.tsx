import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './card.css';
import Box from '@mui/material/Box';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import { pink } from '@mui/material/colors';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          },
        },
      ],
    },
  },
});

const Card = () => {
  const [value, setValue] = useState<number | null>(2.5);
  return (
    <Paper elevation={3}>
      <img
        src="https://images.pexels.com/photos/14491698/pexels-photo-14491698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        className="img"
      />
      <ThemeProvider theme={theme}>
        <Box sx={{ p: 1 }}>
          <Typography variant="h5" gutterBottom>
            My card HEADING
          </Typography>
          <Box display={'flex'} alignItems={'center'}>
            <AccessTimeSharpIcon sx={{ color: pink[500], fontSize: 24 }} />
            <Typography variant="body1" paddingLeft={1}>
              5 hours
            </Typography>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            <Rating
              name="simple-controlled"
              value={value}
              precision={0.1}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography paddingLeft={1} variant="body1">
              {value}
            </Typography>
            <Typography paddingLeft={1} variant="body2">
              (456 views)
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <Typography variant="h6">From 156 $</Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </Paper>
  );
};

export default Card;
