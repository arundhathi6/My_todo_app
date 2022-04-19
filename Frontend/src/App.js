import Todo from "./components/Todo";
import TodoEditz from "./components/TodoEditz";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">

     <Routes>
     <Route path="/" element={<Todo/>}></Route>
        {/* <Route path="/:todoid" element={<TodoEditz />}></Route> */}

      </Routes>
    </div>
  );
}

export default App;
