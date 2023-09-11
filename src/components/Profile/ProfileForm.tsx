import {ErrorMessage, Field, Form, Formik} from "formik"
import {ContactType, ProfileType, saveProfileThunk} from "../../store/reducers/profile-reducer/profile-reducer";
import React, {FC} from "react";
import {Box, Button} from "@mui/material";
import * as Yup from "yup";
import {useAppDispatch, useAppSelector} from "../../store/hooks";

type PropsTypeProfile = {
    profile: ProfileType
    setEdit: (b:boolean) => void
}

export const ProfileForm: FC<PropsTypeProfile> = ({profile,setEdit}) => {
    const userId = useAppSelector(({authReducer}) => authReducer.data.id)
    const dispatch = useAppDispatch()
    const onSubmitForm = (profile:ProfileType) => {
        if(userId !== null) {
            dispatch(saveProfileThunk(profile,userId))
            setEdit(false)
        }
    }
    return (
        <Formik
            initialValues={{
                fullName: profile.fullName,
                lookingForAJob: profile.lookingForAJob,
                lookingForAJobDescription: profile.lookingForAJobDescription,
                aboutMe: profile.aboutMe,
                // contacts: Object.keys(profile.contacts).map(key => profile.contacts[key as keyof ContactType ])
                contacts: profile.contacts
            }}
            validationSchema={
                Yup.object({
                    fullName: Yup.string().required('Обязательное поле').min(2,'Минимум 2 символа').max(15,'Максимум 15 символов'),
                    lookingForAJobDescription: Yup.string().min(2,'Минимум 2 символа').max(40,'Максимум 15 символов'),
                    aboutMe: Yup.string().min(2,'Минимум 2 символа').max(40,'Максимум 15 символов'),
                })
            }
            onSubmit={(values:ProfileType) => onSubmitForm(values)}
            // onSubmit={(values:ProfileType) => console.log(JSON.stringify(values))}
        >
            <Form>
                <Box sx={{mb: 1, display: 'flex', alignItems: 'center', gap: 1}}>
                    <Box>Имя: </Box>
                    <Field id='fullName' name={'fullName'} type='text'/>
                    <ErrorMessage name={'fullName'} component={'div'}/>
                </Box>
                <Box sx={{mb: 1, display: 'flex', alignItems: 'center', gap: 1}}>
                    <Box>Ищу работу: </Box>
                    <Field id='lookingForAJob' name='lookingForAJob' type='checkbox'/>
                </Box>
                <Box sx={{mb: 1}}>
                    <Box>Мои навыки: </Box>
                    <Field as='textarea' id='lookingForAJobDescription' name='lookingForAJobDescription' type='text'/>
                    <ErrorMessage name={'lookingForAJobDescription'} component={'div'}/>
                </Box>
                <Box sx={{mb: 1}}>
                    <Box>Обо мне</Box>
                    <Field as='textarea' id='aboutMe' name='aboutMe' type='text'/>
                    <ErrorMessage name={'aboutMe'} component={'div'}/>
                </Box>
                {/*<Box>*/}
                {/*    <Box>Контакты:</Box>*/}
                {/*        {Object.keys(profile.contacts).map(key => {*/}
                {/*            return <Box key={key} sx={{fontSize:'13px',display:'flex',gap:1}}>*/}
                {/*                <Box>{key}: </Box>*/}
                {/*                <Field name={`contacts.${key}`} type='text'/>*/}
                {/*            </Box>*/}
                {/*        })}*/}
                {/*</Box>*/}
                <Button variant='text' type='submit'>Сохранить</Button>
            </Form>
        </Formik>
    )
}