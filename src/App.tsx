import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// Import your page components
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        {/* Header Component */}
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
