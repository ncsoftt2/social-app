import styled from "styled-components";

interface PropsType {
    display: "flex" | "block"
}

export const SectionWrapper = styled.section<PropsType>`
    display: ${({display}) => display}
`