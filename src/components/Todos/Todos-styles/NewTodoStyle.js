import styled from "styled-components";

export const StyledNewTodo = styled.div`
    *{
        overflow: hidden;
    }

    border-radius: 4px;
    border: dashed 2px black;
    padding: 1rem;
    cursor: pointer;
    transition-duration: 0.3s;
    text-align: center;

    &:hover{
        background-color: #f8dae9;
    }

    .plusicon{
        color: #800040;
        font-size: 80px;
        margin-top: 16px;
        margin-bottom: 16px;
    }
`;