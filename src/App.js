import './App.css';
import { cocktails } from './myCocktailData'
import Header from "./Header"
import Random from './Random';
import Filter from './Filter';
import { ChakraProvider, Grid } from '@chakra-ui/react'
import './index.css'
import Grid2 from './Grid2';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Drink from './Drink';
import Trial from './Trial';

const randomCocktail = () => {
  return cocktails[Math.floor(Math.random()*440)]
}

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        <Trial />
          <BrowserRouter  paddingTop="20px" >
            <Routes>
              <Route path="/" element={<Random cocktail={randomCocktail()} />} />
              <Route path="filter" element={<Filter />} />
              <Route path="/filter/:drink" element={<Drink />} />
            </Routes>
          </BrowserRouter>


      </div>
    </ChakraProvider>



  );
}

export default App;

