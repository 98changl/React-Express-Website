import DocumentList from '../components/documents/DocumentList';
import profile from '../media/linked.jpg';
import resume from '../media/Resume.pdf';

const docs = [
    {
        id: 'd1',
        title: 'resume',
        type: 'pdf',
        description: 'Click on the icon to download.',
        src: resume
    }
];

function Home() {
    return (
        <div>
            <h1>About Me</h1>

            <div className='flex center'>
                <div className='content'>
                    <img className='image' src={profile} alt='ProfilePicture' />
                </div>
                
                <div className='content'>
                <p className='text'>
                Welcome to my website! In case the giant header with my name doesn’t suffice as a proper introduction, my name is Liman Chang. I am a graduate of Rutgers University-New Brunswick’s class of 2021. Studying in the School of Arts and Science, I majored in Computer Science where I received my Bachelor of Science.
                <br/><br/>
                After university, I spent a year and a half working professionally as a junior software developer primarily working on mobile applications.  During my employment, I experienced working in an Agile environment alongside business analysts and quality assurance testers to bring about the best possible results for our clients. Currently, I am seeking out software engineering positions to further advance my career.
                <br/><br/>
                My interest in coding and computer science stemmed from my time playing video games. What started as a desire to understand game mechanics slowed turned into an interest into programming in general, resulting in my career as a programmer. Aside from programming, I often do photo editing as a hobby on the side just to stretch my creative muscles for a couple minutes at a time. You can find one such example under the "Gallery" tab.
                <br/><br/>
                My skills primarily focus on programming languages such as Java and Python but my skill set is not exclusively limited to them. While this website won’t necessarily provide the greatest insight into my professional abilities, you can find references to my online profiles, such as GitHub, under the "Contact" tab.
                <br/><br/>
                Feel free to also check out the "Projects" tab which will hopefully give a clearer picture of my expertise.
                </p>
                </div>
            </div>

            <h1>Resume</h1>

            <div className='center'>
                <DocumentList items={docs} />
            </div>
        </div>
    );
}

export default Home;