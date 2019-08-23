import React, { Component } from 'react'
import Badges from './Badges';
import Charts from './Charts';

class Analytics extends Component {
    render() {
        return (
            <div>
                <Badges data={this.props.data} />
                <Charts data={this.props.data} />
            </div>
        )
    }
}

export default Analytics;