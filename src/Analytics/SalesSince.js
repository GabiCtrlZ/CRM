import React, { Component } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

export default class SalesSince extends Component {
    getMounthSales = () => {
        const date = new Date()
        let dates = {}
        for (let i = 0; i < 30; i++) {
            let day
            if (date.getDate() - i >= 1) {
                day = (`${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate() - i}`)
            }
            else{
                day = (`${date.getFullYear()}-0${date.getMonth()}-${31 + date.getDate() - i}`)
            }
            dates[day] = 0
            this.props.data.forEach(x => {
                if (x.firstContact === day){
                    dates[day]++
                }
            })
        }
        let data = []
        for (let key in dates){
            data.push({name: key, sales: dates[key]})
        }
        return data.reverse()
    }
    render() {
        return (
            <div style={{ width: '100%', height: 200 }}>
                <ResponsiveContainer>
                    <LineChart
                        width={500}
                        height={200}
                        data={this.getMounthSales()}
                        margin={{
                            top: 10, right: 30, left: 0, bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line connectNulls type="monotone" dataKey="sales" stroke="#9e3e24" fill="#9e3e24" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
