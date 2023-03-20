import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './ui/Backdrop';

function Test(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
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
      {modalIsOpen && <Modal text={props.modalText} noHandler={closeModal} yesHandler={closeModal} />}
      {modalIsOpen && <Backdrop onClick={closeModal} />}
    </div>
  );
}

export default Test;