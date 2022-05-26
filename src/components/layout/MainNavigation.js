import { TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useContext, useMemo } from 'react';

import { StyledList, StyledHeader } from './MainNavigationStyle';
import searchContext from '../../store/searchContext';
import allTodosContext from '../../store/allTodos-context';

function MainNavigation(){
    const searchCtx = useContext(searchContext);
    const allTodosCtx = useContext(allTodosContext);


    const changeHandler = (event) => searchCtx.setText(event.target.value.toLowerCase());

    const activeCount = useMemo(() => (allTodosCtx.todos.filter(todo => todo.finished === false)).length, [allTodosCtx.todos]);
    const finishedCount = useMemo(() => (allTodosCtx.todos.filter(todo => todo.finished === true)).length, [allTodosCtx.todos]);
    const allCount = useMemo(() => activeCount + finishedCount, [activeCount, finishedCount]);
    return(
        <StyledHeader>
            <nav>
                <StyledList>
                    <li><NavLink to='/' className={({ isActive }) => (isActive ? "selected" : "")}>All[{allCount}]</NavLink></li> 
                    <li><NavLink to='/active' className={({ isActive }) => (isActive ? "selected" : "")} >Active[{activeCount}]</NavLink></li> 
                    <li><NavLink to='/done' className={({ isActive }) => (isActive ? "selected" : "")}>Finished[{finishedCount}]</NavLink></li> 
                </StyledList>
            </nav>
            <TextField label='Search' size='small' className='searchBar' InputLabelProps={{className: 'searchInput'}} onChange={changeHandler}>Serus</TextField>
        </StyledHeader>
    );
}

export default MainNavigation;