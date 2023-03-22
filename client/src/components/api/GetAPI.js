import React, { Component } from 'react';

class GetAPI extends Component {
    constructor() {
        super();
        this.state = {
            message: []
        }
    }

    componentDidMount() {
        fetch('/api')
            .then(res => res.json())
            .then(message => this.setState({ message },
                () => console.log('Fetched:', message)));
    }

    render() {
        return (
            <p>{this.state.message.map(message => message.test)}</p>
        );
    }
}

export default GetAPI;