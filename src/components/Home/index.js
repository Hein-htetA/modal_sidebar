import React from "react";
import { ModalButton, SidebarButton } from "./StyledHome";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

const Home = () => {
  return (
    <>
      <ModalButton>Show Modal</ModalButton>
      <SidebarButton>
        <ViewHeadlineIcon fontSize="2rem" />
      </SidebarButton>
    </>
  );
};

export default Home;
