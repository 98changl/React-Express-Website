import React, { Component } from 'react';
import ContactList from './ContactList';

class ContactFetch extends Component {
    constructor() {
        super();
        this.state = {
            contacts: []
        }
    }

    componentDidMount() {
        fetch('/contacts')
        .then(res => res.json())
        .then(contacts => this.setState({contacts}, 
            () => console.log('Fetched:', contacts)));
    }

    render() {
        return (
            <div>
                <ContactList items={this.state.contacts} />
            </div>
        );
    }
}

export default ContactFetch;