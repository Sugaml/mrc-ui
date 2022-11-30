import { TextField } from "@mui/material";
import React from "react";

function InputField({ label, type, value, onChange, error, helperText, id }) {
  return (
    <div className="InputField">
      <TextField
        type={type}
        // id="outlined-error"
        id={id}
        label={label}
        size="small"
        fullWidth
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
        autoComplete="on"
      />
    </div>
  );
}

export default InputField;