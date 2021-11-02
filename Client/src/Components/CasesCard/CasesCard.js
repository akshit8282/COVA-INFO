import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useTheme } from "@material-ui/styles";




export default function MediaCard(props) {
 
  
  return (
    
    <div className="card" style={{width:'18rem',height:'18rem'}}>
  <div class="card-body">
    <h5 class="card-title"> {props.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{props.cases}</h6>
    
    <a href={props.link} class="card-link">Learn More</a>
   
  </div>
</div>
    
    
  );
}