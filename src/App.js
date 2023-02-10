import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LessonPlan from "./pages/LessonPlan";
import About from "./pages/About";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import LoginPage from "./components/Login/Login";
import SignUpPage from "./components/SignIn/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import WelcomeUserPage from "./pages/WelcomeUserPage";
import { useState } from "react";

function App() {
  const [showHeader, setShowHeader] = useState(true)
  return (
    <>
      <Header />
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/welcomeuser"
            element={
              <ProtectedRoute>
                <WelcomeUserPage />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lessonplan" element={<LessonPlan />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </UserAuthContextProvider>
      <Footer />
    </>
  );
}

export default App;
