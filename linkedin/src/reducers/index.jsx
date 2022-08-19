import { combineReducers } from "redux";


import { useReducer } from "react";

const rootReducer = combineReducers({
    userState : useReducer,
});

export default rootReducer;