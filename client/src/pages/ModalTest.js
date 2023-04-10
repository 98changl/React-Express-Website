import { useNavigate } from 'react-router-dom';
import ModalWindow from '../components/ModalWindow';
import ProjectWrapper from '../components/ui/ProjectWrapper';

function ModalTest() {
    const navigate = useNavigate();

    function navProject() {
        navigate('/projects');
    }

    function navHome() {
        navigate('/');
    }

    return (
        <div>
            <ProjectWrapper>
                <div className='text-center'>
                    <h1 className='title text-center p-3'>Modal Test Page</h1>
                    {/*
                    <ModalWindow title='Modal' text='Opens a modal with a backdrop' button='Click me!' modalText='Modal is open' />
                    <ModalWindow title='Redirect' text='Redirect to project tab' button='To Project' modalText='Are you sure?' func={navProject} />
                    <ModalWindow title='Home' text='Navigate to "Home" page' modalText='Are you sure?' func={navHome} />
                    */}
                    <div className='card p-3 m-3'>
                        <p className='text'>Test Modal</p>
                        <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#open'>
                            Click me!
                        </button>

                        <div className='modal fade' id='open' tabindex='-1' aria-labelledby='openLabel' aria-hidden='true'>
                            <div className='modal-dialog modal-dialog-centered'>
                                <div className='modal-content'>
                                    <div className='modal-header'>
                                        <h1 className='subtitle'>Modal</h1>
                                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
                                    </div>
                                    <div className='modal-body'>
                                        <p>Are you sure?</p>
                                    </div>
                                    <div className='modal-footer'>
                                        <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>No</button>
                                        <button type='button' className='btn btn-primary' data-bs-dismiss='modal'>Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='card p-3 m-3'>
                        <p className='text'>Redirect to Projects</p>
                        <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#projects'>
                            Redirect
                        </button>

                        <div className='modal fade' id='projects' tabindex='-1' aria-labelledby='openLabel' aria-hidden='true'>
                            <div className='modal-dialog modal-dialog-centered'>
                                <div className='modal-content'>
                                    <div className='modal-header'>
                                        <h1 className='subtitle'>Go to Projects</h1>
                                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
                                    </div>
                                    <div className='modal-body'>
                                        <p>Are you sure?</p>
                                    </div>
                                    <div className='modal-footer'>
                                        <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>No</button>
                                        <button type='button' className='btn btn-primary' data-bs-dismiss='modal' onClick={navProject}>Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='card p-3 m-3'>
                        <p className='text'>Navigate to "Home" page</p>
                        <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#home'>

                        </button>

                        <div className='modal fade' id='home' tabindex='-1' aria-labelledby='openLabel' aria-hidden='true'>
                            <div className='modal-dialog modal-dialog-centered'>
                                <div className='modal-content'>
                                    <div className='modal-header'>
                                        <h1 className='subtitle'>Go to Home Page</h1>
                                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
                                    </div>
                                    <div className='modal-body'>
                                        <p>Are you sure?</p>
                                    </div>
                                    <div className='modal-footer'>
                                        <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>No</button>
                                        <button type='button' className='btn btn-primary' data-bs-dismiss='modal' onClick={navHome}>Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ProjectWrapper>
        </div>
    );
}

export default ModalTest;