import { HiGift } from "react-icons/hi";
import discount from "../assets/imges/discount.svg";
import trade from "../assets/imges/trade.svg";
import card_1 from "../assets/imges/card_1.png";
import "./card.css";
function Card() {
  return (
    <div className="product_card">
      <div className="card_img relative bg-[#f7f7f7] flex items-center justify-center pt-3 pb-4 rounded-[6px]">
        <ul className="absolute left-[6px] top-3 flex flex-col gap-[6px]">
          <li className="flex items-center justify-center bg-[#A2AEDB] rounded-[6px] h-7 w-9 cursor-pointer">
            <HiGift className="text-[#3855B3] text-xl" />
          </li>
          <li className="flex items-center justify-center bg-[#FFBD95] rounded-[6px] h-7 w-9 cursor-pointer">
            <img src={discount} alt="discount" />
          </li>
          <li className="flex items-center justify-center bg-[#F39DBD] rounded-[6px] h-7 w-9 cursor-pointer">
            <img src={trade} alt="img" />
          </li>
        </ul>
        <img
          src={card_1}
          alt="card_1"
          className=" max-w-[107px] max-h-[142px] rounded-lg"
        />
      </div>
      <div className="card_info">
        <h3 className="line-clamp-1 text-darkColor text-[15px] font-normal leading-[17px] tracking-[-0.3px] my-[6px]">
          Смартфон Samsung G...
        </h3>
        <p className=" text-darkColor text-[15px] font-semibold leading-[18px] tracking-[-0.3px] my-[6px]">
          7 300 000 сум{" "}
        </p>
        <span className="bg-[#FF647C] rounded-sm py-[2px] px-1 text-[13px] text-white font-semibold leading-[16px] tracking-[-0.3px] inline-block">
          от 2 435 000 сум
        </span>{" "}
        <span className="text-[11px] font-semibold leading-[13px] tracking-[-0.3px] text-[#BBC2D0]">
          {" "}
          x24
        </span>
      </div>
    </div>
  );
}
export default Card;
