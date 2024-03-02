import React from "react"
import { FooterContainer, FooterMap, FooterCopyRight, FooterTitle, Social, FooterLink } from "./FooterElements"
import { InstagramIcon, FacebookIcon, TiktokIcon, WhatsappIcon } from "../StyledIcons";

const mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7519114765805!2d-75.6930501261071!3d4.8126066406795545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38875186e7e739%3A0x2ee809b8107d922c!2sCachareria%20los%20Marinillos%20Express!5e0!3m2!1ses!2sco!4v1682115161915!5m2!1ses!2sco";
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

const Footer = () => {
    return (
        <FooterContainer>
            <nav style={{color: 'white',display:'flex',flexDirection:'column'}}>
                <a href='/record'>Acerca de Nosotros</a>
                <a href='/services'>Servicios</a>
                <a href='/blogs'>Blog</a>
                <a href='/contact'>Contacto</a>
                <label id="email" htmlFor="email">Inscríbase a nuestra newsletter: <input type="email" name="email"/></label>
            </nav>
            
            <FooterMap src={mapURL} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="unique"></FooterMap>
            <Social>
                <FooterTitle>Síguenos en nuestras redes sociales</FooterTitle>
                {social.map((item, index) => { return (
                            <FooterLink href={item.url} key={index} target='blank'>
                                {item.component}
                            </FooterLink>
                        )}
                    )
                }
            </Social>
            <FooterCopyRight>&copy; Copyright 2023 | Diseñado por AV</FooterCopyRight>
        </FooterContainer>
    )
}

export default Footer;