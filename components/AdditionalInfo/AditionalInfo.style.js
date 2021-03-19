import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`;
