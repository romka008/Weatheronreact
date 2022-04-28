import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import citiesReducer from "./cities-reducer";


let reducers = combineReducers({
    citiesList: citiesReducer,
})


let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

window.store = store


export default store