import React, { Component } from 'react'

class Badge extends Component {
    render() {
        return (
            <div className='col s6 m3' >
                <div className='row'>
                    <span className="btn-floating btn-large col s6" id={this.props.name}><i className="material-icons col ">{this.props.name}</i></span>
                    <span className='row col s6' >
                        <span className='bold col s12 titles'>{this.props.data[0]}</span>
                        <span className='col s12' >{this.props.data[1]}</span>
                    </span>
                </div>
            </div>
        )
    }
}

export default Badge;