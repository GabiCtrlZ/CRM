import React, { Component } from 'react'
import TopChart from './TopChart'
import SalesBy from './SalesBy';
import SalesSince from './SalesSince';
import ClientPie from './ClientPie';
import SalesBySelect from './SalesBySelect';

class Charts extends Component {
    constructor() {
        super()
        this.state = {
            value: 'country'
        }
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    getDate = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const date = new Date()
        return (months[date.getMonth() - 1] + '-' + (date.getDate() + 2))
    }
    render() {
        //could have done all the data gathering with the mongo model, but it's less fun and that violates the one source of truth.
        return (
            <div className='row container_search'>
                <div className='col s6'>
                    <div className='bold' >Top Employees</div>
                    <TopChart data={this.props.data} />
                </div>
                <div className='col s6'>
                    <SalesBySelect value={this.state.value} handleChange={this.handleChange} />
                    <SalesBy data={this.props.data} value={this.state.value} />
                </div>
                <div className='col s6'>
                    <div className='bold' >Sales since {this.getDate()}</div>
                    <SalesSince data={this.props.data} />
                </div>
                <div className='col s6'>
                    <div className='bold' >Client Acquisition</div>
                    <ClientPie data={this.props.data} />
                </div>
            </div>
        )
    }
}

export default Charts;