import axios from "axios";

export const FETCH_COCKTAIL_DATA_START = "FETCH_COCKTAIL_DATA_START";
export const FETCH_COCKTAIL_DATA_SUCCESS = "FETCH_COCKTAIL_DATA_SUCCESS";
export const FETCH_COCKTAIL_DATA_FAILURE = "FETCH_COCKTAIL_DATA_FAILURE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_COCKTAIL_DATA_START });
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")
      .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_COCKTAIL_DATA_SUCCESS, paylod: red.data });
      })
      .get(err => {
        dispatch({ type: FETCH_COCKTAIL_DATA_FAILURE, payload: err.response });
      });
  };
};

// export const getData = () => {
//   return dispatch => {
//     dispatch({ type: FETCH_WEBCAM_DATA_START });
//     axios
//       .get('https://api.oceandrivers.com:443/v1.0/getWebCams/')
//       .then(res => {
//         // res.data.data
//         console.log(res);
//         dispatch({ type: FETCH_WEBCAM_DATA_SUCCESS, payload: res.data });
//       })
//       .catch(err => {
//         dispatch({ type: FETCH_WEBCAM_DATA_FAILURE, payload: err.response });
//       });
//   };
// };
