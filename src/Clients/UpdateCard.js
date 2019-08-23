import React, { Component } from 'react'

class UpdateCard extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            country: '',
            owner: ''
        }
    }
    changeCard = () =>{
        this.props.changeCard('', '')
    }
    update = () =>{
        this.props.update(this.props.id, {name: this.state.name, country: this.state.country, owner: this.state.owner})
    }
    handleInput = (e) => {
        let value = e.target.value
        let name = e.target.name
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="row center-align">
                <div className="col s12 m4">
                    <div className="card" id='client_card'>
                        <div className="card-content white-text row">
                            <div className='waves-effect waves-light kill_button' onClick={this.changeCard}><i className="material-icons">close</i></div>
                            <span className="card-title">Update {this.props.name}</span>
                            <input type="text" name='name' value={this.state.name} onChange={this.handleInput} placeholder='Full Name' id='in1'/>
                            <input type="text" name='country' value={this.state.country} onChange={this.handleInput} placeholder='Country' id='in2' />
                            <input type="text" name='owner' value={this.state.owner} onChange={this.handleInput} placeholder='Owner' id='in3' />
                        </div>
                        <div className="card-action">
                            <div className="waves-effect waves-light btn" onClick={this.update}>Update</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateCard