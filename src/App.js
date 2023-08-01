import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Header from "./components/Header";
import NetSide from "./components/NetSide";
import Nav from "./components/Nav";
import ShopCard from "./components/ShopCard";


function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={ <Header/>} />
        <Route path="/category/:id" element={ <NetSide/> } />
        <Route path="/shopping-card" element={<ShopCard/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
