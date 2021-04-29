import React from 'react'
import firstaid from '../../../images/firstaid.png'
function delhihospitalinfo() {
    return (
        <div>
            <hr style={{height:"6px",width:"55%",margin:"auto",marginTop:"50px",backgroundColor:"darkblue",borderRadius:"9px"}}/>
            <br>
            </br>
       <div className="d-flex flex-row mt-5" style={{justifyContent:'space-evenly'}} >     
<img src={firstaid} height="200px" width="200px" alt="firstaid"/>
<h1 style={{marginTop:"70px"}}>Information related to hospitals in Delhi!!</h1>
</div>
<a style={{ display:'flex',justifyContent:'center',textDecoration:"none",fontFamily:'serif',fontSize:'30px',}} href="/bed"><span style={{border:'2px solid black',borderRadius:"30px",width:'130px',textAlign:'center',backgroundColor:"grey",color:"white"}}>ClickIt</span></a>
        </div>
    )
}

export default delhihospitalinfo
/*style={{display:"block",margin:"auto",width: '138px',height: '50px',backgroundColor:'grey'}}*/