import VerticalBar from '../layout/VerticalBar'

function ProjectWrapper(props) {
    return (
        <div>
            <h1 className='title text-center p-3'>Projects</h1>

            <div className='container text-center'>

                <div className='row row-cols-2'>
                    <div className='col'>
                        <VerticalBar />
                    </div>
                    <div className='col'>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectWrapper;