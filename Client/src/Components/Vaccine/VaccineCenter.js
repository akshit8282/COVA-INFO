import React, { Component } from 'react'
import axios from 'axios'

export class VaccineCenter extends Component {
    state={
        pincode:'',
        date:''
    }
    handleChange=(e)=>{
       
        e.target.name==='pincode'?(this.setState({pincode:e.target.value})):(this.setState({date:e.target.value}));

    }
    submihandler=(e)=>{
        e.preventDefault();
       console.log(this.state.date);
       console.log(this.state.pincode)
    }
    render() {
       
        return (
            <div>
                <form onSubmit={this.submihandler}> 
                <input type="number" name="pincode" onChange={this.handleChange}  />
                <input type="date" name="date" onChange={this.handleChange}/>
                <input type="submit" value="find" />
                </form>
            </div>
        )
    }
}

export default VaccineCenter
