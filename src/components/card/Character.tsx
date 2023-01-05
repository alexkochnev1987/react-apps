import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './card.css';
import Box from '@mui/material/Box';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import { pink } from '@mui/material/colors';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material';
import DialogChar from './Dialog';

export interface Results {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
}

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

const Character = (props: { user: Results }) => {
  const user = props.user;
  const [value, setValue] = useState<number | null>(2.5);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    console.log(value);
  };
  return (
    <Paper elevation={3}>
      <DialogChar open={open} data={user} onClose={handleClose} />
      <img src={user.image} alt={user.name} className="img" />
      <ThemeProvider theme={theme}>
        <Box sx={{ p: 1 }}>
          <Typography variant="h5" gutterBottom>
            {user.name}
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
              {user.species}
            </Typography>
          </Box>
          <div onClick={handleClickOpen}>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
              <Typography variant="h6">{user.status}</Typography>
            </Box>
          </div>
        </Box>
      </ThemeProvider>
    </Paper>
  );
};

export default Character;
