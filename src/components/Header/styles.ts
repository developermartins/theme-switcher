import styled from "styled-components";

export const Container = styled.div`
    height: 60px;
    justify-content: space-between;
    background: ${ props => props.theme.colors.primary };
    color: #FFF;
    display: flex;
    align-items: center;
    padding: 0 30px;
`;