import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {challengeReducer} from "./challenge-reducer";
import {resultReducer} from "./result-reducer";

const rootReducer = combineReducers({
    challenge: challengeReducer,
    result: resultReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.__store__ = store

export default store