import { Link } from "react-router-dom";
import BellIcon from "../assets/icons/BellIcon";
import PersonIcon from "../assets/icons/PersonIcon";
function Navbar() {
  return (
    <nav className="max-w-[1440px] mx-auto py-[1px] max-h-[70px]">
      <div className="flex items-center justify-between">
        <Link to="/" className="ml-16 mt-[26px] mb-[19px]">
          <h2 className="text-base font-semibold text-black leading-[19px]">
            LOGO
          </h2>
        </Link>

        <div className="flex items-center gap-20">
          <div className="relative cursor-pointer">
            <span className="w-4 h-4 rounded-full bg-greenColor flex items-center justify-center text-[10px] leading-3 text-white font-semibold absolute -top-2 -right-2">
              1
            </span>
            <BellIcon />
          </div>
          {/* end of bell */}
          <div className="flex items-center bg-blueColor w-max-content h-[70px] pl-[66px] pr-[60px] gap-3 rounded-bl-[30px]">
            <p className="font-normal text-base leading-[19px] text-white">
              Личный кабинет
            </p>
            <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
              <PersonIcon />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
