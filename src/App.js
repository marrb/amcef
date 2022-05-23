import { Route, Routes } from 'react-router-dom';

import AllTodosPage from './pages/AllTodos';
import ActiveTodosPage from './pages/ActiveTodos';
import FinishedTodosPage from './pages/FinishedTodos';
import Layout from './components/layout/Layout';

function App() {
  return (
      <Layout>
        <Routes>
          <Route exact path='/' element={<AllTodosPage/>}/>
          <Route exact path='/active' element={<ActiveTodosPage/>}/>
          <Route exact path='/done' element={<FinishedTodosPage/>}/>
        </Routes>
      </Layout>
  );
}

export default App;
