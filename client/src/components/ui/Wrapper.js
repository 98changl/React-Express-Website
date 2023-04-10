import classes from './Wrapper.module.css';

function Wrapper(props) {
    return <div className='container-xxl p-3 grey'>{props.children}</div>;
}

export default Wrapper;