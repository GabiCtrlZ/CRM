import React, { Component } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default class SalesBy extends Component {
    getByCountry = () => {
        let arr = [...this.props.data]
        let countrys = {}
        for (let client of arr) {
            !countrys[client.country] ? countrys[client.country] = 1 : countrys[client.country]++
        }
        let data = []
        for (let key in countrys) {
            data.push({ name: key, sales: countrys[key] })
        }
        return data
    }
    getByEmail = () => {
        let arr = [...this.props.data]
        let emails = {}
        for (let client of arr) {
            if (client.emailType) {
                !emails[client.emailType] ? emails[client.emailType] = 1 : emails[client.emailType]++
            }
        }
        let data = []
        for (let key in emails) {
            data.push({ name: key, sales: emails[key] })
        }
        return data
    }
    getByOwner = () => {
        let arr = [...this.props.data]
        let owners = {}
        for (let client of arr) {
            !owners[client.owner] ? owners[client.owner] = 1 : owners[client.owner]++
        }
        let data = []
        for (let key in owners) {
            data.push({ name: key, sales: owners[key] })
        }
        return data
    }
    getByMounth = () => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let allMonths = {}
        for (let month of months){
            allMonths[month] = 0
        }
        for (let i = 0; i < 12; i++){
            this.props.data.forEach(x => {
                if (x.firstContact.includes(`-0${i+1}-`) || x.firstContact.includes(`-${i+1}-`)){
                    allMonths[months[i]]++
                }
            })
        }
        let data = []
        for (let key in allMonths) {
            data.push({ name: key, sales: allMonths[key] })
        }
        return data
    }
    whoToGet = () => {
        switch (this.props.value){
            case 'email':
                return this.getByEmail()
            case 'month':
                return this.getByMounth()
            case 'owner':
                return this.getByOwner()
            default:
                return this.getByCountry()
        }
    }
    render() {
        return (
            <div style={{ width: '100%', height: 200 }}>
                <ResponsiveContainer>
                    <BarChart
                        width={500}
                        height={300}
                        data={this.whoToGet()}
                        margin={{
                            top: 20, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" stackId="a" fill="#84249e" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
