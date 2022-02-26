import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {AuthReducer} from "./Reducers/AuthReducer";
import {ProfileReducer} from "./Reducers/ProfileReducer";



let Reducers = combineReducers(
    {
        form: formReducer,
        auth: AuthReducer,
        profile: ProfileReducer
    }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


export default store;
window.store = store;