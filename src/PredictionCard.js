import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function PredictionCard() {
  const classes = useStyles();

  return (
      <>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Prediction Result
        </Typography>
        <Typography variant="h5" component="h2">
            Pablo Picasso
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          23/09/1832
        </Typography>
        <Typography variant="body2" component="p">
         
          <br />
          {"Smaple Result"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Details</Button>
        <Button size="small">View Artist</Button>

      </CardActions>
    </Card>
    </>
  );
}


export default PredictionCard;

