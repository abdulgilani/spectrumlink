import HomePage from "./pages/HomePage/HomePage";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route 
      path="/"
      element={<HomePage />}
      />
      <Route
      path="/signIn"
      element={<SignIn />}
      />
      <Route 
      path="/register"
      element={<Register />}
      />
    </Routes>
    </BrowserRouter>
  )
}

export default App
