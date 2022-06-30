import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Component/Home/Navbar/Navbar';
import CompletedTask from './Component/Home/CompletedTask/CompletedTask';
import ToDo from './Component/To-Do/To-Do';
import Calendar from './Component/Calendar/Calendar';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/completetask" element={<CompletedTask />}></Route>
        <Route path="/todo" element={<ToDo />}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
