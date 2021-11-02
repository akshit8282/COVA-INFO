import React from 'react'
import virus from '../../images/virus.png'
import Card from '../CasesCard/CasesCard'
import hand from '../../images/handsanitizer.png'
import './caseShowindia.css'

function CaseShow(props) {
    return (
        <div className="container-fluid" style={{backgroundColor:'grey'}}>
            <h3  className="heading">Numbers At Glance In India</h3>
<h3 id="updated">Updated At</h3>
<h4 >{props.date}</h4>
<div className="d-flex flex-row m-5" >
<Card name="Confirmed Cases" image={virus} cases={props.confirmed} link="https://www.worldometers.info/coronavirus/country/india/"/>

<Card  name="Confirmed Deaths"  image={hand} cases={props.deaths} link="https://www.worldometers.info/coronavirus/country/india/"/>

</div>
        </div>
    )
}

export default CaseShow
