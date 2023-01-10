import './App.css'
import { Routes, Route } from "react-router-dom"
import WebSearch from "./component/WebSearch.js";
import Search from "./component/search.js";
import Index from "./component/indexPage.js";
import TypePick from "./component/TypePick.js";
import Message from './component/Message';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="search" element={<Search />}>
          <Route path="type-pick" element={<TypePick />}></Route>
          <Route path="generator" element={<WebSearch type={"generator"} />}></Route>
          <Route path="platform" element={<WebSearch type={"platform"} />}></Route>
        </Route>  
        <Route path="message" element={<Message />}></Route>
      </Routes>
    </>
  );
}

export default App;
