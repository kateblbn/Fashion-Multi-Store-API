import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Header from "./components/Header";
import NetSide from "./components/NetSide";
import ShopCard from "./pages/ShopCard";
import Home from "./pages/Home";
import ContextApi from "./api/ContextApi";



function App() {
  return (
    <BrowserRouter>
    <ContextApi>
    <Header/>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/category/:category" element={ <NetSide/> } />
        <Route path="/shopping-card" element={<ShopCard/> } />
      </Routes>
      </ContextApi>
    </BrowserRouter>
  );
}

export default App;
