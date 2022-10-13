import { BrowserRouter, Route, Routes } from "react-router-dom";
import {NavScrollExample} from './components/Navbar/nav';
import { List } from "./components/Shadow/Albums";
import { Foundation } from "./components/Foundation/Foundation";
import { Home } from "./components/Home/Home";
import { Lipstick } from "./components/Lipstick/Lipstick";
import Search  from "./components/Search/search";
const App = ()=> {


    return (
        <BrowserRouter>
        <NavScrollExample/>
        <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="eyeshadow" element = {<List/>}/>
                <Route path="lipstick" element = {<Lipstick/>}/>
                <Route path="foundation" element = {<Foundation/>}/>
                <Route path="search" element = {<Search/>}/>
                
        </Routes>
        </BrowserRouter>
    );
}
export {App};