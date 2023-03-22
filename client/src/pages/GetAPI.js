import ProjectWrapper from '../components/ui/ProjectWrapper';
import FetchAPI from '../components/api/GetAPI';

function GetAPI() {
    return (
        <ProjectWrapper>
            <div>
                <p>Retrieved: </p>
                <FetchAPI />
                <p> from server.</p>
            </div>
        </ProjectWrapper>
    );
}

export default GetAPI;