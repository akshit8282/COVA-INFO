import React from 'react'
import './VideoSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
function VideoSection() {
    return (
        <div>
            <br></br>
            <h1 style={{textAlign:'center',fontFamily:'monospace'}}>Advisory Videos For Our People!</h1><br></br>
            <div id="videoSectiondiv">
            <iframe width="400" height="270" src="https://www.youtube.com/embed/vm0eaW24EpE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="500" height="300" src="https://www.youtube.com/embed/xTvd7oAEyhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="400" height="270" src="https://www.youtube.com/embed/B9fnhh737W4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <a style={{ display:'flex',justifyContent:'center',textDecoration:"none",fontFamily:'serif',fontSize:'30px',}} href="/dashboard"><span style={{border:'2px solid black',marginTop:'90px',borderRadius:"30px",height:'50px',width:'100px',textAlign:'center',backgroundColor:'black',color:"white"}}><FontAwesomeIcon icon={faArrowAltCircleRight} /></span></a>
            </div>
            <div id="awarenessdiv"><h2>Aware The World!!</h2>
            <h3>Upload Your Own Video</h3></div>
            
        </div>
    )
}

export default VideoSection
