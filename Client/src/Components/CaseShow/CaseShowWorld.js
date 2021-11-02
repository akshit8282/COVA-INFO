import React from 'react'
import virus from '../../images/virus.png'
import Card from '../CasesCard/CasesCard'
import hand from '../../images/handsanitizer.png'
function CaseShowWorld(props) {
    return (
        <div className="container" style={{backgroundColor:'grey'}}>
            <h3 style={{paddingLeft:'90px'}}>Numbers At Glance In World</h3>
<h3 style={{paddingLeft:'16rem'}}>Updated At</h3>
<h4 style={{paddingLeft:'13rem'}}>{props.date}</h4>
<div className="d-flex flex-row m-5" style={{}}>
<Card name="Confirmed Cases" image={virus} cases={props.confirmed} link="https://www.worldometers.info/coronavirus/"/>
<Card  name="Confirmed Deaths" image={hand} cases={props.deaths} link="https://www.worldometers.info/coronavirus/"/>

</div>
        </div>
    )
}

export default CaseShowWorld
