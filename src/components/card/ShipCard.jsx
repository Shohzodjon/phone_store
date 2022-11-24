import star from "../../assets/images/star_icon.svg";
import user from "../../assets/images/user_icon.svg";
import location from "../../assets/images/location_icon.svg";
import ship from "../../assets/images/ship_icon.svg";
import Button from "../gradient-btn/Button";
import "../../styles/ship-card.css";

const ShipCard = (props) => {
  return (
    <div className="max-w-[420px] rounded-[10px] overflow-hidden bg-white pb-[22px]">
      <div className="ship__card-img max-w-[420px] max-h-[254px]">
        <img src={props.img__url} alt="ship-img" />
      </div>
      <div className="ship__card-info px-6 mt-6">
        <h4 className="text-xl font-semibold leading-6 text-lightBlue">
          {props.card__title}
        </h4>
        <div className="grid grid-cols-4 mt-4 justify-center">
          <div className="item flex items-center gap-2">
            <img src={location} alt="card-location" />
            <span className="text-[15px] leading-[15px] text-lightDark font-medium">
              {props.card__location}
            </span>
          </div>
          <div className="item flex items-center gap-2 ml-4 justify-center">
            <img src={user} alt="card-user" />
            <span className="text-[15px] leading-[15px] text-lightDark font-medium">
              {props.card__user}
            </span>
          </div>
          <div className="item flex items-center gap-2 ml-2">
            <img src={ship} alt="card-ship" />
            <span className="text-[15px] leading-[15px] text-lightDark font-medium">
              {props.card__ship__speed}
            </span>
          </div>
          <div className="item flex items-center gap-2 ml-3">
            <img src={star} alt="card-star" />
            <span className="text-[15px] leading-[15px] text-lightDark font-medium">
              {props.card__confort}
            </span>
          </div>
        </div>
        {/* end of card grid */}

        <div className="mt-[22px] w-full h-[1px] bg-black opacity-10"></div>

        <h4 className="mt-[23px] text-mainYellow text-xl leading-6 font-semibold">
          {props.card__discount__price}{" "}
          <span className="ml-4 text-[15px] leading-[15px] font-medium text-lightDark ">
            {props.card__price}
          </span>
        </h4>

        <div className="card__btn-wrapp mt-[23px] flex items-center gap-[11px]">
          <Button context="Забронировать" />
          <Button context="Подробнее" />
        </div>
      </div>
    </div>
  );
};
export default ShipCard;
