import styled from "styled-components";

export const FormModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    display: 'flex',
    flexDirection: 'column',
    width: 400,
    borderRadius: '5px',
    boxShadow: '0 1px 8px black',
};


export const FormDiv = styled.div`
    font-weight: bold;
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 10px;
    font-family: Helvetica;
    position: relative;


    textarea, input{
        resize: none;
        border: 2px solid #800040;
        padding: 5px;
        font-size: 15px;
        border-radius: 5px;
    }

    textarea{
        height: 50px;
    }

    label{
        margin-bottom: 3px;
    }
`;

export const ActionsDiv = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
    margin-top: 15px;
`;


export const ErrorPopUp = styled.div`
    background-color: white;
    border: 2px solid black;
    width: fit-content;
    border-radius: 8px;
    position: absolute;
    top: -20px;
    left: 200px;
    padding: 10px;
    opacity: 0;

    animation: blink 1s forwards;

    @keyframes blink {
        0%{
            opacity: 0;
        }

        100%{
            opacity: 1;
        }
    }

    &:before{
        content: "";
        position: absolute;
        top: 100%;
        left: 10px;
        border-top: 10px solid black;
        border-top-color: inherit; 
        border-left: 10px solid transparent;
        border-right: 10px solid transparent; 
    }
    

    span{
        margin: 0;
        font-size: 12px;
        vertical-align: middle;
    }

    .warningIcon{
        font-size: 20px;
        vertical-align: middle;
        color: orange;
    }
`;
