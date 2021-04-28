import React from 'react'

const hospitaladdress = (props) => {
    console.log(props.add);
    const arr=Object.keys(props.add).map(a=>{
        return <div > 
        
    
        
                <h2 className="py-2"><b>{a}</b> :-</h2>
                <h6>{props.add[a]}</h6>
            
        </div>
    })
    return (
        <div style={{marginTop:"60px",backgroundColor:"lightcyan",height:"60vh"}}>
        
            {arr}
            <button style={{width:"50px",borderRadius:"10px",backgroundColor:"darkblue"}}><a style={{textDecoration:"none",color:"white"}} href="/bed">Back</a></button>
        </div>
    )
}

export default hospitaladdress
