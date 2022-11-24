import cater from "../assets/images/cater.svg";
import map from "../assets/images/map.svg";
import phone from "../assets/images/phone_wrapp.svg";
import calendar from "../assets/images/calendar.svg";
import leaf from "../assets/images/leaf.png";
import bird from "../assets/images/bird.png";
import bulut from "../assets/images/bulut.png";
import NumberOne from "../assets/icons/NumberOne";
import NumberTwo from "../assets/icons/NumberTwo";
import NumberThree from "../assets/icons/NumberThree";
import NumberFour from "../assets/icons/NumberFour";
import ArrowIcon from "../assets/icons/ArrowIcon";
import "../styles/booking.css";
import Button from "../components/gradient-btn/Button";
const Booking = () => {
  return (
    <section className="booking__section min-h-[844px] pt-[79px] ">
      <img
        src={leaf}
        alt="leaf"
        className="absolute -top-20 -left-[2%] scale-90"
      />

      <img
        src={bird}
        alt="bird"
        className="absolute -top-[10%] -right-0 w-[250px] h-[250px]"
      />
      <div className="container">
        <h2 className="text-center text-white text-[32px] leading-[64px] font-medium">
          Как сделать заказ
        </h2>
        <p className="text-lg text-white text-center font-normal leading-6">
          Для того чтобы организовать такую экскурсию, <br /> необходимо
          выполнить несколько шагов:
        </p>
        <div>
          <ul className="flex items-start gap-8 mt-[75px]">
            <li>
              <div className="flex items-center gap-4">
                <span className="w-[70px] h-[70px] bg-[#EFF7FC] rounded-full flex items-center justify-center">
                  <img src={cater} alt="img" />
                </span>
                <NumberOne />
              </div>
              <div className="mt-[26px]">
                <h3 className="text-white text-xl leading-6 font-medium mb-4">
                  Выберите модель яхты
                </h3>
                <p className="text-[15px] opacity-60 leading-6 text-white font-normal">
                  В нашем каталоге вы сможете подобрать яхту на ваш вкус.
                  Воспользуйтесь удобной системой фильтрации.
                </p>
              </div>
            </li>
            <li className="booking__arrow">
              <ArrowIcon />
            </li>
            <li>
              <div className="flex items-center gap-4">
                <span className="w-[70px] h-[70px] bg-[#EFF7FC] rounded-full flex items-center justify-center">
                  <img src={calendar} alt="img" />
                </span>
                <NumberTwo />
              </div>
              <div className="mt-[26px]">
                <h3 className="text-white text-xl leading-6 font-medium mb-4">
                  Выберите дату и время
                </h3>
                <p className="text-[15px] opacity-60 leading-6 text-white font-normal">
                  Запланируйте вашу поездкус максимальным комфортом.Вы можете
                  арендовать яхту на дневную или ночную прогулку.
                </p>
              </div>
            </li>
            <li className="booking__arrow">
              <ArrowIcon />
            </li>
            <li>
              <div className="flex items-center gap-4">
                <span className="w-[70px] h-[70px] bg-[#EFF7FC] rounded-full flex items-center justify-center">
                  <img src={map} alt="img" />
                </span>
                <NumberThree />
              </div>
              <div className="mt-[26px]">
                <h3 className="text-white text-xl leading-6 font-medium mb-4">
                  Выберите маршрут
                </h3>
                <p className="text-[15px] opacity-60 leading-6 text-white font-normal">
                  Ознакомьтесь с нашими захватывающими маршрутами, определитесь
                  с портом отправления.
                </p>
              </div>
            </li>
            <li className="booking__arrow">
              <ArrowIcon />
            </li>
            <li>
              <div className="flex items-center gap-4">
                <span className="w-[70px] h-[70px] bg-[#EFF7FC] rounded-full flex items-center justify-center">
                  <img src={phone} alt="img" />
                </span>
                <NumberFour />
              </div>
              <div className="mt-[26px]">
                <h3 className="text-white text-xl leading-6 font-medium mb-4">
                  Оставьте заявку
                </h3>
                <p className="text-[15px] opacity-60 leading-6 text-white font-normal">
                  Воспользуйте удобной формой заявки. Мы свяжемся с вами в
                  удобном для вас мессенджере или по телефону.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="booking__btn flex items-center justify-center gap-[9px] mt-[79px]">
          <Button context="Перейти в каталог" />
          <Button context="Быстрый подбор яхт" />
        </div>
      </div>
      {/* end of steps */}
      <img
        src={bulut}
        alt="img"
        className="absolute bottom-0 left-0 right-0 w-full h-auto "
      />
    </section>
  );
};
export default Booking;
