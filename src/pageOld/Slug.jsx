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
import IconsGroup from "../components/IconsGroup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
function Slug() {
  const pram = useParams();
  let paramId = Number(pram.id);

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
  const arr = [1, 2, 3, 4];

  return (
    <div className="bg-[#F3F5F8] w-full pt-5 px-7  h-full  rounded-[6px] pb-[30px]">
      {cardData.data.map((item) => {
        return (
          <>
            <div className={item.id === paramId ? "block" : "hidden"}>
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
                    <div className="bg-[#F3F5F8] rounded-[16px] relative  !h-[390px]">
                      <div className="absolute left-5 top-5 z-[9999]">
                        <IconsGroup
                          gift={true}
                          percent={true}
                          trade={true}
                          percent2={true}
                        />
                      </div>
                      <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        spaceBetween={0}
                        autoplay={true}
                        loop={true}
                        slidesPerView={1}
                        className=" h-[100%] "
                      >
                        {arr.map((i) => {
                          return (
                            <SwiperSlide
                              key={i}
                              className="py-[54px] flex items-center justify-center"
                            >
                              <img
                                src={item.img}
                                alt="slug img"
                                className="min-w-[160px] min-h-[260px] max-h-[268px] rounded-md"
                              />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
                  </div>
                  {/* slider box */}
                  <div className="flex-1">
                    <h3 className="text-greyColor leading-[19px] mb-2">
                      ???????? ????????????????
                    </h3>
                    <h2 className="text-base text-darkColor font-semibold tracking-[0.01rem] leading-[19px]">
                      6 000 000 ??????
                    </h2>
                    <div className="w-full h-[1px] bg-[#F7F7F7] my-5"></div>
                    <h3 className="text-greyColor leading-[19px] mb-2">
                      ?????????? ???????? (?? ????????????????)
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
                            3 ??????
                          </button>
                        </li>
                        <li className="w-[25%] border-r border-greenColor">
                          <button
                            className={
                              tabNum === 2 ? "tab-btn active-btn" : "tab-btn"
                            }
                            onClick={() => toggle(2)}
                          >
                            6 ??????
                          </button>
                        </li>
                        <li className="w-[25%] border-r border-[#00C48C]">
                          <button
                            className={
                              tabNum === 3 ? "tab-btn active-btn" : "tab-btn"
                            }
                            onClick={() => toggle(3)}
                          >
                            12 ??????
                          </button>
                        </li>
                        <li className="w-[25%]">
                          <button
                            className={
                              tabNum === 4 ? "tab-btn active-btn" : "tab-btn"
                            }
                            onClick={() => toggle(4)}
                          >
                            24 ??????
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
                        ??????????????:
                        <span className="font-semibold"> 5%</span>
                      </h3>
                      <h3
                        className={
                          tabNum === 2
                            ? "tab-content active-content"
                            : "tab-content"
                        }
                      >
                        ??????????????:
                        <span className="font-semibold"> 10%</span>
                      </h3>
                      <h3
                        className={
                          tabNum === 3
                            ? "tab-content active-content"
                            : "tab-content"
                        }
                      >
                        ??????????????:
                        <span className="font-semibold"> 15%</span>
                      </h3>
                      <h3
                        className={
                          tabNum === 4
                            ? "tab-content active-content"
                            : "tab-content"
                        }
                      >
                        ??????????????:
                        <span className="font-semibold"> 20%</span>
                      </h3>
                    </div>
                    <div className="w-full h-[1px] bg-[#F7F7F7] my-5"></div>
                    <div>
                      <h3 className="text-[#BBC2D0] leading-[19px] mb-2">
                        ?????????? ????????????????????????????
                      </h3>

                      <h2 className="text-base leading-[19px] font-normal text-darkColor">
                        ??????: ???????????????? (????????????????????????)
                      </h2>
                      <h2 className="text-base leading-[19px] font-normal text-darkColor">
                        ????????????????: 2G, 3G, 4G (LTE),{" "}
                      </h2>
                      <h2 className="text-base leading-[19px] font-normal text-darkColor">
                        ???????????????????????? ??????????????: iOS 14
                      </h2>
                      <div className="flex items-center justify-between mt-5">
                        <h2 className="text-base leading-[19px] tracking-[0.01em] text-greenColor font-semibold">
                          ???????????????? ??????
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
                  ??????????
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
                          ?????????????? ???????? ???????????? ?????????? ?? ???????????? ???????????? ???? ??????????
                        </h3>
                        <p className="text-base leading-[19px] text-greyColor ">
                          -400 000 ??????
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
                          ???????????????? ?? ??????????????
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
                          ???????????? 20% ???? ??????????????????
                        </h3>
                        <p className="text-base leading-[19px] text-greyColor ">
                          -10 000 ??????
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
                          ???????????? ???? ????????????
                        </h3>
                        <p className="text-[15px] leading-[17px] font-normal text-darkColor mb-2">
                          IMEI 012345678901234
                        </p>
                        <p className="text-base leading-[19px] text-greyColor ">
                          -10 000 ??????
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
                  ???????????????? ?? ??????????????
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
export default Slug;
