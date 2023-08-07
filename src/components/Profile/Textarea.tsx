import React, {RefObject} from "react";

interface PropsType {
    message: RefObject<HTMLTextAreaElement>
}

export const Textarea:React.FC<PropsType> = ({message}) => {
    return <textarea ref={message}/>
}