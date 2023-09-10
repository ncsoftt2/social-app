import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {loginThunk} from "../../store/reducers/auth-reducer/auth-reducer";
import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {Box, Button} from "@mui/material";

export const Login = () => {
    const dispatch = useAppDispatch()
    const {data} = useAppSelector(({authReducer}) => authReducer)
    const navigate = useNavigate()
    const onSubmitForm = (email:string,password:string,rememberMe:boolean) => {
        dispatch(loginThunk(email,password,rememberMe))
    }
    const auth = data.isAuth
    useEffect(() => {
        if(auth) {
            navigate(`/social-app/profile/${data.id}`)
        }
    },[auth])
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false
            }}
            validationSchema={
                Yup.object({
                    email: Yup.string().email().required('Введите email'),
                    password: Yup.string().required('Введите пароль'),
                    rememberMe: Yup.boolean()
                })
            }
            onSubmit={({email,password,rememberMe}) => onSubmitForm(email,password,rememberMe)}
        >
            <Form>
                <Box>
                    <Field id={'email'} name={'email'} type={'email'}/>
                    <ErrorMessage name={'email'} component={'div'}/>
                </Box>
                <Box>
                    <Field id='password' name='password' type='password'/>
                    <ErrorMessage name='password' component='div'/>
                </Box>
                <Box>
                    <Field id='rememberMe' name='rememberMe' type='checkbox'/>
                    <ErrorMessage name='rememberMe' component='div'/>
                </Box>
                <Button variant='outlined' type='submit'>submit</Button>
            </Form>
        </Formik>
    )
}