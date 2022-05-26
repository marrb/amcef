import Todo from './Todo';


function TodoList(props){
    return(
        <>
            {props.Todos.map(todo => 
            <Todo 
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            deadline={todo.deadline}/>)}
        </>
    );
}

export default TodoList;