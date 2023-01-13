import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './ui/Backdrop';

function Test(props) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function buttonHandler() {
    console.log('Clicked:', props.text);
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <h2>{props.text}</h2>
      <div>
        <button onClick={buttonHandler}>Button</button>
      </div>
      { modalIsOpen && <Modal noHandler={closeModalHandler} yesHandler={closeModalHandler} /> }
      { modalIsOpen ? <Backdrop onClick={closeModalHandler} /> : null }
    </div>
  );
}

export default Test;