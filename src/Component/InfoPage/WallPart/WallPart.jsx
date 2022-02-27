import React from "react";
import {Field, reduxForm} from "redux-form";
import Post from "./Post/Post";
import style from './WallPart.module.css'
import {createTextMask} from "redux-form-input-masks";

const WallPart = (props) => {

    let onMessageSubmit = values => {
        props.setMessageData(values.name, values.phone, values.newMessage)
    }

    let post = props.messageData.map(el => <Post name={el.name} phone={el.phone} message={el.message} time={el.time}/>)

    return (
        <div>
            {post}
            <NewReduxPostForm name={props.name} phone={props.phone} onSubmit={onMessageSubmit}/>
        </div>
    )
}

let NewMessageForm = (props) => {

    const phoneMask = createTextMask({
        pattern: '+375 (99) 999-99-99',
    });

    return (
        <form className={style.newMessageForm} onSubmit={props.handleSubmit}>
            <div className={style.newMessageFormName}>Leave a comment:</div>
            <div className={style.newMessageFormNameItem}>
                <div>
                    <span>Name:</span>
                    <Field component={'input'} name={'name'} placeholder={!props.name ? 'name' : props.name}/>
                </div>
                <div>
                    <span>Phone:</span>
                    <Field component={'input'} {...phoneMask} name={'phone'} placeholder={!props.phone ? 'phone' : `+375${props.phone}`}/>
                </div>
            </div>
            <div className={style.newMessageFormNameTextarea}>
                <Field component={'textarea'} rows="10" name={'newMessage'} placeholder={'Message'}/>
            </div>
            <button>Publish</button>
        </form>
    )
}

let NewReduxPostForm = reduxForm({
    form: 'NewPost'
})(NewMessageForm)

export default WallPart