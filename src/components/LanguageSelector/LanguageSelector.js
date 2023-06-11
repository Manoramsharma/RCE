import React from "react";
import { styled } from '@mui/material/styles';
import {InputLabel, MenuItem, FormControl, Select } from '@mui/material';

const useStyles = styled((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

export default function LanguageSelector({ changeLanguage }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("javascript");

  const handleChange = (event) => {
    changeLanguage(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Language
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={value}
            onChange={handleChange}
            label="Language"
          >
            <MenuItem value={"cpp"}>CPP</MenuItem>
            <MenuItem value={"javascript"}>JavaScript</MenuItem>
            <MenuItem value={"python"}>Python</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
