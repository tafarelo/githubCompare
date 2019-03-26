import React from 'react'
import logo from '../assets/logo.png'
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    padding-top: 60px;
    align-items: center;
`;

const Form = styled.form`
    margin-top:20px;
    width: 100%;
    max-width: 400px;
    display: flex;

    input {
        flex: 1;
        height:55px;
        padding: 0 20px;
        background: white;
        border:0;
        font-size: 18px;
        color: #444;
        border-radius:3px;
    }

    button {
        padding: 0 20px;
        height:55px;
        margin-left:10px;
        color: #fff;
        background: #63f5b0;
        border:0;
        font-size: 20px;
        font-weight: bold;
        border-radius:3px;
        cursor:pointer;

        &:hover {
            background: #52D89F;
        }
    }
`;

const Main = () => {
  return (
    <Container>
        <img src={logo} alt="Github Compare" />

        <Form>
            <input type="text" placeholder="usuario/repositório" />
            <button type="submit">OK</button>
        </Form>
    </Container>
  )
}

export default Main
