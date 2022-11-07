import discount from "../assets/imges/discount.svg";
import trade from "../assets/imges/trade.svg";
import GiftIcon from "../assets/icons/GiftIcon";
import Percent from "../assets/icons/Percent";
function IconsGroup(props) {
  return (
    <ul className=" flex flex-col gap-[6px]">
      <li
        className={
          props.gift
            ? "flex items-center justify-center bg-[#A2AEDB] rounded-[6px] h-7 w-9 cursor-pointer transition-all duration-300 hover:scale-110"
            : "hidden"
        }
      >
        <GiftIcon />
      </li>
      <li
        className={
          props.percent
            ? "flex items-center justify-center bg-[#FFBD95] rounded-[6px] h-7 w-9 cursor-pointer transition-all duration-300 hover:scale-110"
            : "hidden"
        }
      >
        <img src={discount} alt="discount" />
      </li>
      <li
        className={
          props.trade
            ? "flex items-center justify-center bg-[#F39DBD] rounded-[6px] h-7 w-9 cursor-pointer transition-all duration-300 hover:scale-110"
            : "hidden"
        }
      >
        <img src={trade} alt="img" />
      </li>
      <li
        className={
          props.percent2
            ? "flex items-center justify-center bg-[#AAD9AC] rounded-[6px] h-7 w-9 cursor-pointer transition-all duration-300 hover:scale-110"
            : "hidden"
        }
      >
        <Percent />
      </li>
    </ul>
  );
}
export default IconsGroup;
