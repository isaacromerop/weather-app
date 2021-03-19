import styled from "styled-components";

export const Wrapper = styled.div`
    height: 10rem;
    width: 20rem;
    background-color: lightcyan;
    position: relative;
    top: -7.5rem;
    border-radius: 2rem;
    border: 2px dashed lightgrey;

    @media screen and (max-width: 768px){
        top: 0;
    }
`;