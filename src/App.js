import React, {useEffect, useState} from "react";
import './App.css';
import axios from "axios";
import {connect} from "react-redux";
import {authSuccess, setAuthData} from "./redux/Reducers/AuthReducer";
import Login from "./Component/ RegistrationPage/RegistrationPage";
import { Redirect, Route} from "react-router-dom";
import ContainerListOfAnimals from "./Component/ListOfAnimals/ContainerListOfAnimals";
import SuccessfulRegistration from "./Component/ RegistrationPage/ SuccessfulRegistration/SuccessfulRegistration";


function App(props) {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/users?count=10')
            .then(response => {
                let localData = response.data;
                setData(localData)
            })
    }, [])

    return (
        <div className="App">
            {!props.isAuth ?
                <Route path='/login' render={() => <Login isAuth={props.isAuth} setAuthData={props.setAuthData} authSuccess={props.authSuccess}/>}/> :
                <Redirect to={'/success'}/>}
            <Route path='/success' render={() => <SuccessfulRegistration login={props.login}/>}/>
            {props.isAuth ? <Route exact path='/' render={() => <Redirect to={'/home'}/>}/> : <Redirect to={'/login'}/>}
            <Route path='/home' render={() => <ContainerListOfAnimals data={data}/>}/>
        </div>
    );
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {authSuccess,setAuthData})(App);
