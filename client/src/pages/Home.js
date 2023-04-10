import ContactList from '../components/contact/ContactList';
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

const contacts = [
    {
        id: 'c1',
        title: 'Email Address',
        description: '98changl@gmail.com'
    },
    {
        id: 'c2',
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/limanchang/'
    },
    {
        id: 'c3',
        title: 'GitHub',
        link: 'https://github.com/98changl'
    },
    {
        id: 'c4',
        title: 'LeetCode',
        link: 'https://leetcode.com/98changl/'
    },
    {
        id: 'c5',
        title: 'Vimeo',
        link: 'https://vimeo.com/user134202152'
    }
];

function Home() {
    return (
        <div className='container-fluid'>
            <h1 className='title text-center p-3'>About Me</h1>

            <div className='grid text-center'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className='image' src={profile} alt='ProfilePicture' />
                    </div>

                    <div className='col-md-6'>
                        <p className='about text'>
                            Hello, my name is Liman Chang and welcome to my website!
                            <br /><br />
                            I am a graduate of Rutgers University–New Brunswick, School of Arts and Sciences, Class of 2021, with a Bachelor of Science in Computer Science.
                            <br /><br />
                            After graduating from Rutgers, I spent a year and a half as a junior software developer working primarily on mobile applications. In that role, I worked in an Agile environment alongside business analysts and quality assurance testers to bring about the best possible results for our clients.
                            <br /><br />
                            I am now seeking out new opportunities in software engineering. Growing up in Millburn, NJ and graduating from Millburn High School, I always aspired to be a software developer.
                            <br /><br />
                            My interest in coding and computer science stemmed from my time playing video games growing up. Game mechanics fascinated me, and I wanted to understand how they worked. What started as benign curiosity developed into an interest in programming in general, resulting in my career as a programmer. Besides programming, I often edit photos as a hobby just to be a little creative, have a laugh, and play around in Photoshop: you can find one such example under the "Gallery" tab.
                            <br /><br />
                            My skills primarily involve programming languages such as Java and Python but I also have experience with C, JavaScript, and more. This website is to provide one place to find my online profiles like GitHub and any other relevant information you might need in considering my application. I created this website using the React JS framework and hosted it on Render. Feel free to also check out the "Projects" tab which will hopefully give a clearer picture of my background and experience.
                        </p>
                    </div>
                </div>

                <div className='row text-center'>
                    <h1 className='title p-2'>Resume</h1>
                    <div>
                        <DocumentList items={docs} />
                    </div>
                </div>

                <div className='row text-center'>
                    <h1 className='title p-2'>Contact Information</h1>
                    <div>
                        <ContactList items={contacts} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;