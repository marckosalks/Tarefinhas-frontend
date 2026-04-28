import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home"
import { NewTask } from "./pages/newTask/newTask"
import { EditTask } from "./pages/editTask/editTask"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {

const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/newtask" element={<NewTask/>}/>
      <Route path="/edittask" element={<EditTask/>}/>
    </Routes>
    </QueryClientProvider>
  );
}