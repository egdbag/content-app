import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import whether from "../reducers/index";

const reducer = combineReducers({
  whether
});

export default createStore(reducer, applyMiddleware(thunk));
