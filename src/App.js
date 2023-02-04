import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LessonPlan from "./pages/LessonPlan";
import About from "./pages/About";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lessonplan" element={<LessonPlan />} />
        </Routes>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
