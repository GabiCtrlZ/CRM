import React, { Component } from 'react'
import TableHead from './TableHead';
import TableBody from './TableBody';
import MovePage from './MovePage';
import UpdateCard from './UpdateCard';

class Table extends Component {
    constructor() {
        super()
        this.state = {
            card: false,
            id: '',
            name: '',
        }
    }
    changeCard = (id, name) =>{
        this.setState({
            card: !this.state.card,
            id,
            name
        })
    }
    render() {
        return (
            <div className="container_search">
                <table>
                    <thead>
                        <TableHead keys={this.props.keys}/>
                    </thead>
                    <tbody>
                        {this.props.data.map(x => <TableBody keys={this.props.keys} user={x} key={x._id} changeCard={this.changeCard}/>)}
                    </tbody>
                </table>
                <MovePage pageNum={this.props.pageNum} changePage={this.props.changePage}/>
                {this.state.card ? <UpdateCard update={this.props.update} name={this.state.name} id={this.state.id} changeCard={this.changeCard}/>: null}
            </div>
        )
    }
}

export default Table