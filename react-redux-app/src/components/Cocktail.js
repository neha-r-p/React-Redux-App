import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const Cocktail = props => {
    const classes = useStyles();
  console.log("cocktail", props);
  return (
    <Card className={classes.card}>
      <h4>{props.cocktail.strDrink}</h4>
      <CardMedia
        className={classes.media}
        image={props.cocktail.strDrinkThumb}
        title={props.cocktail.strDrink}
      />
    </Card>
  );
};

export default Cocktail;
