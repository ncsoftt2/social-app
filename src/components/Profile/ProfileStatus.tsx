import React, {ChangeEvent, useEffect, useState} from "react";
import {useAppDispatch} from "../../store/hooks";
import {updateStatusThunk} from "../../store/profile-reducer/profile-reducer";

interface PropsType {
    status:string
}

export const ProfileStatus:React.FC<PropsType> = ({status}) => {
    const dispatch = useAppDispatch()
    const [userStatus,setUserStatus] = useState(status)
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => setUserStatus(e.currentTarget.value)
    const [edit, setEdit] = useState(false)
    const activateEditMode = () => {
        setEdit(true)
    }
    const deactivateEditMode = () => {
        setEdit(false)
        // @ts-ignore
        dispatch(updateStatusThunk(userStatus))
    }
    useEffect(() => {
        setUserStatus(status)
    },[status])
    return (
        <div>
            {
                edit
                    ? <input value={userStatus}
                             onBlur={deactivateEditMode}
                             onChange={handleChange}
                             autoFocus
                    />
                    : <span onDoubleClick={activateEditMode}>{userStatus ? userStatus : 'change status'}</span>
            }
        </div>
    )
}