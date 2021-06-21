import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import logo from './money.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          title="money"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Money
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            mon·ey:::::            
            noun
            a current medium of exchange in the form of coins and banknotes; coins and banknotes collectively.
            "I counted the money before putting it in my wallet"
          </Typography>
        </CardContent>
      </CardActionArea>     
    </Card>
  );
}