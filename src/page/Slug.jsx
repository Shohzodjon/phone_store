import { useParams } from "react-router-dom";
import cardData from "../data";
import BreadCrumb from "../components/BreadCrumb";
import discount from "../assets/imges/discount.svg";
import trade from "../assets/imges/trade.svg";
import GiftIcon from "../assets/icons/GiftIcon";
import Percent from "../assets/icons/Percent";
import ArrowIcon from "../assets/icons/ArrowIcon";
import StoreIcon from "../assets/icons/StoreIcon";
import "./slug.css";
import { useState } from "react";
import CheckIcon from "../assets/icons/CheckIcon";
function Slug() {
  const pram = useParams();
  console.log(pram.id, "pram");

  const [tabNum, setTabNum] = useState(1);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const toggle = (num) => {
    setTabNum(num);
  };

  const checkFunc1 = () => {
    setCheck1(!check1);
  };
  const checkFunc2 = () => {
    setCheck2(!check2);
  };
  const checkFunc3 = () => {
    setCheck3(!check3);
  };
  const checkFunc4 = () => {
    setCheck4(!check4);
  };

  return (
    <div className="bg-[#F3F5F8] w-full pt-5 px-7  h-full  rounded-[6px] pb-[30px]">
      {cardData.data.map((item) => {
        if (item.id === pram.id) {
          return (
            <>
              <BreadCrumb last_page={item.title} />
              <div className="bg-white rounded-[16px] mt-[30px] p-[30px] relative">
                <span className="flex items-center justify-center rounded-full bg-[#FF647C] w-[60px] h-[60px] absolute right-0 -top-6 cursor-pointer">
                  <StoreIcon />
                </span>
                <h1 className="text-blueColor font-semibold text-[22px] leading-[26px] mb-5">
                  {item.title}
                </h1>
                <div className="flex gap-5">
                  <div className="flex-1 max-w-[480px]">
                    <div className="bg-[#F3F5F8] rounded-[16px] relative py-[54px] flex items-center justify-center !h-[390px]">
                      <ul className="absolute left-5 top-5 flex flex-col gap-[6px]">
                        <li className="flex items-center justify-center bg-[#F39DBD] rounded-[6px] h-7 w-9 cursor-pointer">
                          <img src={trade} alt="img" />
                        </li>
                        <li className="flex items-center justify-center bg-[#A2AEDB] rounded-[6px] h-7 w-9 cursor-pointer">
                          <GiftIcon />
                        </li>
                        <li className="flex items-center justify-center bg-[#FFBD95] rounded-[6px] h-7 w-9 cursor-pointer">
                          <img src={discount} alt="discount" />
                        </li>

                        <li className="flex items-center justify-center bg-[#AAD9AC] rounded-[6px] h-7 w-9 cursor-pointer">
                          <Percent />
                        </li>
                      </ul>
                      <img
                        src={item.img}
                        alt="slug img"
                        className="max-w-[198px] max-h-[268px]"
                      />
                    </div>
                  </div>
                  {/* slider box */}
                  <div className="flex-1">
                    <h3 className="text-greyColor leading-[19px] mb-2">
                      Цена телефона
                    </h3>
                    <h2 className="text-base text-darkColor font-semibold tracking-[0.01rem] leading-[19px]">
                      6 000 000 сум
                    </h2>
                    <div className="w-full h-[1px] bg-[#F7F7F7] my-5"></div>
                    <h3 className="text-greyColor leading-[19px] mb-2">
                      Общая цена (с наценкой)
                    </h3>
                    <div className="flex items-center justify-between">
                      <h2 className="text-base text-darkColor font-semibold tracking-[0.01rem] leading-[19px]">
                        {item.price}
                      </h2>
                      <p>
                        <span className="bg-[#FF647C] rounded-sm py-[2px] px-1 text-base text-white font-semibold leading-[19.09px] tracking-[-0.3px] inline-block">
                          {item.price2}
                        </span>
                        <span className="text-[14px] font-normal leading-[16.24px] tracking-[-0.3px] text-greyColor ml-2">
                          x3
                        </span>
                      </p>
                    </div>
                    {/* end of product price */}
                    <div className="mt-4">
                      <ul className="w-full flex border border-greenColor text-center rounded-md overflow-hidden">
                        <li className="w-[25%] border-r border-greenColor">
                          <button
                            className={
                              tabNum === 1 ? "tab-btn active-btn" : "tab-btn"
                            }
                            onClick={() => toggle(1)}
                          >
                            3 мес
                          </button>
                        </li>
                        <li className="w-[25%] border-r border-greenColor">
                          <button
                            className={
                              tabNum === 2 ? "tab-btn active-btn" : "tab-btn"
                            }
                            onClick={() => toggle(2)}
                          >
                            6 мес
                          </button>
                        </li>
                        <li className="w-[25%] border-r border-[#00C48C]">
                          <button
                            className={
                              tabNum === 3 ? "tab-btn active-btn" : "tab-btn"
                            }
                            onClick={() => toggle(3)}
                          >
                            12 мес
                          </button>
                        </li>
                        <li className="w-[25%]">
                          <button
                            className={
                              tabNum === 4 ? "tab-btn active-btn" : "tab-btn"
                            }
                            onClick={() => toggle(4)}
                          >
                            24 мес
                          </button>
                        </li>
                      </ul>

                      <h3
                        className={
                          tabNum === 1
                            ? "tab-content active-content"
                            : "tab-content"
                        }
                      >
                        Наценка:
                        <span className="font-semibold"> 5%</span>
                      </h3>
                      <h3
                        className={
                          tabNum === 2
                            ? "tab-content active-content"
                            : "tab-content"
                        }
                      >
                        Наценка:
                        <span className="font-semibold"> 10%</span>
                      </h3>
                      <h3
                        className={
                          tabNum === 3
                            ? "tab-content active-content"
                            : "tab-content"
                        }
                      >
                        Наценка:
                        <span className="font-semibold"> 15%</span>
                      </h3>
                      <h3
                        className={
                          tabNum === 4
                            ? "tab-content active-content"
                            : "tab-content"
                        }
                      >
                        Наценка:
                        <span className="font-semibold"> 20%</span>
                      </h3>
                    </div>
                    <div className="w-full h-[1px] bg-[#F7F7F7] my-5"></div>
                    <div>
                      <h3 className="text-[#BBC2D0] leading-[19px] mb-2">
                        Общие характеристики
                      </h3>

                      <h2 className="text-base leading-[19px] font-normal text-darkColor">
                        Тип: моноблок (классический)
                      </h2>
                      <h2 className="text-base leading-[19px] font-normal text-darkColor">
                        Стандарт: 2G, 3G, 4G (LTE),{" "}
                      </h2>
                      <h2 className="text-base leading-[19px] font-normal text-darkColor">
                        Операционная система: iOS 14
                      </h2>
                      <div className="flex items-center justify-between mt-5">
                        <h2 className="text-base leading-[19px] tracking-[0.01em] text-greenColor font-semibold">
                          Показать все
                        </h2>
                        <span className="cursor-pointer">
                          <ArrowIcon />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of header flex-box */}

                <h3 className="text-greenColor mt-[30px] text-base font-normal leading-[19px] tracking-[-0.3px]">
                  Акции
                </h3>

                <ul>
                  <li className="flex justify-between border-b-[1px] border-b-greyColor pb-5 mt-5">
                    <div className="flex gap-4">
                      <div className="flex items-center justify-center bg-[#F39DBD] rounded-[6px] h-7 w-9 cursor-pointer">
                        <img src={trade} alt="img" />
                      </div>
                      {/*  end of icon wrapp */}
                      <div>
                        <h3 className="text-base leading-[19px] font-semibold tracking-[-0.3px] text-darkColor mb-[10px]">
                          Обменяй свой старый айфон и получи скидку на новый
                        </h3>
                        <p className="text-base leading-[19px] text-greyColor ">
                          -400 000 сум
                        </p>
                      </div>
                    </div>
                    <span
                      className={
                        check1 ? "check-btn active-check " : "check-btn"
                      }
                      onClick={checkFunc1}
                    >
                      <CheckIcon />
                    </span>
                  </li>
                  <li className="flex justify-between border-b-[1px] border-b-greyColor pb-5 mt-5">
                    <div className="flex gap-4">
                      <div className="flex items-center justify-center bg-[#A2AEDB] rounded-[6px] h-7 w-9 cursor-pointer">
                        <GiftIcon />
                      </div>
                      {/*  end of icon wrapp */}
                      <div>
                        <h3 className="text-base leading-[19px] font-semibold tracking-[-0.3px] text-darkColor mb-[10px]">
                          Наушники в подарок
                        </h3>
                        <p className="text-base leading-[19px] text-greyColor ">
                          Apple EarPods
                        </p>
                      </div>
                    </div>
                    <span
                      className={
                        check2 ? "check-btn active-check" : "check-btn"
                      }
                      onClick={checkFunc2}
                    >
                      <CheckIcon />
                    </span>
                  </li>
                  <li className="flex justify-between border-b-[1px] border-b-greyColor pb-5 mt-5">
                    <div className="flex gap-4">
                      <div className="flex items-center justify-center bg-[#FFBD95] rounded-[6px] h-7 w-9 cursor-pointer">
                        <img src={discount} alt="discount" />
                      </div>
                      {/*  end of icon wrapp */}
                      <div>
                        <h3 className="text-base leading-[19px] font-semibold tracking-[-0.3px] text-darkColor mb-[10px]">
                          Скидка 20% на смартфоны
                        </h3>
                        <p className="text-base leading-[19px] text-greyColor ">
                          -10 000 сум
                        </p>
                      </div>
                    </div>
                    <span
                      className={
                        check3 ? "check-btn active-check" : "check-btn"
                      }
                      onClick={checkFunc3}
                    >
                      <CheckIcon />
                    </span>
                  </li>
                  <li className="flex justify-between border-b-[1px] border-b-greyColor pb-5 mt-5">
                    <div className="flex gap-4">
                      <div className="flex items-center justify-center bg-[#AAD9AC] rounded-[6px] h-7 w-9 cursor-pointer">
                        <Percent />
                      </div>
                      {/*  end of icon wrapp */}
                      <div>
                        <h3 className="text-base leading-[19px] font-semibold tracking-[-0.3px] text-darkColor mb-[10px]">
                          Скидка на айфоны
                        </h3>
                        <p className="text-[15px] leading-[17px] font-normal text-darkColor mb-2">
                          IMEI 012345678901234
                        </p>
                        <p className="text-base leading-[19px] text-greyColor ">
                          -10 000 сум
                        </p>
                      </div>
                    </div>
                    <span
                      className={
                        check4 ? "check-btn active-check" : "check-btn"
                      }
                      onClick={checkFunc4}
                    >
                      <CheckIcon />
                    </span>
                  </li>
                </ul>

                <button className="w-full bg-greenColor py-4 rounded-[26px] text-base font-semibold leading-[19px] tracking-[0.01em] mt-[30px] text-center text-white">
                  Добавить в корзину
                </button>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}
export default Slug;
