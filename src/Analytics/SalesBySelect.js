import React, { Component } from 'react'

class SalesBySelect extends Component {
    handleChange = (e) =>{
        this.props.handleChange(e)
    }
    render() {
        return (
            <div className='bold row'>
                <span className='col s6 m3 l2' >Sales By</span>
                <select name="" id="sales_by_select" className='col s6 m3 l2' value={this.props.value} onChange={this.handleChange}>
                    <option value="country">country</option>
                    <option value="email">email</option>
                    <option value="month">month</option>
                    <option value="owner">owner</option>
                </select>
            </div>
        )
    }
}

export default SalesBySelect;