import styled from "styled-components";

export const StyledTodo = styled.div`
    *{
        margin: 0;
        overflow: hidden;
    }

    background-color: #D6C6C8;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;

    p{
        text-align: left;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    .TodoFooter p{
        font-weight: bold;
        margin: 0;
    }

    button{
        font: inherit;
        padding: 0.5rem 1.5rem;
        cursor: pointer;
        border-radius: 4px;
        background-color: #800040;
        color: white;
        border: 1px solid #800040;
        transition-duration: 0.3s;
    }

    button:hover {
        background-color: #f8dae9;
        color: black;
        font-weight: bold;
    }

    .TodoFooter{
        margin-top: 20px;
    }

    .tick{
        font-size: 25px;
        flex-shrink: 0;
        margin-top: 3.5px;
        padding-left: 5px;

        &:hover{
            color: green;
            cursor: pointer;
        }
    }

    .cross{
        font-size: 25px;
        flex-shrink: 0;
        margin-top: 3.5px;
        padding-left: 5px;

        &:hover{
            color: red;
            cursor: pointer;
        }
    }
`;

export const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    boxShadow: '0 1px 8px black',
    textAlign: 'center',
    height: 150,
    borderRadius: '5px',
    display: 'grid',
};

export const ModalButtonCancel = {
    borderRadius: '5px',
    background: 'white',
    '&:hover': {
        background: "gray",
        color: 'white',
     },

    padding: '0.5rem 1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transitionDuration: '0.3s',
}

export const ModalButtonConfirm = {
    borderRadius: '5px',
    bgcolor: '#800040',
    '&:hover': {
        background: "#f8dae9",
        color: 'black',
     },
    padding: '0.5rem 1.5rem',
    fontWeight: 'bold',
    color: 'white',
    cursor: 'pointer',
    transitionDuration: '0.3s',
}
