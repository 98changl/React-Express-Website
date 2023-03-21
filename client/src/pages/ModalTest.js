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
                <div className='center'>
                    <h1>Modal Test Page</h1>
                    <ModalWindow title='Modal' text='Opens a modal with a backdrop' button='Click me!' modalText='Modal is open' />
                    <ModalWindow title='Redirect' text='Redirect to project tab' button='To Project' modalText='Are you sure?' func={navProject} />
                    <ModalWindow title='Home' text='Navigate to "Home" page' modalText='Are you sure?' func={navHome} />
                </div>
            </ProjectWrapper>
        </div>
    );
}

export default ModalTest;