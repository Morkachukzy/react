// CSS
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
// COMPONENTS
import Signup from "./components/SignupPage";
import Login from "./components/LoginPage";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Routes>
          <Route index element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
