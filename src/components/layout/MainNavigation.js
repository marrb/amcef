import { TextField } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import { StyledNav, StyledHeader } from './MainNavigationStyle';
import searchContext from '../../store/searchContext';
import ActiveContext from '../../store/active-context';
import FinishedContext from '../../store/finished-context';

function MainNavigation(){
    const finishedCtx = useContext(FinishedContext);
    const activeCtx = useContext(ActiveContext);
    const searchCtx = useContext(searchContext);

    function changeHandler(event){
        const lowerCase = event.target.value.toLowerCase();
        searchCtx.setText(lowerCase);
    }

    return(
        <StyledHeader>
            <nav>
                <StyledNav>
                    <li><NavLink to='/' className={({ isActive }) => (isActive ? "selected" : "")}>All({finishedCtx.totalFinished + activeCtx.totalActive})</NavLink></li> 
                    <li><NavLink to='/active' className={({ isActive }) => (isActive ? "selected" : "")} >Active({ activeCtx.totalActive})</NavLink></li> 
                    <li><NavLink to='/done' className={({ isActive }) => (isActive ? "selected" : "")}>Finished({finishedCtx.totalFinished})</NavLink></li> 
                </StyledNav>
            </nav>
            <TextField label='Search' size='small' className='searchBar' InputLabelProps={{className: 'searchInput'}} onChange={changeHandler}>Serus</TextField>
        </StyledHeader>
    );
}

export default MainNavigation;