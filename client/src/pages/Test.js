import TestButton from '../components/Test';
import ProjectWrapper from '../components/ui/ProjectWrapper';

function Test() {
    return (
        <div>
            <ProjectWrapper>
                <div className='center'>
                    <h1>Test Page</h1>
                    <TestButton title='Modal' text='Opens a modal with a backdrop' button='Click me!' modalText='Modal is open' />
                </div>
            </ProjectWrapper>
        </div>
    );
}

export default Test;