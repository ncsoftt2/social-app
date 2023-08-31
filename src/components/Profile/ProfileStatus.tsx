import React, {ChangeEvent, useEffect, useState} from "react";
import {useAppDispatch} from "../../store/hooks";
import {updateStatusThunk} from "../../store/profile-reducer/profile-reducer";
import {Box, TextField} from "@mui/material";

interface PropsType {
    status: string
}

export const ProfileStatus: React.FC<PropsType> = ({status}) => {
    const dispatch = useAppDispatch()
    const [userStatus, setUserStatus] = useState(status)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setUserStatus(e.currentTarget.value)
    const [edit, setEdit] = useState(false)
    const activateEditMode = () => {
        setEdit(true)
    }
    const deactivateEditMode = () => {
        setEdit(false)
        dispatch(updateStatusThunk(userStatus))
    }
    useEffect(() => {
        setUserStatus(status)
    }, [status])
    return (
        <>
            {
                edit
                    ? <TextField value={userStatus}
                                 onBlur={deactivateEditMode}
                                 onChange={handleChange}
                                 autoFocus
                                 size="small"
                                 variant='standard'
                    />
                    : <Box onDoubleClick={activateEditMode}>{userStatus ? userStatus : 'change status'}</Box>
            }
        </>
    )
}