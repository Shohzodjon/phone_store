import logo from "../assets/images/logo.png";
import telegram from "../assets/images/telegram.svg";
import viber from "../assets/images/viber.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import wlink from "../assets/images/wlink.svg";
import TelIcon from "../assets/icons/TelIcon";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "../assets/icons/MenuIcon";
import CloseIcon from "../assets/icons/CloseIcon";
import "../styles/navbar.css";
const Navbar = () => {
  const links = [
    { path_link: "Главная", link: "/" },
    { path_link: "Аренда яхт", link: "/rent" },
    { path_link: "Маршруты", link: "/tour" },
    { path_link: "Доп. услуги", link: "/discount" },
    { path_link: "Контакты", link: "/contact" },
  ];

  return (
    <nav className="w-full py-3 md:py-4 lg:pt-5 lg:pb-4 bg-darkBlue">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link
            className="nav__logo w-[127px] h-[21px] sm:w-[150px] sm:h-7 md:w-[200px] md:h-9  lg:w-[260px] lg:h-11"
            to="/"
          >
            <img src={logo} alt="nav-logo" className="w-full" />
          </Link>
          <ul className="hidden xl:flex  items-center gap-8 ">
            {links.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.link}
                  className={(navClass) =>
                    navClass.isActive
                      ? "active__menu navbar__menu"
                      : "navbar__menu"
                  }
                >
                  <span className="text-white text-sm tracking-[0.04em] uppercase font-medium">
                    {item.path_link}
                  </span>
                  <span className="active__line"></span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="social__contact flex items-center gap-9">
            <a
              href="tel:+7 (978) 050-43-16"
              className="nav__contact flex items-center gap-1 md:gap-2.5"
            >
              <TelIcon />
              <span className="text-white text-[12px] sm:text-sm md:text-base leading-4 font-medium tracking-[0.04em]">
                +7 (978) 050-43-16
              </span>
            </a>
            <ul className="hidden lg:flex items-center gap-2.5">
              <li>
                <a href="#">
                  <img src={viber} alt="viber" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={whatsapp} alt="whatsapp" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center w-[26px] h-[26px] rounded-full border border-[#37AEE2]"
                >
                  <img src={telegram} alt="telegram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={wlink} alt="wlink" />
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__menu flex items-center gap-[5.34px] xl:hidden ">
            <span className="text-[11px] md:text-sm leading-5 font-medium text-[#FFD289]">
              МЕНЮ
            </span>
            <MenuIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
