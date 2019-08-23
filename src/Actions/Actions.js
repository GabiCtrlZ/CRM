import React, { Component } from 'react'
import Update from './Update';
import AddClient from './AddClient';


class Actions extends Component {
    render() {
        return (
            <div className='container_search'>
                <Update data={this.props.data} updateClient={this.props.updateClient} />
                <hr />
                <AddClient addClient={this.props.addClient} />
            </div>
        )
    }
}

export default Actions