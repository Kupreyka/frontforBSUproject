import React from "react";
import {NavLink} from "react-router-dom";
import style from './Success.module.css'

const SuccessfulRegistration = ({login}) => {
    return (
        <div className={style.successPage}>
            <div className={style.successPageItem}>{`${login}, Вы зарегистрированы!`}</div>
            <h1>Спасибо вам!</h1>
            <NavLink className={style.successBtn} to={'/home'}>К списку объявлений</NavLink>
        </div>
    )
}

export default SuccessfulRegistration