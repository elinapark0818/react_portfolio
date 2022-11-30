import React, { useState } from "react";
import ModalPortal from "../../components/modal/Portal";
import { Modal } from "../../components/modal/Modal";
// todo: Portal, Modal test

export const Main = () => {
  const [modalOn, setModalOn] = useState(false);

  const handleModal = () => {
    setModalOn(!modalOn);
  };
  return (
    <div>
      <button onClick={handleModal}>열기</button>
      <ModalPortal>{modalOn && <Modal onClose={handleModal} />}</ModalPortal>
    </div>
  );
};
