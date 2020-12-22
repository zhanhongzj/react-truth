import React from 'react';
import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {rootReducer} from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
// export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export const store = createStore(rootReducer,applyMiddleware(thunk));
export const storeContext = React.createContext(store);
