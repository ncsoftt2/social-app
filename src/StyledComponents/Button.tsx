import styled, {css} from "styled-components";

interface PropsType {
    btnType?: "primary" | "outlined" | "danger"
    fontSize?: string
    padding?: string
    color?: string
    borderRadius?: string;
    bgColor?: string
}

export const Button = styled.button<PropsType>`
  cursor: pointer;
  border: none;
  border-radius: ${({borderRadius}) => borderRadius || '0px'};
  padding: ${({padding}) => padding || '8px 15px'};
  background-color: ${({bgColor}) => bgColor || 'transparent'};
  color: ${({color}) => color || 'white'};
  font-size: ${({fontSize}) => fontSize || '18px'};
  ${({btnType}) => btnType === 'primary' && css<PropsType>`
    color: ${({color}) => color || 'white'};
    background-color: ${({bgColor}) => bgColor || '#61a0ff'};
  `}
  ${({btnType}) => btnType === 'danger' && css<PropsType>`
    color: white;
    background-color: red;
  `}  
  ${({btnType}) => btnType === 'outlined' && css<PropsType>`
    color: green;
    background-color: transparent;
    border: 1px solid green;
    &:hover{
      background-color: green;
      color: white;
    }
  `}
`
