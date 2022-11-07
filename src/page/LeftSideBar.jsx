import { NavLink } from "react-router-dom";
import List from "../assets/icons/List";
import HomeIcon from "../assets/icons/HomeIcon";
import ProductIcon from "../assets/icons/ProductIcon";
import StarIcon from "../assets/icons/StarIcon";
import StoreIcon from "../assets/icons/StoreIcon";
import "./left-side.css";
function LeftSide() {
  return (
    <div className="bg-blueColor max-w-[263px] rounded-tr-[30px] pl-[30px] pt-[54px] min-h-[900px]">
      <ul className="flex flex-col gap-[10px]">
        <li>
          <NavLink to="/" className="sidebar-link">
            <HomeIcon />
            <span>Главная</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/list" className="sidebar-link">
            <List />
            <span>Заказы</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className="sidebar-link">
            <ProductIcon />
            <span>Товары</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/booking" className="sidebar-link">
            <StarIcon />
            <span>Отзывы</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/store" className="sidebar-link">
            <StoreIcon />
            <span>Оформить заказ</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default LeftSide;
