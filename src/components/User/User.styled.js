import styled from "styled-components";

export const Span = styled.span`
color: ${({isRed}) => isRed ? "red" : "blue"};
`

export const Text = styled.p`
color: green;
background-color: yellow;
padding: 8px;
border: 1px solid orange;

&:hover {
    background-color: palegreen;
}

&:hover ${Span} {
    color: violet;
}
`
export const Title = styled.h3`
color: ${props => props.theme.colors.accent}
`