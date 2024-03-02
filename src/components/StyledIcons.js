import styled from "styled-components";
import {
    FaBars,
    FaUser,
    FaAngleDown,
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaTiktok
} from 'react-icons/fa';

export const User = styled(FaUser)`
    display: block;
    /* color: #808080; */
`;

export const Down = styled(FaAngleDown)`
    display: inline;
    /* color: #808080; */
`;

export const FacebookIcon = styled(FaFacebookF)`
    display: block;
    //fill: blueviolet;
    height: 2rem;
`;

export const InstagramIcon = styled(FaInstagram)`
    display: block;
    //fill: burlywood;
    height: 2rem;
`;

export const TiktokIcon = styled(FaTiktok)`
    display: block;
    //ill: grey;
    height: 2rem;
`;

export const WhatsappIcon = styled(FaWhatsapp)`
    display: block;
    //fill: green;
    height: 2rem;
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    &:hover {
        transform: translate(-100%, 100%) rotate(180deg);
        transition: all 0.3s;
    }

    @media screen and (max-width: 768px) {
        display: block;
        top: 0;
        right: 0;
        transform: translate(-100%, 100%);
        font-size: 1.8rem;
        cursor: pointer;
        position: absolute;
    }
`;