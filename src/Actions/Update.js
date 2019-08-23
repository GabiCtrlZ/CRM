import React, { Component } from 'react'
import UpdateName from './UpdateName';
import UpdateOption from './UpdateOption';


class Update extends Component {
    constructor(){
        super()
        this.state = {
            value: ''
        }
    }
    handleChange = (e) =>{
        let value = e.target.value
        this.setState({
            value
        })
    }
    getAllOf = (key) =>{
        if (key === 'name'){
            return this.props.data.map(x => x.name)
        }
        let arr = []
        for (let client of this.props.data){
            if (!(arr.find(x => x === client[key])) && client[key] !== null){
                arr.push(client[key])
            }
        }
        return arr
    }
    render() {
        return (
            <div>
                <br/>
                <span className='bold' >UPDATE</span>
                <div className="row">
                    <div className="col s12">
                        <UpdateName names={this.getAllOf('name')} value={this.state.value} handleChange={this.handleChange} />
                        <UpdateOption owners={this.getAllOf('owner')} name={this.state.value} emailTypes={this.getAllOf('emailType')} updateClient={this.props.updateClient} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Update