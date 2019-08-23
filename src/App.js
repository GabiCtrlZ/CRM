import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import 'materialize-css'
import Clients from './Clients/Clients';
import Actions from './Actions/Actions';
import Analytics from './Analytics/Analytics';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount = async () => {
    let data = await axios.get('/allClients')
    data = data.data.map(x => {
      x.firstContact = x.firstContact.slice(0, 10)
      return x
    })
    this.setState({ data })
  }
  update = async (id, updateData) => {
    await axios.put('/updateClient', { id, updateData }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    await this.componentDidMount()
    alert('Updated successfully')
  }
  updateClient = async (name, key, value) => {
    let data = [...this.state.data]
    let user = data.find(x => x.name === name)
    if (!user || !value) {
      return 'error try again'
    }
    await axios.put('/updateClientFromActions', { name, key, value })
    await this.componentDidMount()
    return 'Updated successfully'
  }
  addClient = async (client) => {
    await axios.post('/addClient', client)
    await this.componentDidMount()
  }
  render() {
    return (
      <Router>
        <nav>
          <div className="nav-wrapper nav_bar">
            <ul id="nav-mobile" className="left">
              <li><Link to="/clients"> Clients </Link></li>
              <li><Link to="/actions"> Actions </Link></li>
              <li><Link to="/analytics"> Analytics </Link></li>
            </ul>
          </div>
        </nav>
        <Route exact path='/clients' render={() => <Clients data={this.state.data} update={this.update} />} />
        <Route exact path='/actions' render={() => <Actions data={this.state.data} updateClient={this.updateClient} addClient={this.addClient} />} />
        <Route exact path='/analytics' render={() => <Analytics data={this.state.data} />} />
      </Router>
    )
  }
}

export default App;
