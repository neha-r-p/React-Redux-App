import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    width: 345,
    margin: '20px',
  },
  media: {
    height: 275
  },
  drinkName: {
    height: 75,
    verticalAlign: 'middle'
  }
});

const Cocktail = props => {
  const classes = useStyles();
  console.log("cocktail", props);
  return (
    <Card className={classes.card}>
      <Typography variant="h4" component="h2" className={classes.drinkName}>
        {props.cocktail.strDrink}
      </Typography>
      <CardMedia
        className={classes.media}
        image={props.cocktail.strDrinkThumb}
        title={props.cocktail.strDrink}
      />
    </Card>
  );
};

export default Cocktail;
