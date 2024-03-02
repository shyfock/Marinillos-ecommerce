import styled from "styled-components";

export const FooterContainer = styled.footer`
    //position: relative;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: black;
    margin-top: 30px;
`;

export const FooterMap = styled.iframe`
    border: 0;
    width: 600px;
    height: 450px;
    align-self: flex-end;
    right: 0;
    @media screen and (max-width: 768px) {
        width: calc(100vw - 768px/4);
        height: calc(100vh/4);
    }
`;

export const FooterCopyRight = styled.p`
    font-size: 0.9rem;
    opacity: 0.9;
    margin: 0;
    position: relative;
    bottom: 0;
    color: #ccc;
    text-align: center;
`;

export const Social = styled.div`
    text-align: center;
    padding-bottom: 25px;
`;

export const FooterTitle = styled.h2`
    color: white;
`;

export const FooterLink = styled.a`
    color: #ccc;
    text-decoration: none;
    opacity: 0.5;
    font-size: 24px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    align-items: center;
    //text-align: center;
    border-radius: 50%;
    border: 1px solid #ccc;
    margin: 0 8px;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
    & > svg {
        color: inherit;
        left: calc(1vw/2);
        top: calc(1vh/2);
        position: relative;
    }
`;