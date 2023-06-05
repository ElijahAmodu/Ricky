import './App.css'
// import {Card} from "./components/card"

import { Navbar } from "./components/nav"
import { Characters } from "./components/characters"
import { Search } from "./components/searchForm"
import { Provider } from "react-redux";
import store from "./redux/app/store"


function App() {
  return (
    <>
    <Provider store={store}>
       <Navbar/>
      <Characters/>
      <Search/>
    </Provider>
     
    </>
  )
}

export default App;
