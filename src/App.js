import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/dang-nhap" element={<LoginPage />}/>
          <Route path="/dang-ky" element={<RegisterPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
