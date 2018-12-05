

// export default function({dispatch}) {
//   return function(next) { //<next> is reference to next middleware 
//     return function(action) {

//     };
//   };
// }

// Squeezed above code
export default ({dispatch}) => next =>  action => {

  if(!action.payload || !action.payload.then) {
    return next(action);
  }

  action.payload.then((response) => {
     const newAction = {...action, payload: response}
     dispatch(newAction);
  });
    
};
