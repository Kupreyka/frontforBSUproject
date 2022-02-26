import React, {useEffect, useState} from "react";
import ListOfAnimals from "./ListOfAnimals";
import Preloader from "../Preloader/Preloader";
import axios from "axios";
import {connect} from "react-redux";
import {setDataInProfile, setImageUrl} from "../../redux/Reducers/ProfileReducer";


const ContainerListOfAnimals = (props) => {

    useEffect(() => {
        axios.get('/users?count=10')
            .then(response => {
                let localData = response.data;
                props.setProfileData(localData)
            })
    }, [])

    return (
        <>
            {!props.data ? <Preloader/> : props.data.map(p => <ListOfAnimals firstName={p.firstName}
                                                                             streetAddress={p.streetAddress}
                                                                             avatar={p.avatar}
                                                                             setDataInProfile={props.setDataInProfile}
                                                                             setImageUrl={props.setImageUrl}/>)}
        </>
    )
}

let mapStateToProps = (state) => ({
    data: state.profile.data
})

export default connect(mapStateToProps, {setDataInProfile,setImageUrl})(ContainerListOfAnimals)