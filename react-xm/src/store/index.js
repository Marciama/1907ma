import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk";
import home from "./reducers/home"
const reducer = combineReducers({
    home
})

export default createStore(reducer,applyMiddleware(reduxThunk))