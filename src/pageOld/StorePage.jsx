import BreadCrumb from "../components/BreadCrumb";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import cardData from "../data";
import PaginationArrow from "../assets/icons/PaginationArrow";
import { Link } from "react-router-dom";
function StorePage() {
  return (
    <div className="w-wull !h-full flex-1 bg-[#F3F5F8] rounded-md px-5 py-7 pb-[30px]">
      <BreadCrumb />
      <h1 className="text-blueColor font-semibold text-[22px] leading-[26px] mt-[30px] mb-5">
        Оформить заказ
      </h1>
      <SearchBar />
      <h3 className="text-base font-semibold leading-[19px] text-darkColor mt-[30px] mb-5">
        Все товары (121)
      </h3>
      <div className="grid grid-cols-5 gap-5">
        {cardData.data.map((item, i) => {
          return (
            <div key={i}>
              <Link to={`/store/${item.id}`}>
                <Card
                  card_img={item.img}
                  card_title={item.title}
                  card_price={item.price}
                  card_discount={item.price2}
                  gift={item.gift}
                  percent={item.discount}
                  trade={item.trade}
                />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between mt-[30px]">
        <span className="cursor-pointer">
          <PaginationArrow />
        </span>
        <ul className="flex items-center">
          <li className="text-base leading-[19px] tracking-[0.01em] font-medium py-2 px-[13px] text-darkColor cursor-pointer">
            1
          </li>
          <li className="text-base leading-[19px] tracking-[0.01em] font-medium py-2 px-[13px] bg-greenColor text-white rounded-[10px] cursor-pointer">
            2
          </li>
          <li className="text-base leading-[19px] tracking-[0.01em] font-medium py-2 px-[13px] text-darkColor  cursor-pointer">
            3
          </li>
          <li className="text-base leading-[19px] tracking-[0.01em] font-medium py-2 px-[13px] text-darkColor cursor-pointer">
            4
          </li>
          <li className="text-base leading-[19px] tracking-[0.01em] font-medium py-2 px-[13px] text-darkColor cursor-pointer">
            5
          </li>
          <li className="text-base leading-[19px] tracking-[0.01em] font-medium py-2 px-[13px] text-darkColor cursor-pointer">
            ...
          </li>
          <li className="text-base leading-[19px] tracking-[0.01em] font-medium py-2 px-[13px] text-darkColor cursor-pointer">
            10
          </li>
        </ul>
        <span className="rotate-[180deg] cursor-pointer">
          <PaginationArrow />
        </span>
      </div>
    </div>
  );
}
export default StorePage;
