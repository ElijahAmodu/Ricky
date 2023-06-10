import './App.css'
// import {Card} from "./components/card"

import { Navbar } from "./components/nav"
import { Characters } from "./components/charactersPage"
import { Provider } from "react-redux";
import store from "./redux/app/store"
import { BrowserRouter , Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Episodes } from './components/Episodes';
import { Location } from './components/location';

  

function App() {

  
  return (
    <>
    <Provider store={store}>
       <Navbar/>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Characters/>}></Route> 
            <Route path='/episode' element={<Episodes/>}></Route>
            <Route path='/location' element={<Location/>}></Route>
          </Routes>
       </BrowserRouter>
      
    </Provider>
     
    </>
  )
}

export default App;
