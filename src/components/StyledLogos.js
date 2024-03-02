import styled from "styled-components";
// import { ReactComponent as Icon } from "../assets/Logo-Marinillos.svg";
import Icon from "./Navbar/icon";

const IconWrapper = styled.div`
    svg {
        width: 100%;
        height: auto;
        align-self: center;
        //fill: firebrick;
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
        <div style={{width: "100%", height: "auto"}}>
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