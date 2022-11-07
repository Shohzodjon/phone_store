import discount from "../assets/imges/discount.svg";
import trade from "../assets/imges/trade.svg";
import GiftIcon from "../assets/icons/GiftIcon";
import "./card.css";
function Card(props) {
  return (
    <div className="product_card">
      <div className="card_img relative bg-[#f7f7f7] flex items-center justify-center pt-3 pb-4 rounded-[6px]">
        <ul className="absolute left-[6px] top-3 flex flex-col gap-[6px]">
          <li
            className={
              props.isGift
                ? "flex items-center justify-center bg-[#A2AEDB] rounded-[6px] h-7 w-9 cursor-pointer"
                : "hidden"
            }
          >
            <GiftIcon />
          </li>
          <li
            className={
              props.percent
                ? "flex items-center justify-center bg-[#FFBD95] rounded-[6px] h-7 w-9 cursor-pointer"
                : "hidden"
            }
          >
            <img src={discount} alt="discount" />
          </li>
          <li
            className={
              props.trade
                ? "flex items-center justify-center bg-[#F39DBD] rounded-[6px] h-7 w-9 cursor-pointer"
                : "hidden"
            }
          >
            <img src={trade} alt="img" />
          </li>
        </ul>
        <img
          src={props.card_img}
          alt="card_1"
          className=" max-w-[107px] max-h-[142px] rounded-lg"
        />
      </div>
      <div className="card_info">
        <h3 className="line-clamp-1 text-darkColor text-[15px] font-normal leading-[17px] tracking-[-0.3px] my-[6px]">
          {props.card_title}
        </h3>
        <p className=" text-darkColor text-[15px] font-semibold leading-[18px] tracking-[-0.3px] my-[6px]">
          {props.card_price}
        </p>
        <span className="bg-[#FF647C] rounded-sm py-[2px] px-1 text-[13px] text-white font-semibold leading-[16px] tracking-[-0.3px] inline-block">
          {props.card_discount}
        </span>
        <span className="text-[11px] font-semibold leading-[13px] tracking-[-0.3px] text-[#BBC2D0]">
          x24
        </span>
      </div>
    </div>
  );
}
export default Card;
