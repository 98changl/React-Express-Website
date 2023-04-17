import PortfolioList from "../components/portfolio/PortfolioList";

import p1img from '../media/p1.JPG'
import p2img from '../media/p2.JPG'
import p3img from '../media/p3.JPG'
import p4img from '../media/p4.JPG'
import p5img from '../media/p5.JPG'

const items = [
    {
        id: 'p1',
        title: 'Luna Web Application',
        date: 'Jan - June 2021',
        link: 'https://github.com/98changl',
        skills: 'Amazon Web Services, CSS, Django, Git, HTML, Jira, PostgreSQL, Python',
        description: 'A social media web application for the stock market that helps users discuss information about their stock positions with other users, allowing easier and more informed trading decisions.',
        src: p1img
    },
    {
        id: 'p2',
        title: 'Online Railway Booking System',
        date: 'Nov - Dec 2020',
        link: 'https://github.com/98changl',
        skills: 'Amazon Web Services, Git, HTML, Java, JavaServer Pages, MySQL, Tomcat',
        description: 'Web application utilizing a relational database system to simulate a railway booking system. Customers possess the ability to make or cancel reservations for train lines and see past reservations. Administrators possess the ability to edit customer representatives, obtain sales reports, produce a list of reservations and revenue, and retrieve the highest grossing transit line. Any user can check the train schedules listed within the database.',
        src: p2img
    },
    {
        id: 'p3',
        title: 'Game of Tag',
        date: 'Dec 2020',
        link: 'https://github.com/98changl/CS-428/tree/master/P1',
        skills: 'C#, Git, Photon Engine, Unity 3D',
        description: 'An online multiplayer game of tag. Set within a large map with moving obstacles and contains player characters with animations tied to player actions.',
        src: p3img
    },
    {
        id: 'p4',
        title: 'Linear Filter',
        date: 'Oct 2020',
        link: 'https://github.com/98changl/CS-334/blob/main/src/A2_Q2_4.java',
        skills: 'ImageJ, Java',
        description: 'ImageJ plugin that uses a linear filter to create a horizontal blur over a length of 7 pixels. The plugin is used to simulate the effect of camera movement.',
        src: p4img
    },
    {
        id: 'p5',
        title: 'Museum Tickets',
        date: 'Dec 2020',
        link: 'https://github.com/98changl/CS-213/tree/master/project5',
        skills: 'Android Studio, Java',
        description: 'Android app that can estimate the ticket prices for admissions to a list of museums.',
        src: p5img
    }
];

function Portfolio() {
    return (
        <div>
            <h1 className='title text-center p-3'>Portfolio</h1>
            <PortfolioList items={items} />
        </div>
    );
}

export default Portfolio;