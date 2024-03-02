/* eslint-disable no-use-before-define */
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
// import { ReactComponent as Icon } from  "../../assets/Logo-Marinillos.svg";
import Icon from "./icon";

const IconWrapper = styled.div`
    svg {
        width: 80px;
        height: 80px;
        /* fill: firebrick; */
    }
`;

// const StyledIcon = styled(Icon)`
//     width: 30px;
//     height: 30px;
//     fill: palevioletred;
// `;

// const IconWrapperTargetClassname = styled.div`
//     ${StyledIcon} {
//         fill: palegreen;
//     }
// `;

export const LogoMari = () => {
    return (
        <div style={{
            alignSelf: 'flex-start',
        }}>
            <IconWrapper>
                <Icon />
            </IconWrapper>
            {/* <StyledIcon />
            <IconWrapperTargetClassname>
                <StyledIcon />
            </IconWrapperTargetClassname> */}
        </div>
    );
};

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background: #AAB512;
    height: 85px;
    display: flex;
    //flex-direction: row;
    justify-content: space-around;
    padding: 0.2rem calc((1vw) / 2);
    z-index: 12;
    box-shadow: 0 2px 9px 0 gray;
    /* Third Nav */
    /* justify-content: flex-start; */
    & + div {
        //position: relative;
        margin-top: 100px;

    }
`;

export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000;
    }
    @media screen and (max-width: 768px) {
        /* margin: 0px;
        padding: 0px; */
        height: fit-content;
        min-width: 160px;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
    white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
        flex-direction: column;
        position: absolute;
        left: 0;
        top: 85px;
        background-color: #f1f1f1;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }  
`;

export const NavBtnLink = styled(Link)`
    display: inline-block;
    border-radius: 50%;
    background: #808080;
    padding: 10px 10px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #000000;
    }
`;

export const NavDropLink = styled(Link)`
    color: #808080;
    display: block;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &:hover {
        background-color: #ddd;
    }
`;

export const NavDropContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;

export const NavBtn = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 24px;
    /* Third Nav */
    /* justify-content: flex-end;
    width: 100vw; */
    &:hover ${NavDropContent} {
        display: block;
        bottom: calc(-1vh - 1rem);
    }
    @media screen and (max-width: 768px) {
        ${NavBtnLink} {
            display: inline-block;
            position: relative;
            justify-self: flex-end;
        }
    }
`;

export const NavDropMenu = styled.div`
    position: relative;
    display: inline-block;
    //align-items: center;
    &:hover ${NavDropContent} {
        display: block;
    }
    &:hover ${NavLink} {
        color: whitesmoke;
    }
`;