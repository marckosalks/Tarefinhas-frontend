import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home"
import { NewTask } from "./pages/newTask/newTask"
import { EditTask } from "./pages/editTask/editTask"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/newtask" element={<NewTask/>}/>
      <Route path="/edittask" element={<EditTask/>}/>
    </Routes>
  );
}