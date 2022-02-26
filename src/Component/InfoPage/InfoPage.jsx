import React from "react";
import style from './InfoPage.module.css'
import {connect} from "react-redux";


const InfoPage = (props) => {

    return (
        <div className={style.infoPage}>
            <div className={style.infoPageMain}>
                <img src={props.imageUrl} alt=""/>
                <div className={style.infoPageSub}>
                    <div>{props.firstName}</div>
                    <h3>{props.streetAddress}</h3>
                    <div>{`A small puppy runs around the street ${props.streetAddress}, without a collar`}</div>
                    <div>
                        <h5>Contacts:</h5>
                        <div>Pavel</div>
                        <div>+375 (33) 999-99-99</div>
                        <div>youremail@mail.ru</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    firstName: state.profile.firstName,
    streetAddress: state.profile.streetAddress,
    imageUrl: state.profile.imgUrl
})

export default connect(mapStateToProps)(InfoPage)