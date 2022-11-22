const DiscountCard = (props) => {
  return (
    <div className="discount__card max-w-[420px] rounded-[10px] ">
      <div className="discount__img max-h-[254px] w-full">
        <img
          src={props.discount__img}
          alt="card img"
          className="rounded-tl-[10px] rounded-tr-[10px] w-full h-full"
        />
      </div>
      <div className="discount__info mt-6 px-6 ">
        <h3 className="text-lightBlue text-xl font-semibold leading-6 mb-3">
          {props.discount__title}
        </h3>
        <p className="text-lightDark text-[15px] leading-[17px] font-medium mb-5">
          {props.discount__desc}
        </p>
        <span className="text-xl leading-6 font-semibold text-mainYellow">
          {props.discount__price}
        </span>
      </div>
    </div>
  );
};
export default DiscountCard;
