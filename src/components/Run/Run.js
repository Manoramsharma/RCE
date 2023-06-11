import React from "react";
import { styled } from '@mui/material/styles';
import {Button} from '@mui/material';

const useStyles = styled((theme) => ({
  root: {
    textColor: "green",
    "& > *": {
      margin: theme.spacing(2),
      minWidth: 120,
    },
  },
}));

export default function ContainedButtons({
  code,
  language,
  setResult,
  onLoading,
  onError,
}) {
  const classes = useStyles();
  const executeCode = () => {
    onLoading(true);
    setResult("");
    fetch(`http://13.233.58.222/${getRoute(language)}`, {
      method: "POST",
      body: JSON.stringify({ code }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        onLoading(false);
        if (data.output) setResult(data.output);
        else setResult(data.message);
        onError(Boolean(data.isError) || !Boolean(data.output));
      });
  };

  return (
    <div className={classes.root} style={{ marginTop: "2px" }}>
      <Button variant="contained" onClick={executeCode}>
        RUN
      </Button>
    </div>
  );
}

const getRoute = (language) => {
  switch (language) {
    case "cpp":
      return "execCpp";
    case "javascript":
      return "execNode";
    case "python":
      return "execPython";
    default:
      return "";
  }
};
