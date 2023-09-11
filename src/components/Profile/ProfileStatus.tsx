import {useAppDispatch} from "../../store/hooks";
import {ChangeEvent, useEffect, useState} from "react";
import {updateStatusThunk} from "../../store/reducers/profile-reducer/profile-reducer";
import React from "react";
import {Box, IconButton, TextField} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import {DataType} from "../../store/reducers/auth-reducer/auth-reducer";

interface PropsType {
    status: string
    data: DataType
    paramId: number
}

export const ProfileStatus: React.FC<PropsType> = React.memo(({status,data,paramId}) => {
    const dispatch = useAppDispatch()
    const [userStatus, setUserStatus] = useState(status)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setUserStatus(e.currentTarget.value)
    const [edit, setEdit] = useState(false)
    const activateEditMode = () => {
        setEdit(true)
    }
    const deactivateEditMode = () => {
        setEdit(false)
        dispatch(updateStatusThunk(userStatus.trim()))
    }
    useEffect(() => {
        setUserStatus(status)
    }, [status])
    return (
        <>
            {
                edit
                    ? (
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <TextField value={userStatus}
                                       onChange={handleChange}
                                       autoFocus
                                       size="small"
                                       variant='standard'
                            />
                            <IconButton onClick={deactivateEditMode}>
                                <CheckIcon color='success'/>
                            </IconButton>
                        </Box>
                    )
                    : (
                        <Box sx={{display: 'flex', alignItems: 'center',mb:'7px'}}>
                            <Box>Статус: {userStatus ? userStatus : 'No status'}</Box>
                            {data.id === paramId && <IconButton onClick={activateEditMode}>
                                <EditIcon color='primary' sx={{fontSize:'16px'}}/>
                            </IconButton>}
                        </Box>
                    )
            }
        </>
    )
})