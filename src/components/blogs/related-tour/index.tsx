"use client";
import { useRef } from "react";
import Slider from "react-slick";
import { relatedTourList } from "../const";

import Locate from "@/svg/locate";
import Clock from "@/svg/clockSvg";
import Star from "@/svg/star";
import ArrowLeft from "@/svg/arrow_left";
import ArrowRight from "@/svg/arrow_right";
import SeeMore from "@/svg/seeMore";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

const Index = (props: any) => {
  const { width } = props;
  const slider = useRef(null);

  const genAmount = () => {
    return 4;
  };

  const settingsCustomerReview = {
    infinite: true,
    speed: 500,
    slidesToShow:
      width > 3800
        ? 6
        : width > 3000 && width <= 3800
        ? 5
        : width <= 3000 && width > 1700
        ? 4
        : width <= 1700 && width > 1000
        ? 3
        : width <= 1000 && width > 600
        ? 2
        : 1,
    slidesToScroll: 1,
  };

  const handleClickPrev = () => {
    // @ts-ignore
    slider?.current?.slickPrev();
  };

  const handleClickNext = () => {
    // @ts-ignore
    slider?.current?.slickNext();
  };

  return (
    <div className="px-[100px] relative">
      <p className="text-[48px] font-bold">Related Tour</p>
      <div>
        <div className="absolute left-[70px] h-full flex justify-center flex-col mb-20">
          <div
            onClick={handleClickPrev}
            className="px-4 py-4 border-[2px] border-[#F3F3F3] bg-[#fff] z-50 rounded-[30px] cursor-pointer"
          >
            <ArrowLeft />
          </div>
        </div>
        <div
          onClick={handleClickNext}
          className="absolute right-[70px] h-full flex justify-center flex-col mb-20"
        >
          <div className="px-4 py-4 border-[2px] border-[#F3F3F3] bg-[#fff] z-50 rounded-[30px] cursor-pointer">
            <ArrowRight />
          </div>
        </div>
        <Slider
          className="mt-[2rem] mb-20 relative gap-2"
          ref={slider}
          {...settingsCustomerReview}
        >
          {relatedTourList.map((item, index) => (
            <div key={index} className="p-3">
              <div className="relative rounded-[24px] bg-[#F7F7F7] h-full p-7 pb-5 overflow-hidden">
                <h5 className="text-[#1E1E1E] text-[22px] leading-[32px] font-medium">
                  {item.name}
                </h5>
                <div className="flex gap-2 items-start mt-2">
                  <Locate />
                  <p className="font-light text-[#6A7373] text-[12px] 2xl:text-[16px]">
                    {item.locate}
                  </p>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="flex items-center gap-2 w-fit">
                    <Clock />
                    <p className="font-light text-[12px] 2xl:text-[16px]">
                      {item.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star />
                    <p className="font-light text-[12px] 2xl:text-[16px]">
                      {item.evaluation} ({item.reviewAmount} reviews)
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 my-3">
                  <p className="flex gap-2 items-center">
                    <span className="text-[26px] 2xl:text-[36px] font-medium">
                      {item.currency} {item.price}
                    </span>
                    <span className="line-through 2xl:text-[18px] font-extralight mt-1">
                      {item.currency}
                      {item.originPrice}/d
                    </span>
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={item?.image}
                    alt="see-more"
                    className={"object-cover h-[240px] rounded-[8px]"}
                  />
                </div>
                <div className="absolute bottom-0 w-full flex justify-center pr-[60px]">
                  <div className="p-2 bg-[#F7F7F7] rounded-[40px]">
                    <SeeMore />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Index;
