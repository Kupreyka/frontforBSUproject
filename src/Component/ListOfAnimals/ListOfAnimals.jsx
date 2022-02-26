import React, {useEffect, useState} from "react";
import style from "./ListOfAnimals.module.css"
import axios from "axios";
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {setDataInProfile} from "../../redux/Reducers/ProfileReducer";

const ListOfAnimals = (props) => {

    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        axios.get('https://aws.random.cat/meow')
            .then(response => {
                setPhoto(response.data.file);
                props.setImageUrl(response.data.file)
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
                    <NavLink to={`/infoPage/${props.firstName}`} onClick={()=>{props.setDataInProfile(props.firstName, props.streetAddress)}}>Подробнее</NavLink>
                    <NavLink to={'/infoPage'}>Откликнуться</NavLink>
                </div>
            </div>
        </div>
    )
}

export default ListOfAnimals