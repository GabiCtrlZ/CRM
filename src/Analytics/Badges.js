import React, { Component } from 'react'
import Badge from './Badge'

class Badges extends Component {
    constructor() {
        super()
        this.state = {
            countrys: {}
        }
    }
    getHottestCountry = () => {
        let data = [...this.props.data]
        let countrys = {}
        for (let client of data) {
            !countrys[client.country] ? countrys[client.country] = 1 : countrys[client.country]++
        }
        let arr = ['', 0]
        for (let country in countrys) {
            if (countrys[country] > arr[1]) {
                arr[0] = country
                arr[1] = countrys[country]
            }
        }
        arr[1] = 'Hottest Country'
        return arr
    }
    getEmailsSent = () => {
        let data = [...this.props.data]
        let emails = {}
        for (let client of data) {
            if (client.emailType) {
                !emails[client.emailType] ? emails[client.emailType] = 1 : emails[client.emailType]++
            }
        }
        let arr = [0, 'Emails Sent']
        for (let email in emails) {
            arr[0] += emails[email]
        }
        return arr
    }
    getOutStanding = () => {
        let data = [...this.props.data]
        let sold = 0
        for (let client of data) {
                if (client.sold){
                    sold++
                }
        }
        let arr = [sold, 'Outstanding Clients']
        return arr
    }
    getNewClients = () =>{
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        const date = new Date()
        const month = (date.getFullYear() + '-' + (date.getMonth() + 1))
        const month2 = (date.getFullYear() + '-0' + (date.getMonth() + 1))
        let data = [...this.props.data]
        let newClients = 0
        for (let client of data) {
                if (client.firstContact.includes(month) || client.firstContact.includes(month2)){
                    newClients++
                }
        }
        let arr = [newClients, `New ${months[date.getMonth()]} Clients`]
        return arr
    }
    render() {
        return (
            <div className='row badges_container' >
                <Badge name='trending_up' data={this.getNewClients()} />
                <Badge name='email' data={this.getEmailsSent()} />
                <Badge name='account_circle' data={this.getOutStanding()} />
                <Badge name='public' data={this.getHottestCountry()} />
            </div>
        )
    }
}

export default Badges;