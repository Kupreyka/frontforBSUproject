import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {AuthReducer} from "./Reducers/AuthReducer";



let Reducers = combineReducers(
    {
        form: formReducer,
        auth: AuthReducer
    }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


export default store;
window.store = store;