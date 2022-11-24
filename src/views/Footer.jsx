import logo from "../assets/images/logo.png";
import telegram from "../assets/images/telegram.svg";
import viber from "../assets/images/viber.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import wlink from "../assets/images/wlink.svg";
const Footer = () => {
  const list1 = [
    "Крым, Балаклава, наб. Назукина, 1а",
    "Крым, Ялта, ул. Рузвельта, 5",
    "Сочи, ул. Войкова, 1",
  ];
  const list2 = [
    "LILIYA LUXURY 2022",
    "© Все права защищены",
    "Политика конфиденциальности",
  ];
  return (
    <footer className="bg-darkBlue pt-10 pb-[52px]">
      <div className="container flex justify-between">
        <div className="w-[260px] h-11">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
        <div className="flex gap-[57px]">
          <ul>
            {list1.map((item, i) => (
              <li key={i} className="text-sm text-white font-medium leading-5">
                {item}
              </li>
            ))}
          </ul>
          <ul>
            {list2.map((item, i) => (
              <li key={i} className="text-sm text-white font-medium leading-5">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-8 items-start">
          <a
            href="tel:+7 (978) 050-43-16"
            className="text-base leading-4 font-semibold text-white tracking-[0.04em]"
          >
            +7 (978) 050-43-16
          </a>
          <ul className="flex gap-2 items-start">
            <li>
              <a href="#">
                <img src={viber} alt="img" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={whatsapp} alt="img" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="w-[26px] h-[26px] flex items-center justify-center border-[2px] border-[#37AEE2] rounded-full"
              >
                <img src={telegram} alt="img" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={wlink} alt="img" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
