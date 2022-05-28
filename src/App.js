import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addrecipes from './Components/Addrecipes';
import Searchrecipes from './Components/Searchrecipes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" exact element={<Addrecipes/>}/>
  <Route path="/search" exact element={<Searchrecipes/>}/>
  
</Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
