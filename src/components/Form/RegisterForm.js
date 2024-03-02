import {
    Form,
    FormLabel,
    FormBtn,
    Input,
    FormTitle,
    FormContainer
} from "./FormElements";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <FormContainer>
            <FormTitle>Formulario de Registro</FormTitle>
            <Form action="" method="post">
                <FormLabel htmlFor="name">Ingresa tu nombre</FormLabel>
                <Input id="name" type="text" name="name" placeholder="Nombre" />
                <FormLabel htmlFor="email">Ingresa tu e-mail</FormLabel>
                <Input id="email" type="email" name="email" placeholder="Email"/>
                <FormLabel htmlFor="password">Contraseña</FormLabel>
                <Input id="password" type="password" name="password" placeholder="Contraseña"/>
                <FormLabel htmlFor="confirm-pw">Contraseña</FormLabel>
                <Input id="confirm-pw" type="password" name="confirm-pw" placeholder="Confirmar Contraseña"/>
                <FormBtn type="submit">Enviar</FormBtn>
            </Form>
            <Link to="/signin">Ya tengo una cuenta</Link>
        </FormContainer>
    )
};

export default Register;