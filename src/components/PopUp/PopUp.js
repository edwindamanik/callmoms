import React from "react";
import { Box, Dialog } from "@mui/material";

const PopUp = ({ isOpen, onClose, dialogText }) => {

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            backgroundColor: "#FFF",
            width: "400px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "25px" }}>{dialogText}</span>
            <button
              onClick={onClose}
            >
              OK!
            </button>
          </div>
        </Box>
      </Dialog>
    </React.Fragment>
  );
};

export default PopUp;
