import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import LoginPage from "./pages/login";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
