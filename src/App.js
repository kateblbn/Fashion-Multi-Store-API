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
        <Route path="https://kateblbn.github.io/Fashion-Multi-Store-API/" element={ <Home/>} />
        <Route path="https://kateblbn.github.io/Fashion-Multi-Store-API/category/:category" element={ <NetSide/> } />
        <Route path="https://kateblbn.github.io/Fashion-Multi-Store-API/shopping-card" element={<ShopCard/> } />
      </Routes>
      </ContextApi>
    </BrowserRouter>
  );
}

export default App;
