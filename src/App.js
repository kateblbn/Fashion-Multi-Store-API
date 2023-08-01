import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Header from "./components/Header";
import NetSide from "./components/NetSide";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Header/>} />
        <Route path="/category" element={ <NetSide/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
