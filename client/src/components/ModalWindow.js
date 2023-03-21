import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './ui/Backdrop';

function ModalWindow(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function btnAction() {
    if (props.func != null)
      props.func();
    else
      closeModal();
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <div>
        <p>{props.text}</p>
        <button className='btn' onClick={openModal}>
          {props.button}
        </button>
      </div>
      {modalIsOpen && <Modal text={props.modalText} noHandler={closeModal} yesHandler={btnAction} />}
      {modalIsOpen && <Backdrop onClick={closeModal} />}
    </div>
  );
}

export default ModalWindow;