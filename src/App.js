import './App.css';
import Navbarr from "./components/Navbar"
import { AddTodo } from './components/AddNotes';
import { TodoLists } from './components/NotesCard';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      {/* <Navbarr/> */}
       <AddTodo />
      <TodoLists />
    </div>
  );
}

export default App;
