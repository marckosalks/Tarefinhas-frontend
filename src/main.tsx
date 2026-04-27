import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Toaster />
    <App />
  </BrowserRouter>,
);
