import styled from "styled-components";

export const Container = styled.section`
    border: 1px solid red;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 400px;
    font-size: 5rem;
    background: ${props => props.theme.colors.cardBackground};
`;