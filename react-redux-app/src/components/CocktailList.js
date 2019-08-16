import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData } from "../actions";

import Cocktail from "./Cocktail";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const CocktailList = props => {
  console.log("props cocktailList", props);
  return (
    <div>
      <Typography variant="h4">Tasty Gin Cocktails To Stare At</Typography>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
        ) : (
          "Get Gin Cocktail Data"
        )}
      </button>
      {props.cocktails &&
        props.cocktails.map(drink => (
          <Cocktail key={drink.idDrink} cocktail={drink} />
        ))}
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
