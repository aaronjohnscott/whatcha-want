import './App.css';
import Header from "./Header"
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Trial from './Main';



function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
          <BrowserRouter  paddingTop="20px" >
            <Routes>
              <Route path="/" element={<Trial />} />
              <Route path="/random"/>
            </Routes>
          </BrowserRouter>
      </div>
    </ChakraProvider>

  );
}

export default App;

