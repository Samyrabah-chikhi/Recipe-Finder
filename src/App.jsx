import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FoodDetail from "./pages/FoodDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/food/:id" element={<FoodDetail></FoodDetail>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
