import { Route, Routes } from "react-router-dom";

import AllTodosPage from "./pages/AllTodos";
import ActiveTodosPage from "./pages/ActiveTodos";
import FinishedTodosPage from "./pages/FinishedTodos";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllTodosPage />} />
        <Route path="/active" element={<ActiveTodosPage />} />
        <Route path="/done" element={<FinishedTodosPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
