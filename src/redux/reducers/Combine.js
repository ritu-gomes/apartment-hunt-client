import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";

const JoinedReducers = combineReducers({
    login:LoginReducer
});

export default JoinedReducers;