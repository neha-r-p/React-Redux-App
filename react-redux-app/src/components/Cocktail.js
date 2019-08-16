import React from 'react';

const Cocktail = props => {
    console.log("cocktail", props)
  return (
    <div>
      <h4>{props.cocktail.strDrink}</h4>
      <img src={props.cocktail.strDrinkThumb} alt={props.cocktail.strDrink} />
    </div>
  );
};

export default Cocktail;
