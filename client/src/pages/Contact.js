import ContactFetch from "../components/contact/ContactFetch";
import ContactList from "../components/contact/ContactList";

const data = [
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

function Contact() {
    return (
        <div>
            <h1>Contact Information</h1>
            <ContactList items={data} />
        </div>
    );
}

export default Contact;