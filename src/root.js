import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "reducers";
import reduxPromise from 'redux-promise';
import async from 'middleware/async';
import stateValidator from 'middleware/stateValidator';

const Root = ({children,intitialState = {}}) => {
  const store = createStore(
    reducers,
    intitialState,
    applyMiddleware(async,stateValidator)
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Root;
