import styled from 'styled-components';

export const FormRegister = styled.div`
    display: flex;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
    }

    input {
        border: none;
        border-bottom: 1px solid gray;
        margin-bottom: 15px;
        outline: none;
    }

    button {
        border: none;
        outline: none;
        background-color: #40AD39;
        border-radius: 8px;
        height: 25px;
        width: 30%;
        color: white;
        cursor: pointer;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }

    button:hover {
        background-color: #307F2B;
    }
`

export const FormContent = styled.div`
    form {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        margin: 10px 0;
        background-color: #E4E4E4;
        border-radius: 8px;
    }
`;
