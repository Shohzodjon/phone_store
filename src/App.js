import { Routes, Route } from "react-router-dom";
import Navbar from "./views/Navbar";
import Home from "./pages/Home";
import Footer from "./views/Footer";
function App() {
  function warm() {
    alert("Its working");
  }
  return (
    <section>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </section>
  );
}

export default App;
