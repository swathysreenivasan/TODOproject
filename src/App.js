
import './App.css';

import { Route,Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import LoginForm from './components/LoginForm';
import ProjectList from './components/ProjectList';









function App() {


  
  return (
  <>
    {/* <Header/> */}
    
    
    <section>
        <Routes>
          <Route exact path="/login" element={<LoginForm />} />
          <Route path="/ProjectList" element={<ProjectList />} />
          <Route path="/TodoList" element={<TodoList />} />
        </Routes>
      </section>
   
    
    
    </>
  );
  }
export default App;