import VerticalBar from '../layout/VerticalBar'
import classes from './Wrapper.module.css';

function ProjectWrapper(props) {
    return (
        <div >
            <h1>Projects</h1>
            
            <div className='flex center'>
                <div className='content'>
                    <VerticalBar />
                </div>
                <div className='center'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default ProjectWrapper;