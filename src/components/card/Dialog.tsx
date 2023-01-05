import { DialogTitle } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import React from 'react';
import { Results } from './Character';

export interface SimpleDialogProps {
  open: boolean;
  data: Results;
  onClose: (value: string) => void;
}

function DialogChar(props: SimpleDialogProps) {
  const { onClose, data, open } = props;

  const handleClose = (event: object, reason: string) => {
    console.log(event, reason);
    onClose('Hell');
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <p>{data.name}</p>
      <p>{data.created}</p>
      <button onClick={() => onClose('')}>Close</button>
    </Dialog>
  );
}

export default DialogChar;
