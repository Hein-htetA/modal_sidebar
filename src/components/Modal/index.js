import React, { useState } from "react";
import { ModalCloseButton, ModalContainer, ModalWrapper } from "./StyledModal";
import ClearIcon from "@mui/icons-material/Clear";
import { useGlobalContext } from "../../MainContext";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <ModalWrapper isModalOpen={isModalOpen}>
      <ModalContainer>
        <h2>Modal Content</h2>
        <ModalCloseButton onClick={closeModal}>
          <ClearIcon
            sx={{
              fontSize: "1.5rem",
              stroke: "red",
              strokeWidth: "2",
            }}
          />
        </ModalCloseButton>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
