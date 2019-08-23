import React, { Component } from 'react'


class Select extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
            key: ''
        }
    }
    handleChange = (e) => {
        let value = e.target.value
        this.setState({
            value
        })
    }
    componentDidMount = () => {
        this.setState({ key: this.props.keyName })
    }
    updateCilent = async () => {
        if (this.state.key !== 'sold') {
            const a = await this.props.updateClient(this.props.name, this.state.key, this.state.value)
            alert(a)
        }
        else {
            const a = await this.props.updateClient(this.props.name, this.state.key, true)
            alert(a)
        }
    }
    render() {
        return (
            <div className='row'>
                <span className='col s4 m3 l2'>{this.props.action}:</span>
                {this.props.select ?
                    <select className='col s4 m3 l2' value={this.state.value} onChange={this.handleChange} >
                        <option value="" disabled>{this.props.select}</option>
                        {this.props.data.map(x => <option value={x} key={x}>{x}</option>)}
                    </select> :
                    <span className='col s4 m3 l2'></span>
                }
                <span className='col s4 m3 l2 center-align'>
                    <span className="waves-effect waves-light batan" onClick={this.updateCilent} >{this.props.button}</span>
                </span>
            </div>

        )
    }
}

export default Select