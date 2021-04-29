import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h3"  className="text-center" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2"  component="h4"  className="text-center" style={{color:'red'}}>
          {props.cases}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="d-flex flex-row" style={{justifyContent:'space-evenly'}}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          <a href={props.link}>
          Learn More</a>
        </Button>
      </CardActions>
    </Card>
  );
}