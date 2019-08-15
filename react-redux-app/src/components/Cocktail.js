import React from 'react';

const Cocktail = props => {
    console.log("cocktail", props)
  return (
    <div>
      <h4>{props.drink.strDrink}</h4>
      <img src={props.drink.strDrinkThumb} alt={props.drink.strDrink} />
    </div>
  );
};

export default Cocktail;
