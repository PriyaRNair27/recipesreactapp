import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addrecipes from './Components/Addrecipes';
import Searchrecipes from './Components/Searchrecipes';

function App() {
  return (
    <div>
<Addrecipes/>
<Searchrecipes/>


    </div>
  );
}

export default App;
