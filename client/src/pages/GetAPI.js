import ProjectWrapper from '../components/ui/ProjectWrapper';
import FetchAPI from '../components/api/GetAPI';

function GetAPI() {
    return (
        <ProjectWrapper>
            <div>
                <p className='text'>Retrieved: </p>
                <FetchAPI />
                <p className='text'> from server.</p>
            </div>
        </ProjectWrapper>
    );
}

export default GetAPI;