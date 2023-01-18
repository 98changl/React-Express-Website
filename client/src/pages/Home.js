import profile from '../media/linked.jpg';

function Home() {
    return (
        <div className='center'>
            <div>
                <p className='text'>
                Welcome to my website! To access any of my projects, just click on the available links in the navigational bar above. 
                The "Gallery" tab will redirect to a page of personal images. 
                The "Documents" tab will redirect to a page with a list of downloadable files. 
                The “Contact” tab will redirect to a page with a list of links associated with my profile.
                </p>
            </div>

            <h1>About Me</h1>

            <div className='flex'>
                <img className='image left' src={profile} alt='ProfilePicture' />

                <p className='text right'>
                    In case the giant header with my name doesn’t suffice as a proper introduction, my name is Liman Chang. 
                    I am a graduate of Rutgers University-New Brunswick’s class of 2021. 
                    Studying in the School of Arts and Science, I received a Bachelor of Science in Computer Science with a grade point average of 3.155. 
                    Currently, I am seeking out software engineering positions with hopes of a future as a software developer.
                    <br/><br/>
                    My interest in coding and computer science stemmed from my time playing video games. 
                    What started as a desire to understand game mechanics slowed turned into an interest into programming in general, 
                    leading to life decisions that resulted into a major in Computer Science. 
                    Aside from programming, I often do photo editing as a hobby on the side just to stretch my creative muscles for a couple minutes at a time.
                    <br/><br/>
                    My skills primarily focus on programming languages such as Python and Java but my skill set is not exclusively limited to them. 
                    While this website won’t necessarily provide the greatest insight into my professional abilities, 
                    I have referenced my online profiles, such as GitHub, which will hopefully give a clearer picture of my expertise.
                </p>
            </div>
        </div>
    );
}

export default Home;