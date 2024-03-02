import styled from "styled-components";

export const Form = styled.form`
    background-color: rgba(150,100,0,0.2);
    border: solid 2px gray;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    margin: 10px;
    max-width: 300px;
    width: 100%;
    height: 100%;
    min-height: min-content;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Input = styled.input`
    height: 30px;
    width: 80%;
    border-radius: 4px;
    margin: 5px;
    padding: 5px;
`;

export const FormBtn = styled.button`
    border-radius: 5px;
    height: 40px;
    margin: 50px 5px 5px 5px;
    padding: 5px;
    width: 85%;
    font-weight: bold;
    background-color: #63d471;
    color: #000;
    cursor: pointer;
    font-size: 1.2rem;
    :hover {
        background-color: #fff;
        font-weight: 800;
        color: #808080;
    }
`;

export const FormLabel = styled.label`
    color: #636363;
    font-weight: 600;
    font-size: 1.1rem;
    align-self: flex-start;
    margin: 20px 0 0 25px;
`;

export const FormTitle = styled.h1`
    text-align: center;
`;