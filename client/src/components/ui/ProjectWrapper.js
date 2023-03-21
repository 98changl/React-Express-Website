import VerticalBar from '../layout/VerticalBar'

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