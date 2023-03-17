import TestButton from '../components/Test';
import ProjectWrapper from '../components/ui/ProjectWrapper';

function Test() {
    return (
        <div>
            <ProjectWrapper>
            <div className='center'>
                <h1>Test Page</h1>
                <div className='left'>
                    <p>Test Page</p>
                </div>
            </div>
            <div className='right'>
                <TestButton text='Test'/>
            </div>
            
            </ProjectWrapper>
        </div>
    );
}

export default Test;