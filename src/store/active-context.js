import { createContext } from "react";
import { useState, useEffect } from "react";

const ActiveContext = createContext({
    active: [],
    totalActive: 0,
    addActive: (newActive) => {},
    removeActive: (todoId) => {},
});


export function ActiveContextProvider(props){
    const [userActive, setUserActive] = useState([]);

    const removeActiveHandler = (todoId) => setUserActive((prevUserActive) => prevUserActive.filter(todo => todo.id !== todoId));

    useEffect(() => {
        fetch('https://react-todo-site-9e6f3-default-rtdb.firebaseio.com/todos.json'
        ).then((response) => {
            return response.json();
        }).then((data) => {

            for(const key in data){
                const todo = {
                id: key,
                ...data[key]
            };
                if(todo.finished === false){
                    addActiveHandler(todo);
                }
            }
        });  
    }, []);


    const context = {
        active: userActive.sort((a,b) => (a.deadline > b.deadline) ? 1 : -1),
        totalActive: userActive.length,
        addActive: addActiveHandler,
        removeActive: removeActiveHandler,
    };

    function addActiveHandler(finishedTodo){
        setUserActive((prevUserActive) => {
            return prevUserActive.concat(finishedTodo);
        });   
    }

    return(
        <ActiveContext.Provider value={context}>
            {props.children}
        </ActiveContext.Provider>
    );
}

export default ActiveContext;