import React, { Component } from 'react'

class TableBody extends Component {
    isSold = (key) =>{
        if (key === 'sold'){
           return this.props.user[key] ? <i className="material-icons">check</i> : <i className="material-icons">close</i>
        }
        return this.props.user[key]
    }
    openUpdate = (e) =>{
        this.props.changeCard(e.currentTarget.id, this.props.user.name)
    }
    render() {
        return (
            <tr className='table_body' id={this.props.user['_id']} onClick={this.openUpdate}>
                {this.props.keys.map(x => <td key={x}>{this.isSold(x)}</td>)}
            </tr>
        )
    }
}

export default TableBody