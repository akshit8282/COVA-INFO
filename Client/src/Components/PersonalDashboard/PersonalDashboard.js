import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import '../Dashboard/Dashboard.css';
import Navbar from '../Navbar/Navbar'


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    

    this.state = {
     
      videoList: []
    }
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('userTokenTime'));
    
      axios.get('http://127.0.0.1:3000/api/videoList', {
        headers: {
          'Content-Type': 'application/json',
          'id': JSON.parse(localStorage.getItem('userTokenTime')).userName
        }
      }).then(res => {
       
        this.setState({
          videoList: res.data
        });
      });
    }
  

  render() {
const deleteVideo=(id)=>{
console.log(id);

axios.delete('http://127.0.0.1:3000/api/videoList/deleteVideo/'+id, {
    headers: {
      'Content-Type': 'application/json',
      
    }
  }).then(res => {
    window.location.replace('/personaldashboard');
    
  });

}   

    const videos = this.state.videoList.map(video => {
      return (
        <div className="video col-xs-12 col-sm-12 col-md-3 col-lg-4 py-3" key={video._id}>
          <Link to={'/video/' + video.upload_title}>
            <div className="video-thumbnail">
              <img src={video.thumbnail_path} alt="video thubmnail" />
            </div>
          </Link>
          <span className="username">
            <Link to={'/api/videos/' + video.upload_title}>
              {video.uploader_name}
            </Link>
          </span>
          <span className="video-title">{video.upload_title.replace(/_/g, ' ')}</span>
          <br></br><br></br>
          <button onClick={()=>deleteVideo(video._id)}>delete</button>
        </div>
      );
    });

    return (
     <React.Fragment>
       <Navbar/>
       <h5 style={{backgroundColor:"greenyellow"}}><marquee>To upload Your video,SignIn To The Portal</marquee></h5>
        <div className="container mt-5">
         
          <h1>How to Stay Healthy</h1>
          <hr className="my-4" />

          <div className="streams row py-4">
            {videos}
          </div>
        </div>
      
        </React.Fragment>
    );
  }
}

export default Dashboard;