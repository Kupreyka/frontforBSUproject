import {Field, reduxForm} from "redux-form";
import {useState} from "react";
import style from './RegistrationPage.module.css'
import sliderImg from './../../assets/dogregpage.png'
import {createTextMask} from "redux-form-input-masks";
import {setAuthData} from "../../redux/Reducers/AuthReducer";


const LoginForm = (props) => {

    const phoneMask = createTextMask({
        pattern: '+375 (99) 999-99-99',
    });

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.field}>
                <div className={style.nameForInput}>Name:</div>
                <Field placeholder={'name'} name={'login'} component={'input'} />
            </div>
            <div className={style.field}>
                <div className={style.nameForInput}>Number phone:</div>
                <Field placeholder={'+375(__)___-__-__'} {...phoneMask} name={'phone'} mask={'000000'}
                       component={'input'} type={'tel'}/>
            </div>
            <div className={style.field}>
                <div className={style.nameForInput}>E-mail</div>
                <Field placeholder={'yourmail@mail.com'} name={'email'} component={'input'} type={'email'}/>
            </div>
            {/*<div className={style.field}>
                <div className={style.nameForInput}>Где была найдена собака?</div>
                <Field placeholder={'Начните вводить адрес...'} name={'address'} component={'input'} type={'text'}/>
            </div>*/}
            <div className={style.field + ' ' + style.fieldBtn}>
                <button>Next</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const [isAuth, setIsAuth] = useState(props.isAuth)
    const onSubmit = data => {
        props.setAuthData(data);
        props.authSuccess(true);
    }
    return (
        <div className={style.regPage}>
            <div className={style.regImage}><img src={sliderImg}/></div>
            <div className={style.regForm}>
                <h1>Оставь свои контактные данные: </h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}


export default Login
