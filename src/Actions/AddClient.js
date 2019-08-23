import React, { Component } from 'react'
import Input from "./Input";

class AddClient extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            surname: '',
            email: '',
            country: '',
            owner: '',
        }
    }
    handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        this.setState({
            [name]: value
        })
    }
    addClient = () => {
        const date1 = new Date()
        if (!this.state.name || !this.state.surname || !this.state.email || !this.state.owner || !this.state.country) {
            alert('Fill all the forms and try again')
        }
        else {
            let obj = {
                "name": (this.state.name + ' ' + this.state.surname),
                "email": this.state.email,
                "firstContact": (date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate()),
                "emailType": null,
                "sold": false,
                "owner": this.state.owner,
                "country": this.state.country
            }
            this.props.addClient(obj)
            alert('Added')
        }
    }
    render() {
        return (
            <div>
                <span className='bold' >ADD CLIENT</span>
                <div className='row'>
                    <Input name='name' value={this.state.name} handleChange={this.handleChange} />
                    <Input name='surname' value={this.state.surname} handleChange={this.handleChange} />
                    <Input name='email' value={this.state.email} handleChange={this.handleChange} />
                    <Input name='country' value={this.state.country} handleChange={this.handleChange} />
                    <Input name='owner' value={this.state.owner} handleChange={this.handleChange} />
                    <div className='col s6 m6 l4 center-align'>
                        <span className="waves-effect waves-light btn" id='batan' onClick={this.addClient}>Add Client</span>
                    </div>

                </div>
            </div>
        )
    }
}

export default AddClient