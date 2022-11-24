import Button from "../components/gradient-btn/Button";
import "../styles/header-section.css";
import thick from "../assets/images/bulut.png";
import telegram from "../assets/images/telegram.svg";
import viber from "../assets/images/viber.svg";
import location from "../assets/images/location.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import chatting from "../assets/images/chatting.svg";
import krim from "../assets/images/krim.png";
import sochi from "../assets/images/sochi.png";
import TelIcon from "../assets/icons/TelIcon";
import SectionHeader from "../components/section-header/SectionHeader";
import { useState } from "react";
import ShipCard from "../components/card/ShipCard";
import Booking from "./Booking";
import DiscountCard from "../components/discount-card/DiscountCard";
import cardData from "../fakeData/ship-cart";
import discountCard from "../fakeData/discount-card";
import HomeView from "./HomeView";
import TourCard from "../components/mashrut-card/TourCard";
import tourData from "../fakeData/tour-data";
const HeaderSection = () => {
  const [show, setShow] = useState(false);

  const openSocial = () => {
    setShow(!show);
  };

  return (
    <>
      <section className="header__section overflow-hidden">
        <div className="container pt-[106px] ">
          <h1 className="text-[80px] leading-[80px] text-white font-medium mb-[59px]">
            Аренда яхтв <br /> Крыму и Сочи
          </h1>
          <p className="text-white text-lg leading-6">
            Организуем на борт водные активности, рыбалку, <br /> подготовим
            яхту для мероприятия, кейтеринг.
          </p>
          <p className="text-white text-lg leading-6">
            {" "}
            Мы сделаем Ваш отдых ярким и запоминающимся!
          </p>

          <div className="flex flex-col gap-[13px] header__btn mt-[61px]">
            <Button context="Перейти в каталог" />
            <Button context="Быстрый подбор яхт" />
          </div>
        </div>
        <div>
          <ul
            className={`social__share ${
              show ? "social__active" : "social__unactive"
            }`}
          >
            <li className="social__link">
              <img src={whatsapp} alt="whatsup" />
            </li>
            <li className="social__link">
              <span className="flex items-center justify-center w-[26px] h-[26px] border-[2px] border-[#37AEE2] rounded-full">
                <img src={telegram} alt="telegram" />
              </span>
            </li>
            <li className="social__link">
              <img src={viber} alt="viber" />
            </li>
            <li className="social__link">
              <TelIcon />
            </li>
            <li className="social__link">
              <img src={chatting} alt="chatting" />
            </li>
          </ul>
          <button
            className="show__social-link block absolute -right-[38px] bottom-[153px] -rotate-90 z-30 py-1 px-1 text-[11px] leading-[11px] font-medium text-black rounded-tl-md rounded-tr-md"
            onClick={openSocial}
          >
            Оставить заявку
          </button>
        </div>
        <div className="absolute left-0 right-0 bottom-0">
          <img src={thick} alt="bulut img" className="w-full" />
        </div>
      </section>
      <section className="bg-[#EFF7FC] pt-11 pb-5">
        <div className="container pt-[11px]">
          <div className="second__section">
            <SectionHeader
              title="Выберите город"
              header_url=""
              header_link=""
              arrow_show={false}
            />
            <div className="flex items-center mt-[52px] gap-10 mb-[100px]">
              <div className=" max-h-[260px] relative rounded-[10px]">
                <img src={krim} alt="img" className="w-full h-full" />
                <div className="absolute right-10 top-4 flex items-center gap-3">
                  <img src={location} alt="tour location" />
                  <h2 className="text-white text-[40px] leading-20 font-medium">
                    Крым
                  </h2>
                </div>
              </div>
              <div className=" max-h-[260px] relative rounded-[10px]">
                <img src={sochi} alt="sochi" className="w-full h-full" />
                <div className="absolute left-10 top-4 flex items-center gap-3 ">
                  <img src={location} alt="tour location" />
                  <h2 className="text-white text-[40px] leading-20 font-medium">
                    Сочи
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <SectionHeader
            title="Популярные яхты"
            header_url="/"
            header_link="Открыть каталог"
            arrow_show={true}
          />

          <div className="flex items-center gap-[10px] mt-5 mb-[122px]">
            {cardData.map((item, i) => (
              <ShipCard
                key={i}
                img__url={item.img_url}
                card__title={item.title}
                card__location={item.card_location}
                card__user={item.card_users}
                card__ship__speed={item.card_speed}
                card__confort={item.card_confort}
                card__discount__price={item.card_discount}
                card__price={item.card_price}
              />
            ))}
          </div>
        </div>
        {/* end of container */}

        <Booking />
        <div className="container pt-5">
          <SectionHeader
            title="Дополнительные услуги"
            header_url="/"
            header_link="Открыть каталог"
            arrow_show={true}
          />
          <div className="grid grid-cols-3 gap-[10px] mt-5">
            {discountCard.map((item, i) => (
              <DiscountCard
                key={i}
                discount__img={item.imgUrl}
                discount__title={item.title}
                discount__desc={item.desc}
                discount__price={item.price}
              />
            ))}
          </div>
        </div>
        <HomeView />
        <div className="container pt-[10px]">
          <SectionHeader
            title="Популярные маршруты"
            header_url="/"
            header_link="Все маршруты"
            arrow_show={true}
          />
          <div className="flex gap-[10px] mt-5">
            {tourData.map((item, i) => (
              <TourCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default HeaderSection;
