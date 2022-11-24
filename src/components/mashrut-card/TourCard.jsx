const TourCard = ({ item }) => {
  return (
    <div className="pb-[17px] bg-white rounded-[10px]">
      <div className="card__img ">
        <img src={item.img} alt="img" />
      </div>
      <div className="card__info px-6">
        <h3 className="mt-6 mb-[14px] text-lightBlue text-xl leading-6 font-semibold">
          {item.title}
        </h3>
        <ul className="mb-5">
          {item.list.map((k, i) => (
            <li
              key={i}
              className="text-[15px] leading-[17px] text-lightDark font-medium mb-1"
            >
              {i + 1}. {k}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-[9px]">
          <img src={item.clock} alt="img" />
          <div dangerouslySetInnerHTML={{ __html: item.htmlEl }} />
        </div>
        <div className="flex items-center gap-[9px] mt-3">
          <img src={item.mountain} alt="img" />
          <div dangerouslySetInnerHTML={{ __html: item.htmlEl2 }} />
        </div>
      </div>
    </div>
  );
};
export default TourCard;
