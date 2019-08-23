import React, { Component } from 'react';
import {
    ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, ResponsiveContainer
} from 'recharts';

export default class TopChart extends Component {
    getData = () => {
        let arr = [...this.props.data]
        let owners = {}
        for (let client of arr) {
            !owners[client.owner] ? owners[client.owner] = 1 : owners[client.owner]++
        }
        let data = [{ name: '', sales: 0 }, { name: '', sales: 0 }, { name: '', sales: 0 }]
        for (let i = 0; i < 3; i++) {
            for (let owner in owners) {
                if (owners[owner] > data[i].sales) {
                    data[i] = { name: owner, sales: owners[owner] }
                }
            }
            owners[data[i].name] = 0
        }
        return data
    }
    render() {
        return (
            <div style={{ width: '100%', height: 200 }}>
                <ResponsiveContainer>
                    <ComposedChart
                        layout="vertical"
                        width={500}
                        height={400}
                        data={this.getData()}
                        margin={{
                            top: 20, right: 20, bottom: 20, left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" barSize={20} fill="#413ea0" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        );
    }
}