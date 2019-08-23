import React, { Component } from 'react'


class AddClient extends Component {
    handleChange = (e) =>{
        this.props.handleChange(e)
    }
    render() {
        return (
            <div className="input-field col s6 m6 l4">
                <input id={this.props.name === 'email' ? 'emaill': this.props.name} name={this.props.name} value={this.props.value} onChange={this.handleChange} type={this.props.name === 'email' ? 'email': 'text'} className="validate" />
                <label htmlFor={this.props.name}>{this.props.name[0].toUpperCase()+this.props.name.slice(1)}</label>
            </div>
        )
    }
}

export default AddClient