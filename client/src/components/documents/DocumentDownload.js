import React, { Component } from 'react';

class DocumentDownload extends Component {
    constructor() {
        super();
        this.state = {
            fileId: 0
        };
        
    }

    componentDidMount() {
        fetch('/about')
        .then(res => res.json())
        .then(message => this.setState({message}, 
            () => console.log('Fetched:', message)));
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default DocumentDownload;