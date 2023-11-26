import React from "react";
import { Dialog } from "@mui/material";
import { WarningImage, SuccessImage } from "../../assets/images";

const PopUp = ({ isOpen, onClose, dialogText, type }) => {
  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div
          style={{
            backgroundColor: "#FFF",
            width: "500px",
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src={type === 'failed' ? WarningImage : SuccessImage}
              alt=""
              style={{ width: "150px", height: "auto" }}
            />
            <span style={{ fontSize: "25px", fontWeight: "bold" }}>
              {dialogText}
            </span>
            <button
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "#BAD7E9",
              }}
              onClick={onClose}
            >
              OK!
            </button>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
};

export default PopUp;
