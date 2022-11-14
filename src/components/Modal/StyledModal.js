import { Box, Button, styled } from "@mui/material";

export const ModalWrapper = styled(Box)(({ isModalOpen }) => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "rgba(210, 215, 211, 0.5)",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.5s linear",
  ...(isModalOpen
    ? { width: "100%", height: "100%" }
    : { width: "0px", height: "0px" }),
}));

export const ModalContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  height: "400px",
  width: "600px",
  backgroundColor: "white",
});

export const ModalCloseButton = styled(Button)({
  position: "absolute",
  right: "0px",
  top: "0px",
});
