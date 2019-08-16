import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData } from "../actions";

import Cocktail from "./Cocktail";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
    margin: 30
  }
});

const CocktailList = props => {
  const classes = useStyles();
  console.log("props cocktailList", props);
  return (
    <div>
      <Typography variant="h3" className={classes.title}>
        Tasty Gin Cocktails To Stare At
      </Typography>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="ThreeDots" color="#aa71b5" height="15" width="100" />
        ) : (
          "Show Me the Drinks!"
        )}
      </button>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {props.cocktails &&
          props.cocktails.map(drink => (
            <Cocktail key={drink.idDrink} cocktail={drink} />
          ))}
      </Grid>
    </div>
  );
};

const mapPropsToData = state => {
  return {
    isLoading: state.isLoading,
    cocktails: state.cocktails
  };
};

export default connect(
  mapPropsToData,
  { getData }
)(CocktailList);
