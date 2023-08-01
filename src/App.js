import './App.css';
import Navbarr from "./components/Navbar"
import { AddNote } from './components/AddNotes';
import { NotesCard } from './components/NotesCard';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      {/* <Navbarr/> */}
       <AddNote />
      <NotesCard />
    </div>
  );
}

export default App;
