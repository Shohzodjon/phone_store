import Button from "../components/gradient-btn/Button";
import "../styles/header-section.css";
import thick from "../assets/images/bulut.png";
import telegram from "../assets/images/telegram.svg";
import viber from "../assets/images/viber.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import chatting from "../assets/images/chatting.svg";
import TelIcon from "../assets/icons/TelIcon";
import SectionHeader from "../components/section-header/SectionHeader";
import { useState } from "react";
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
      <section className="bg-[#EFF7FC] ">
        <div className="container pt-[11px]">
          <div className="second__section">
            <SectionHeader
              title="Выберите город"
              header_url=""
              header_link=""
              arrow_show={false}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default HeaderSection;
