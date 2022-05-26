import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #77002e;
    margin-bottom: 30px;


    .searchBar{
        margin-right: 40px;

        .MuiOutlinedInput-notchedOutline{
            border-width: 3px;
            border-top: none;
            border-left: none;
            border-right: none;
            border-radius: 0;
        }

        .MuiOutlinedInput-root{
            color: white;
        }

        & .Mui-focused .MuiOutlinedInput-notchedOutline{
            border-color: #fcb8d2;
        }

        .searchInput{
            color: #fcb8d2;
        }
    }
`;


export const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: baseline;

    a{
        text-decoration: none;
        font-size: 2rem;
        color: #fcb8d2;
        margin-left: 3rem;
    }
    
    a:hover{
        color: white;
    }

    a.selected{
        color: white;
    }
`;