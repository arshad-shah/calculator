import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Display({ result }) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField value={result} id="outlined-basic" variant="outlined" />
    </Box>
  );
}

export default Display;
