import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home"
import { NewTask } from "./pages/newTask/newTask"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/newtask" element={<NewTask/>}/>
    </Routes>
  );
}