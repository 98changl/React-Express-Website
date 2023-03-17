import VerticalBar from '../layout/VerticalBar'
import classes from './Wrapper.module.css';

function ProjectWrapper(props) {
    return (
        <div>
            <h1>Projects</h1>
            
            <div className={classes.wrapper}>
                <div className='content'>
                    <VerticalBar />
                </div>
                <div className='content'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default ProjectWrapper;