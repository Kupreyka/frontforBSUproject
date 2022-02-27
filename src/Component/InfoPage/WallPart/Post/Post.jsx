import React from "react";
import style from "./Post.module.css"

const Post = (props) => {

    return(
        <div className={style.post}>
            <div className={style.postName}><span>{props.name}</span>,<span> {props.phone}</span></div>
            <div className={style.postTextarea}>{props.message}</div>
            <div className={style.postData}>{props.time}</div>
        </div>
    )
}

export default Post