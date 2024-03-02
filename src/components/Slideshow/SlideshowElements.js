import styled, { css } from "styled-components";
import {
    FaChevronLeft,
    FaChevronRight
} from "react-icons/fa";

export const ImageBox = styled.div`
    position: relative;
    background-color: #343434;
    width: 100%;
    height: 85%;

    img {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        max-width: 100%;
        max-height: 100%;
    }
`;

export const NavButton = styled.button`
    cursor: pointer;
    position: absolute;
    top: 45%;
    padding: 5px;
    border-radius: 3px;
    border: none;
    background: rgba(255, 255, 255, 0.7);

    ${({ position }) =>
        position === 'left' && css`
            left: 10px;
        `
    }

    ${({ position }) =>
        position === 'right' && css`
            right: 10px;
        `
    }
`;

export const ImageCaption = styled.span`
    width: 100%;
    text-align: center;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    padding: 8px;
    background: rgba(255, 255, 255, 0.7);
`;

export const ChevronRight = styled(FaChevronRight)`

`;

export const ChevronLeft = styled(FaChevronLeft)`

`;

export const ThumbnailList = styled.div`
    display: flex;
    align-items: stretch;
    width: 100%;
    height: 15%;
`;

export const Thumbnail = styled.div`
    cursor: pointer;
    opacity: ${({ active }) => (active ? 1 : 0.6)};
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    flex-grow: 1;

    :hover {
        opacity: 1;
    }
`;