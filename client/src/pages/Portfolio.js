import PortfolioList from "../components/portfolio/PortfolioList";

import p1img from '../media/p1.JPG'
import p2img from '../media/p2.JPG'
import p3img from '../media/p3.JPG'

const items = [
    {
        id: 'p1',
        title: 'Luna Web Application',
        date: 'Jan - June 2021',
        link: 'https://github.com/98changl',
        skills: 'Amazon Web Services, CSS, Django, Git, HTML, Jira, PostgreSQL',
        description: 'Social media web application for users to engage in the discussion of trading and stock positions.',
        src: p1img
    },
    {
        id: 'p2',
        title: 'Online Railway Booking System',
        date: 'Nov - Dec 2020',
        link: 'https://github.com/98changl',
        skills: 'Amazon Web Services, Git, Java, JavaServer Pages, MySQL, Tomcat',
        description: 'Web app managing tickets and train schedules. Users possess the ability to make reservations for train lines.',
        src: p2img
    },
    {
        id: 'p3',
        title: 'Game of Tag',
        date: 'Dec 2020',
        link: 'https://github.com/98changl/CS-428/tree/master/P1',
        skills: 'C#, Git, Photon Engine, Unity 3D',
        description: 'An online multiplayer game of tag. Set within a large map with moving obstacles and contains player characters with animations',
        src: p3img
    }
];

function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <PortfolioList items={items} />
        </div>
    );
}

export default Portfolio;