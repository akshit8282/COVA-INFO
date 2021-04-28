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
        confirmedIn:'loading',
        deathsIn:'loading',
        dateIn:'laoding'
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
        axios.get('https://cors-anywhere.herokuapp.com/https://2019ncov.asia/api/country_region', {headers: {'Access-Control-Allow-Origin': '*'},
    }).then(res=>{
     
         console.log(res.data.results[93].confirmed);
         const d = new Date( res.data.results[93].last_updated);
         let date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
         
         this.setState({
            confirmedIn:res.data.results[93].confirmed,
            deathsIn:res.data.results[93].deaths,
            dateIn:date
        })

  }).catch()
    }
    render() {
        return (
            <div>
                <Navbar/>
                <h1 style={{backgroundColor:"yellow"}}><marquee>Corona Facts!!</marquee></h1>
                <CssBaseline />
      
     
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '200vh',width: '98%',margin:'auto' }} >

<h1 className="p-5">Numbers At Glance In World</h1>
<h3>Updated At</h3>
<h4>{this.state.date}</h4>
<div className="d-flex flex-row" style={{justifyContent:'space-evenly'}}>
<Card name="Confirmed Cases" cases={this.state.Confirmed} link="https://www.worldometers.info/coronavirus/"/>
<Card  name="Confirmed Deaths" cases={this.state.deaths} link="https://www.worldometers.info/coronavirus/"/>

</div>

       
<h1 className="p-3" >Numbers At Glance In India</h1>
<h3>Updated At</h3>
<h4>{this.state.dateIn}</h4>
<div className="d-flex flex-row" style={{justifyContent:'space-evenly'}}>
<Card name="Confirmed Cases" cases={this.state.confirmedIn} link="https://www.worldometers.info/coronavirus/country/india/"/>

<Card  name="Confirmed Deaths" cases={this.state.deathsIn} link="https://www.worldometers.info/coronavirus/country/india/"/>

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
