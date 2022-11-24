import ship from "../assets/images/cater.svg";
import party from "../assets/images/party.svg";
import fishing from "../assets/images/fishing.svg";
import friends from "../assets/images/friends.svg";
import chef from "../assets/images/chef.svg";
import chiganoq from "../assets/images/chiganoq.png";
import yaxta from "../assets/images/yaxta.png";
import delfin from "../assets/images/delfin.png";
import seastar from "../assets/images/sea_star.png";
import wedding from "../assets/images/wedding.png";
import bulut from "../assets/images/bulut.png";
import "../styles/home-view.css";
const fakeDate = [
  {
    img: ship,
    desc: "Флот из 120 яхт классом от Эконом до Luxury",
  },
  {
    img: party,
    desc: "Организуем вечеринки, свадьбы, мальчишники и девичники",
  },
  {
    img: fishing,
    desc: "Морская рыбалка.Снасти – бесплатно",
  },
  {
    img: friends,
    desc: "Индивидуальные морские прогулки своей компанией",
  },
  {
    img: chef,
    desc: "Выездной профессиональный повар на яхте",
  },
];

const HomeView = () => {
  return (
    <section className="home__view pt-[1px] relative mt-[78px]">
      <img
        src={seastar}
        alt="sea star"
        className="absolute w-[365px] h-[339px] left-0 -top-[5%]"
      />
      <img
        src={wedding}
        alt="wedding"
        className="absolute right-0 -top-[3%] w-[290px] h-[339px]"
      />
      <div className="container">
        <h2 className="text-center text-[60px] leading-[50px] text-white mt-[85px]">
          <i>
            Незабываемые <br /> яркие впечатления
          </i>
        </h2>
        <p className=" mt-8 text-lg leading-6 text-white w-[50%] mx-auto">
          Бодрящий морской воздух, мерный гул мотора, крики чаек над головой и –
          невероятные пейзажи, открывающиеся вокруг… Всё это вы можете ощутить,
          заказав морскую прогулку у нас!
        </p>

        <ul className="mt-[66px] flex  gap-11">
          {fakeDate.map((item, i) => (
            <li key={i} className="text-center ">
              <span className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-[18px]">
                <img src={item.img} alt="img" className="w-6" />
              </span>
              <p className="text-lg leading-6 text-white">{item.desc}</p>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between mt-[49px]">
          <div className="w-[218px] h-[213px]">
            <img src={chiganoq} alt="img" className="w-full" />
          </div>
          <div className="w-[502px] h-[390px]">
            <img src={yaxta} alt="img" className="w-full" />
          </div>
          <div className="w-[286px] h-[172px]">
            <img src={delfin} alt="delfin" className="w-full" />
          </div>
        </div>
      </div>
      <img
        src={bulut}
        alt="img"
        className="absolute bottom-0 left-0 w-full right-0"
      />
    </section>
  );
};
export default HomeView;
