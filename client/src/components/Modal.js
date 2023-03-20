function Modal(props) {
    function yesHandler() {
        props.yesHandler();
    }

    function noHandler() {
        props.noHandler();
    }

    return (
        <div className='modal'>
            <p>{props.text}</p>
            <button className='btn' onClick={yesHandler}>Yes</button>
            <button className='btn btn-no' onClick={noHandler}>No</button>
        </div>
    );
}

export default Modal;