import HomePage from "./pages/HomePage/HomePage";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import PersonInfo from "./pages/PersonInfo/PersonInfo";
import FriendRequestPage from "./pages/FriendRequest/FriendRequestPage";
import FriendsPage from "./pages/Friends/FriendsPage";
import ChatPage from "./pages/ChatPage/ChatPage";

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
      <Route 
      path="/dashboard"
      element={<Dashboard />}
      />
      <Route 
      path="/person/:memberId"
      element={<PersonInfo />}
      />
      <Route 
      path="/friendRequest"
      element={<FriendRequestPage />}
      />
      <Route 
      path="/friends"
      element={<FriendsPage />}
      />
      <Route 
      path="/chat/:chatId"
      element={<ChatPage />}
      />
    </Routes>
    </BrowserRouter>
  )
}

export default App
