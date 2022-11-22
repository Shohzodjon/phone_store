import { Routes, Route } from "react-router-dom";
import Navbar from "./views/Navbar";
import Home from "./pages/Home";
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
    </section>
  );
}

export default App;
