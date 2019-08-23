import React, { Component } from 'react'


class UpdateName extends Component {
    handleChange = (e) => {
        this.props.handleChange(e)
    }
    render() {
        return (
            <div>
                <span>Name:</span>
                <div className="input-field inline">
                    <input type="text" name="city" list="cityname" value={this.props.value} onChange={this.handleChange} />
                    <datalist id="cityname">
                        {this.props.names.map(x => <option value={x} key={x} />)}
                    </datalist>
                    <label htmlFor="email_inline"> Full Name</label>
                </div>
            </div>

        )
    }
}

export default UpdateName