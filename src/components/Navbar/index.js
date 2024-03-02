import React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavDropLink,
    NavDropMenu,
    NavDropContent,
} from "./NavbarElements";
import {
    Bars,
    User,
    Down,
    FacebookIcon,
    InstagramIcon,
    TiktokIcon,
    WhatsappIcon,
} from "../StyledIcons"
import { LogoMari } from "../StyledLogos";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const social = [
    {
        url: 'http://instagram.com',
        component: <InstagramIcon/>
    },
    {
        url: 'http://facebook.com',
        component: <FacebookIcon/>
    },
    {
        url: 'http://tiktok.com',
        component: <TiktokIcon/>
    },
    {
        url: 'http://wa.me/573017316262',
        component: <WhatsappIcon/>
    }
]

const Navbar = () => {
    return (
        
            <Nav>
                <LogoMari />
                <Bars />
                <NavMenu>
                    <NavLink to="/" activestyle="true">
                        Inicio
                    </NavLink>
                    <NavDropMenu>
                        <NavLink to='/categories' activestyle="true">
                            Categorías
                            <Down />
                        </NavLink>
                        <NavDropContent>
                            <NavDropLink>Hogar</NavDropLink>
                            <NavDropLink>Decoración</NavDropLink>
                            <NavDropLink>Juguetería</NavDropLink>
                            <NavDropLink>Piñatería</NavDropLink>
                            <NavDropLink>Navidad</NavDropLink>
                        </NavDropContent>
                    </NavDropMenu>
                    <NavLink to='/quote' activestyle="true">
                        Cotizar
                    </NavLink>
                    <NavLink to='/record' activestyle="true">
                        Historia
                    </NavLink>
                    <NavLink to='/blogs' activestyle="true">
                        Blogs
                    </NavLink>
                    <NavLink to='/products' activestyle="true">
                        Productos
                    </NavLink>
                    <NavDropMenu>
                        <NavLink to='/contact' activestyle="true">
                            Contacto
                        </NavLink>
                        <NavDropContent>
                            {social.map((item, index) => { return (
                                        <NavDropLink to={item.url} key={index} target='blank'>
                                            {item.component}
                                        </NavDropLink>
                                    )}
                                )
                            }
                        </NavDropContent>
                    </NavDropMenu>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink>
                        <User/>
                    </NavBtnLink>
                    <NavDropContent>
                        <NavDropLink to='/signin' activestyle="true">
                            Iniciar Sesión
                        </NavDropLink>
                        <NavDropLink to='/sign-up' activestyle="true">
                            Registrarme
                        </NavDropLink>
                        <NavDropLink to='/' activestyle="true" onClick={
                            () => {
                                cookies.remove("_s", {
                                    path: "/",
                                    domain: "localhost"
                                });
                                window.location.href = "/signin"
                            }
                        }>
                            Cerrar Sesión
                        </NavDropLink>
                    </NavDropContent>
                </NavBtn>
                {/* <NavBtn>
                    <NavBtnLink to='/signin'>Iniciar Sesión</NavBtnLink>
                </NavBtn> */}
            </Nav>
        
    );
};

export default Navbar;