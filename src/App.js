import './App.css';

import { AddNote } from './components/AddNotes';
import { NotesCard } from './components/NotesCard';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="App">
    
       {/* <AddNote /> */}
      <NotesCard />
     
    </div>
  );
}

export default App;
