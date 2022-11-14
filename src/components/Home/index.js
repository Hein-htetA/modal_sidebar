import React from "react";
import { ModalButton, SidebarButton } from "./StyledHome";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import { useGlobalContext } from "../../MainContext";

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();
  return (
    <>
      <ModalButton onClick={openModal}>Show Modal</ModalButton>
      <SidebarButton onClick={openSidebar}>
        <ViewHeadlineIcon fontSize="2rem" />
      </SidebarButton>
    </>
  );
};

export default Home;
