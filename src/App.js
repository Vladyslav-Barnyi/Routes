import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import NoPage from "./Pages/NoPage";
export default function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route exact path ="/contacts" element={<Contacts/>}/>
          <Route path="*" element={<NoPage/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

