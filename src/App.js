import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LessonPlan from "./pages/LessonPlan";
import About from "./pages/About";

import Footer from "../src/components/Footer/Footer";
import LoginPage from "./components/Login/Login";
import SignUpPage from "./components/SignIn/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import WelcomeUserPage from "./pages/WelcomeUserPage";
import PageSuccess from "./pages/PageSuccess";


function App() {
  
  return (
    <>
      
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
          <Route path="/pagesuccess" element={<PageSuccess />} />
        </Routes>
      </UserAuthContextProvider>
      <Footer />
    </>
  );
}

export default App;
