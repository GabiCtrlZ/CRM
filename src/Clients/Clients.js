import React, { Component } from 'react'
import Search from './Search';
import Table from './Table';

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            searchVal: '',
            radioVal: 'Name',
            pageNum: 1
        }
    }
    handleInput = async (e) => {
        let name
        let value
        if (!e.target.name) {
            value = e.target.textContent
            name = e.target.className
        }
        else {
            value = e.target.value
            name = e.target.name
        }
        await this.setState({ [name]: value })
        await this.changePage(0)
    }
    getKeysArray = () => {
        if (this.props.data[0]) {
            return Object.keys(this.props.data[0]).filter(x => x !== '_id' && x !== 'email')
        }
        return []
    }
    changePage = (num) => {
        let pageNum = this.state.pageNum + num
        if (pageNum >= 1 && pageNum <= (this.autoSearch().length / 10) + 1) {
            this.setState({
                pageNum
            })
        }
        else if (pageNum > this.autoSearch().length / 10 + 1) {
            this.setState({
                pageNum: Math.floor(this.autoSearch().length / 10) + 1
            })
        }
    }
    autoSearch = () => {
        let arr = [...this.props.data]
        return arr.filter(x => x[this.state.radioVal.toLowerCase()].toLowerCase().includes(this.state.searchVal.toLowerCase()))
    }
    render() {
        let num = this.state.pageNum * 10
        return (
            <div>
                <Search state={this.state} handleInput={this.handleInput} />
                <Table update={this.props.update} keys={this.getKeysArray()} data={this.autoSearch().slice(num - 10, num)} pageNum={num / 10} changePage={this.changePage} />
            </div>
        )
    }
}

export default Clients