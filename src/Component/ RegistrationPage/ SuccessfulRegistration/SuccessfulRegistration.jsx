import React from "react";
import {NavLink} from "react-router-dom";
import style from './Success.module.css'

const SuccessfulRegistration = ({login}) => {
    return (
        <div className={style.successPage}>
            <div className={style.successPageItem}>{!login ? '\n' +
                'You are anonymous' :`${login}, you are registered!`}</div>
            <h1>Thank you!</h1>
            <NavLink className={style.successBtn} to={'/home'}>To the list of announcements</NavLink>
        </div>
    )
}

export default SuccessfulRegistration