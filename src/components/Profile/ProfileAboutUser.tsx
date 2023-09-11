import {Box, IconButton} from "@mui/material";
import {ContactType, ProfileType} from "../../store/reducers/profile-reducer/profile-reducer";
import SettingsIcon from "@mui/icons-material/Settings";
import React, {FC} from "react";
import {DataType} from "../../store/reducers/auth-reducer/auth-reducer";

type PropsTypeProfile = {
    profile: ProfileType
    setEdit: (b: boolean) => void
    data: DataType
    paramId: number
}

export const ProfileAboutUser: FC<PropsTypeProfile> = ({profile, setEdit, data, paramId}) => {
    const activateEditMode = () => setEdit(true)
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
            <Box>
                <Box sx={{mb: 1, display: 'flex', alignItems: 'center', gap: 1}}>
                    <Box>Имя: </Box>
                    <Box sx={{fontSize: '16px'}}>{profile.fullName}</Box>
                </Box>
                <Box sx={{mb: 1, display: 'flex', alignItems: 'center', gap: 1}}>
                    <Box>Ищу работу: </Box>
                    <Box sx={{fontSize: '16px'}}>{profile.lookingForAJob ? 'да' : 'нет'}</Box>
                </Box>
                {profile.lookingForAJob && (
                    <Box sx={{mb: 1, display: 'flex', alignItems: 'center', gap: 1}}>
                        <Box>Мои навыки: </Box>
                        <Box sx={{fontSize: '16px'}}>{profile.lookingForAJobDescription}</Box>
                    </Box>
                )}
                {profile.aboutMe ? (
                    <Box sx={{mb: 1, display: 'flex', alignItems: 'center', gap: 1}}>
                        <Box>Обо мне</Box>
                        <Box>{profile.aboutMe}</Box>
                    </Box>
                ) : null}
                {/*<Box>*/}
                {/*    <Box>Контакты:</Box>*/}
                {/*    <Box>*/}
                {/*        {*/}
                {/*            profile.contacts ? Object.keys(profile.contacts).map(key => {*/}
                {/*                return <Box key={key} sx={{fontSize:'13px',display:'flex',gap:1}}>*/}
                {/*                    <Box>{key}: </Box>*/}
                {/*                    <Box>{profile.contacts[key as keyof ContactType]}</Box>*/}
                {/*                </Box>*/}
                {/*            }) : null*/}
                {/*        }*/}
                {/*    </Box>*/}
                {/*</Box>*/}
            </Box>
            {
                data.id === paramId && (
                    <IconButton sx={{padding: 0}} onClick={activateEditMode}>
                        <SettingsIcon/>
                    </IconButton>
                )
            }
        </Box>
    )
}