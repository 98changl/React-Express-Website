function Modal(props) {
    function yesHandler() {
        props.yesHandler();
    }

    function noHandler() {
        props.noHandler();
    }

    return (
        <div>
            <p>Are you sure?</p>
            <button className='btn' onClick={yesHandler}>Yes</button>
            <button className='btn' onClick={noHandler}>No</button>
        </div>
    );
}

export default Modal;