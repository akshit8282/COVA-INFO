import React from 'react'
import virus from '../../images/virus.png'
import Card from '../CasesCard/CasesCard'
import hand from '../../images/handsanitizer.png'

function CaseShow(props) {
    return (
        <div style={{backgroundColor:'grey'}}>
            <h1 style={{paddingLeft:'90px'}} >Numbers At Glance In India</h1>
<h3 style={{paddingLeft:'16rem'}}>Updated At</h3>
<h4  style={{paddingLeft:'13rem'}}>{props.date}</h4>
<div className="d-flex flex-row" style={{justifyContent:'space-evenly'}}>
<Card name="Confirmed Cases" image={virus} cases={props.confirmed} link="https://www.worldometers.info/coronavirus/country/india/"/>

<Card  name="Confirmed Deaths"  image={hand} cases={props.deaths} link="https://www.worldometers.info/coronavirus/country/india/"/>

</div>
        </div>
    )
}

export default CaseShow
