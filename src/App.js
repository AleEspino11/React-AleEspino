import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
<FontAwesomeIcon icon="fa-solid fa-cart-shopping" />

function App() {
  return (
    <div className='App'>
      <main>
        <NavBar/>
        <ItemListContainer greeting={"Lista Productos"}/>
      </main>
    </div>
  );
}

export default App;
