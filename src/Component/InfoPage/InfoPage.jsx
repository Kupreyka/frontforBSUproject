import React from "react";
import style from './InfoPage.module.css'
import {connect} from "react-redux";
import WallPart from "./WallPart/WallPart";
import {setMessageData} from "../../redux/Reducers/ProfileReducer";
import {NavLink} from "react-router-dom";


const InfoPage = (props) => {

    return (
        <div className={style.infoPage}>
            <NavLink className={style.profilePageMain} to={'/home'}>Back to list</NavLink>
            <div className={style.infoPageMain}>
                <img src={props.imageUrl}/>
                <div className={style.infoPageSub}>
                    <div className={style.infoName}>{props.firstName}</div>
                    <h3>{props.streetAddress}</h3>
                    <div
                        className={style.description}>{`A small puppy runs around the street ${props.streetAddress}, without a collar`}</div>
                    <div className={style.contact}>
                        <h5>Contacts:</h5>
                        <div>{props.userName}</div>
                        <div>{props.phoneNumber}</div>
                        <div>{props.email}</div>
                    </div>
                </div>
            </div>
            <WallPart setMessageData={props.setMessageData} messageData={props.messageData} name={props.name}
                      phone={props.phone}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    firstName: state.profile.firstName,
    streetAddress: state.profile.streetAddress,
    imageUrl: state.profile.imgUrl,
    phoneNumber: state.profile.phoneNumber,
    email: state.profile.email,
    userName: state.profile.userName,
    messageData: state.profile.messageData,
    name: state.auth.login,
    phone: state.auth.phone
})

export default connect(mapStateToProps, {setMessageData})(InfoPage)