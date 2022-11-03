import styled from "styled-components";

export const ModalLogOff = styled.div`
    font-family: var(--font-family);
    background-color: var(--color-secondary);
    width: 90%;
    max-width: 600px;
    min-height: 360px;
    padding: 0px 20px;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    
    border-radius: 8px;

    h2{
        font-size: 21px;
        font-weight: 700;
    }

    p{
        font-size: 14px;
        font-weight: 400;
    }

    button{
        font-size: 16px;
        font-weight: 500;

        width: 50%;
        max-width: 130px;
        height: 50px;
    }

    .cancelar{
        background-color: var(--grey-5);
        color: var(--grey-2);
    }

    .sair{
        background-color: var(--color-error);
        color: var(--grey-6);
    }
`;