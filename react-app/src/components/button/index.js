import styled from "styled-components";

const Button = styled.button`
    background-color: ${props => props.primary ? "var(--twitter-color)" : "white"};
    border: ${props => props.primary ? "none" : "1px solid"} ;
    color: ${props => props.primary ? "white" : "var(--twitter-color)"} ;
    border-radius: 30px ;
    font-weight: 900 ;
    text-transform: inherit ;
    height: 50px ;
    cursor: pointer;
    margin: 5px;
`;

export default Button;