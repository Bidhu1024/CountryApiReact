import React from "react";
import Countries from "./Components/Countries";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import Country from './Components/Country'
import { BrowserRouter as Router, Route,} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Header />
    <Route exact path='/'>
      <Filter />
      <Countries />
      </Route>
      
      <Route exact path='/countries/:name' children={<Country/>}></Route>
      </Router>
    </>
  );
}

export default App;
