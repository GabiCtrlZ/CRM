import React, { Component } from 'react';
import {
  ResponsiveContainer, PieChart, Pie,
} from 'recharts';

export default class ClientPie extends Component {
  getClientAdded = () => {
    const currentMounth = (new Date()).getMonth() + 1
    let data = [{name: 'Mounth 1-6', value: 0}, {name: 'Mounth 7-12', value: 0}, {name: 'this mounth', value: 0}]
    for (let i = 1; i < 13; i++){
      if (i < 7){
        this.props.data.forEach(x => {
          if (x.firstContact.includes(`-0${i}-`) || x.firstContact.includes(`-${i}-`)){
            data[0].value++
        }
        })
      }
      else {
        this.props.data.forEach(x => {
          if (x.firstContact.includes(`-${i}-`) || x.firstContact.includes(`-0${i}-`)){
            data[1].value++
        }
        })
      }
      if (i === currentMounth){
        this.props.data.forEach(x => {
          if (x.firstContact.includes(`${(new Date()).getFullYear()}-0${i}-`) || x.firstContact.includes(`${(new Date()).getFullYear()}-${i}-`)){
            data[2].value++
        }
        })
      }
    }
    return data
  }
  render() {
    return (
      <div style={{ width: '100%', height: 220 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={this.getClientAdded()} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
