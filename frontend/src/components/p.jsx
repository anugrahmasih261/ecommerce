// // import API from "../../API";
// // import {
// //   addFavouritesAction,
// //   fetchFavouritesAction,
// //   deleteFavouritesAction,
// // } from "./actions";
// // const api = new API();
// // const FAVOURITES_KEY = "FAVOURITES_KEY";
// // export const fetchFromLocalStorage = () => {
// //   return async (dispatch) => {
// //     let favouritsJSON = localStorage.getItem(FAVOURITES_KEY);
// //     let favourites = [];
// //     if (favouritsJSON) {
// //       favourites = JSON.parse(favouritsJSON);
// //     }
// //     dispatch(fetchFavouritesAction(favourites));
// //   };
// // };
// // export const addFavourite = (place) => {
// //   return async (dispatch, getState) => {
// //     let prevFavourites = getState().favourites.list;
// //     console.log("prevFavourites",place);
// //     let nextFavorites = prevFavourites
// //     if(!prevFavourites.some(favourite=>favourite.id === place.id)){
// //     nextFavorites = [place, ...prevFavourites];
// //     }
// //     setToLocalStorage(nextFavorites);
// //     dispatch(addFavouritesAction(nextFavorites));
// //   };
// // };
// // export const deleteFavourite = (id) => {
// //   return async (dispatch, getState) => {
// //     let prevFavourites = getState().favourites.list;
// //     const nextFavourites = prevFavourites.filter((image) => image.id !== id);
// //     setToLocalStorage(nextFavourites);
// //     dispatch(deleteFavouritesAction(nextFavourites));
// //   };
// // };
// // export const setToLocalStorage = (favourites) => {
// //   localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
// // };





// <img
// id="like"
// src={Favorite}
// onClick={() => {
//   setShowLikeButton(!showLikeButton)
//   // if (showLikeButton){
//   // clickFavourite(Favorite) ;
//   // }
//   // else{
//   //   dispatch(deleteFavourite(item.id));
//   // }
// }}
// style = {{backgroundColor: showLikeButton ? 'white' : 'red' }}
// alt=""
// />
          


//           const clickFavourite = (place) => {
//             dispatch((place));
//           };



// <img
//           id="like"
//           src={Favorite}
//           onClick={() => {
//             setShowLikeButton(!showLikeButton)
           
//           }}
//           style = {{backgroundColor: showLikeButton ? 'white' : 'red' }}
//           alt=""
//         />


//  const [showLikeButton, setShowLikeButton] = useState(true);




//       51 to 60                <img
//                         id="like"
//                         src={Favorite}
//                         onClick={() => {
//                             setShowLikeButton(!showLikeButton);
//                         }}
//                         style={{ backgroundColor: showLikeButton ? 'white' : 'red' }}
//                         alt="hearticon"
//                     />