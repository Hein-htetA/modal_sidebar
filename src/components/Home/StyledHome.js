import { keyframes, styled } from "@mui/material";

const bounce = keyframes`
    0% {transform: scale(1)}
    50% {transform: scale(1.5)}
    100% {transform: scale(1)}`;

export const ModalButton = styled("button")({
  backgroundColor: "black",
  color: "white",
  borderRadius: "8px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "1.5rem",
});

export const SidebarButton = styled("button")({
  color: "#49a6e9",
  position: "fixed",
  top: "20px",
  left: "20px",
  fontSize: "3rem",
  height: "auto",
  padding: "0px",
  display: "flex",
  border: "none",
  backgroundColor: "inherit",
  animationName: `${bounce}`,
  animationDuration: "2s",
  animationIterationCount: "infinite",
});
