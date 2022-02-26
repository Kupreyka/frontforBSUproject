import React from "react";
import ListOfAnimals from "./ListOfAnimals";
import Preloader from "../Preloader/Preloader";


const ContainerListOfAnimals = (props) => {
    return (
        <>
            {!props.data ? <Preloader/> : props.data.map(p => <ListOfAnimals firstName={p.firstName}
                                                                             streetAddress={p.streetAddress}
                                                                             avatar={p.avatar}/>)}
        </>
    )
}

export default ContainerListOfAnimals