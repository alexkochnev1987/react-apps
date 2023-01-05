import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import React from 'react';

type CustomDropDownProps = {
  label: string;
  name: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: string[];
  currentValue: string;
};

const CustomSelect = (props: CustomDropDownProps) => {
  return (
    <TextField
      select //converts to a dropdown
      label={props.label}
      name={props.name}
      onChange={props.changeHandler}
      value={props.currentValue}
      variant={'outlined'} //enables special material-ui styling
      size={'small'}
      margin={'dense'}
    >
      {props.values.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CustomSelect;
