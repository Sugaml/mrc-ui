import { Button } from "@mui/material";
import React from "react";

function CommonButton({ type, buttonName, onClick, size, color, disabled }) {
  return (
    <div>
      <Button
        variant="contained"
        type={type}
        onClick={onClick}
        size={size}
        color={color}
        disabled={disabled}
      >
        {buttonName}
      </Button>
    </div>
  );
}

export default CommonButton;