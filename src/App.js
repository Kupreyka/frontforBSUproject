import React from "react";
import './App.css';
import {connect} from "react-redux";
import {authSuccess, setAuthData} from "./redux/Reducers/AuthReducer";
import Login from "./Component/ RegistrationPage/RegistrationPage";
import {Redirect, Route} from "react-router-dom";
import ContainerListOfAnimals from "./Component/ListOfAnimals/ContainerListOfAnimals";
import SuccessfulRegistration from "./Component/ RegistrationPage/ SuccessfulRegistration/SuccessfulRegistration";
import InfoPage from "./Component/InfoPage/InfoPage";
import {setImageUrl, setProfileData} from "./redux/Reducers/ProfileReducer";


function App(props) {

    return (
        <div className="App">
            {!props.isAuth ?
                <Route path='/login' render={() => <Login isAuth={props.isAuth} setAuthData={props.setAuthData}
                                                          authSuccess={props.authSuccess}/>}/> :
                <Redirect to={'/success'}/>}
            <Route path='/infoPage' render={() => <InfoPage/>}/>
            {props.isAuth && <Route path='/success' render={() => <SuccessfulRegistration  login={props.login}/>}/>}
            {props.isAuth ? <Route exact path='/' render={() => <Redirect to={'/home'}/>}/> : <Redirect to={'/login'}/>}
            <Route path='/home' render={() => <ContainerListOfAnimals setImageUrl={props.setImageUrl}
                                                                      setProfileData={props.setProfileData}/>}/>
        </div>
    );
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {authSuccess, setAuthData, setImageUrl, setProfileData})(App);
