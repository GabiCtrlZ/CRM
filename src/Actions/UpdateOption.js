import React, { Component } from 'react'
import Select from './Select';


class UpdateOption extends Component {
    render() {
        return (
            <div className='container_search'>
                <Select action='Transfer to' select='Owner' button='TRANSFER' keyName='owner' data={this.props.owners} name={this.props.name} updateClient={this.props.updateClient} />
                <Select action='Switch Email type' select='Email type' button='SWITCH' keyName='emailType' data={this.props.emailTypes} name={this.props.name} updateClient={this.props.updateClient} />
                <Select action='Declare Sale!' select='' button='DECLARE' keyName='sold' data={[]} name={this.props.name} updateClient={this.props.updateClient} />
            </div>

        )
    }
}

export default UpdateOption