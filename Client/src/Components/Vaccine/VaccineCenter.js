import React, { Component } from 'react'
import axios from 'axios'
import './Vaccine.css'
import MediaQuery from 'react-responsive'
export class VaccineCenter extends Component {
    state={
        pincode:'',
        date:'',
        result:[]
    }
    handleChange=(e)=>{
       
        e.target.name==='pincode'?(this.setState({pincode:e.target.value})):(this.setState({date:e.target.value}));
        
    }
    componentDidMount=async()=>{
        await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=135001&date=3-11-2021`).then(res=>{
            console.log(res);
            this.setState({result:res.data.sessions});
        }).catch(err=>{
            console.log(err);
        })
    }
   
      
    submihandler=async (e)=>{
        e.preventDefault();
        var arr=this.state.date.split('-');
        this.state.date='';
        this.state.date+=arr[2]+"-"+arr[1]+"-"+arr[0];
        await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${this.state.pincode}&date=${this.state.date}`).then(res=>{
            console.log(res);
            this.setState({result:res.data.sessions});
        }).catch(err=>{
            console.log(err);
        })
      
     console.log(this.state.result);
      
    }
    render() {
        
       var brr= this.state.result.length!=0?(
            this.state.result.map(res=>{
               return(res.available_capacity!=0?
                <MediaQuery minWidth={1000}>
                {/* You can also use a function (render prop) as a child */}
                {(matches) =>
                  matches
                    ? <tr style={{borderBottom:'1px solid'}}>
                    <td>{res.vaccine}</td>
                    <td>
                        <b>
                        {res.address}
                    </b><br></br>
                    {res.name}
                    </td>
                
                
                <td>
                    <div id="" style={{display:'flex'}}>
                    <div style={{backgroundColor:'yellow',height:'50px',width:'40px',display:'flex',alignContent:'center',justifyContent:'center',alignSelf:'center'}}><p>1st<br></br><b>{res.available_capacity}</b></p></div>
                    <div style={{backgroundColor:'blue',color:'white',height:'70px',width:'50px',display:'flex',alignContent:'center',justifyContent:'center',alignItems:'center'}}><p><b>{res.available_capacity}</b></p></div>
                    
                    <div style={{backgroundColor:'yellow',height:'50px',width:'40px',display:'flex',alignContent:'center',justifyContent:'center',alignSelf:'center'}}><p>2nd<br></br><b>{res.available_capacity}</b></p></div><br></br>
                    </div>&nbsp;&nbsp;&nbsp;
                    {res.min_age_limit} and above!</td>
                <td>
                {res.slots!=null?res.slots.map(s=>{
                    return <p>{s}</p>
                }):null}
                </td>
                </tr>
                    : (
                        <div style={{border:'2px solid',textAlign:'center',display:'flex',justifyContent:'center',alignContent:'center',flexDirection:'column'}}>
                            <div>{res.vaccine}</div>
                            <div>{res.address}</div>
                            <div></div>
                            <h6></h6>
                            <h8> </h8>

                        </div>
                    )
                }
              
               
               </MediaQuery>
               :null) 
                             
            })
            ):null
        return (
            
            <div >
                <form className="container formsearch" onSubmit={this.submihandler}> 
                <input type="number" name="pincode" onChange={this.handleChange}  />
                <input type="date" name="date" onChange={this.handleChange}/>
               
               
                </form>
                <button id="bvaccine">Find</button>
                <table className="conatiner"style={{width:'97%'}}>
                    <thead >
                        <tr>
                            <td></td>
                        </tr>
                        </thead>
                        <tbody>
                {brr}
                </tbody>
                </table>
            </div>
            
        )
    }
}

export default (VaccineCenter);
