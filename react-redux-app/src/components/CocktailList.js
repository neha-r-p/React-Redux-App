import React from "react";
import { connect } from "react-redux";

import Cocktail from "./Cocktail";

const CocktailList = props => {
  return (
    <div>
      <Cocktail />
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
