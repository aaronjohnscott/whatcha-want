import './App.css';
import { cocktails } from './myCocktailData'
import Header from "./Header"
import Random from './Random';
import Filter from './Filter';
import { ChakraProvider } from '@chakra-ui/react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Drink from './Drink';

const randomCocktail = () => {
  return cocktails[Math.floor(Math.random()*440)]
}

function App() {
  return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Random cocktail={randomCocktail()} />} />
            <Route path="filter" element={<Filter />} />
            <Route path="/filter/:drink" element={<Drink />} />
          </Routes>
        </BrowserRouter>
      </div>


  );
}

export default App;

