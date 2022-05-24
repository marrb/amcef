import { useState, createContext } from 'react';


const SearchContext = createContext({
    searchText: "",
    setText: (InputText) => {},
    filterData: (TodoList) => {},
});

export function SearchContextProvider(props){
    const [inputText, setInputText] = useState("");

    const context = {
        searchText: inputText,
        setText: setInputText,
        filterData: filterData,
    };

    function filterData(TodoList){
        const filteredData = TodoList.filter((todo) => {
            if(inputText === ''){
                return todo;
            }
            else{
                if(todo.title.toLowerCase().includes(inputText) ||
                   todo.description.toLowerCase().includes(inputText) ||
                   todo.deadline.includes(inputText)){
                    return todo;
                }
            }
            return false;
        })
        return filteredData;
    }

    return(
        <SearchContext.Provider value={context}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContext;