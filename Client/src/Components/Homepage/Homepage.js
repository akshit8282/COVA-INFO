import React, { Component } from 'react'
import Card from '../CasesCard/CasesCard'
import Navbar from '../Navbar/Navbar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

export class Homepage extends Component {
    state={
        Confirmed:'loading',
        deaths:'loading',
        date:'loading',
    }
    componentDidMount=()=>{
        axios.get('https://cors-anywhere.herokuapp.com/https://2019ncov.asia/api/cdr', {headers: {'Access-Control-Allow-Origin': '*'},
          }).then(res=>{
           
                const d = new Date( res.data.last_updated );
let date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();

            this.setState({
                Confirmed:res.data.results[0].confirmed,
                deaths:res.data.results[1].deaths,
                date:date
            })
        }).catch()
    }
    render() {
        return (
            <div>
                <Navbar/>
                <h1 style={{backgroundColor:"yellow"}}><marquee>Corona Facts!!</marquee></h1>
                <CssBaseline />
      
     
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '150vh',width: '98%',margin:'auto' }} >

<h1 className="p-5">Numbers At Glance</h1>
<h3>Updated At</h3>
<h4>{this.state.date}</h4>
<div className="d-flex flex-row" style={{justifyContent:'space-evenly'}}>
<Card name="Confirmed Cases" cases={this.state.Confirmed}/>
<Card  name="Confirmed Deaths" cases={this.state.deaths}/>

</div>

        </Typography>
        <div style={{height:"5px"}}></div>
        
        <Typography component="div" className="bg-info" style={{ height: '200px',width: '98%',margin:'auto' }} >
<table style={{width:"100%",margin:"auto",}}>
    <tr >
    <th style={{padding:"60px"}}>About us?</th>
    <th style={{padding:"60px"}}>Connect With Us</th>
    <th style={{padding:"60px"}}>More facts</th>
    </tr>
    <tr>
    <td>team Details</td>
    <td>Instagram</td>
    <td>More facts</td>
    </tr>
    
</table>
            
        </Typography>
     
            </div>
        )
    }
}

export default Homepage
