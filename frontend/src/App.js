import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation/>

      <Routes>
        <Route path="/" element={<NoteList/>}/>
        <Route path="/edit/:id/" element={<CreateNote/>}/>
        <Route path="/create" element={<CreateNote/>}/>
        <Route path="/user" element={<CreateUser/>}/>
      </Routes>
    </Router>
  );
}

export default App;
