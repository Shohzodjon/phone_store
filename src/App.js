import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./page/Navbar";
import LeftSide from "./page/LeftSideBar";
import HomePage from "./page/HomePage";
import BookingList from "./page/BookingList";
import ProductPage from "./page/ProductPage";
import BookingPage from "./page/BookingPage";
import StorePage from "./page/StorePage";
import Slug from "./page/Slug";
function App() {
  return (
    <section>
      <Navbar />
      <div className="flex">
        <LeftSide />
        <div className="flex-1 pt-5 pl-5 pb-4  pr-[60px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/list" element={<BookingList />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="booking" element={<BookingPage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/store/:id" element={<Slug />} />
          </Routes>
        </div>
      </div>
    </section>
  );
}

export default App;
