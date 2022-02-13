import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/todo/:id/" exact element={<Todo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
