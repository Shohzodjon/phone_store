import IconsGroup from "./IconsGroup";
import "./card.css";
function Card(props) {
  return (
    <div className="product_card group transition-all duration-300 ">
      <div className="card_img relative bg-[#f7f7f7] flex items-center justify-center pt-3 pb-4 rounded-[6px]">
        <div className="absolute left-[6px] top-3 z-[999]">
          <IconsGroup
            gift={props.gift}
            percent={props.percent}
            trade={props.trade}
            percent2={false}
          />
        </div>
        <img
          src={props.card_img}
          alt="card_1"
          className=" max-w-[107px] max-h-[142px] min-h-[140px] rounded-lg transition-all duration-300 group-hover:translate-x-4"
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
