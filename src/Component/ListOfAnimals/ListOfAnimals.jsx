import React, {useEffect, useState} from "react";
import style from "./ListOfAnimals.module.css"
import axios from "axios";
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";

const ListOfAnimals = (props) => {

    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        axios.get('https://aws.random.cat/meow')
            .then(response => {
                setPhoto(response.data.file)
            })
    }, [])

    return (
        <div className={style.profilePreview}>
            {!photo ? <Preloader/> : <img src={photo}/>}
            <div>
                <p className={style.name}>{props.firstName}</p>
                <p>Найдена</p>
                <p className={style.street}>{props.streetAddress}</p>
                <p>Маленький щенокбегает без ошейника</p>
                <div className={style.navInList}>
                    <NavLink to={'/test1'}>Подробнее</NavLink>
                    <NavLink to={'/test2'}>Откликнуться</NavLink>
                </div>
            </div>
        </div>
    )
}

export default ListOfAnimals