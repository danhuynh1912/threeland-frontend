import Image from "next/image";
import React from "react";

import WhyUs1 from "@/assets/images/why-us/why-us1.jpg";

const Index = () => {
  return (
    <div>
      <section className="min-[900px]:block relative py-[clamp(2rem,6vw,2rem)] px-[24px] sm:px-[50px] lg:px-[100px]">
        <div className="absolute 2xl:h-[30%] lg:h-[50%] h-[50%] bg-[rgba(0,102,179,1)] bottom-0 left-0 right-0 top-0"></div>
        <div className="block relative py-[clamp(2rem,6vw,1rem)] text-[#fff] sm:px-[50px] lg:px-[100px]">
          <div className="pr-[50px] pl-[24px] sm:pl-[20px] lg:pl-[200px] xl:pl-[300px] 2xl:pl-[400px]">
            <div className="text-[56px] font-medium py-1 min-[1360px]">
              Why travel with threeland
            </div>
            <div className="text-[20px] leading-[32px]">
              When it comes to providing extraordinary travel experiences in
              Indochina, we are the experts. With dedicated in-destination teams
              and local offices in each country together with nearly 2 decades
              of experience, we pride ourselves as one of the most trusted and
              exciting DMCs in Indochina and Myanmar.
            </div>
          </div>
        </div>
        <div className="shadow-lg block min-[900px]:flex gap-8 bg-white relative z-10 max-w-[1434px] mx-auto px-[2.5rem] py-[3rem]">
          <Image
            src={WhyUs1}
            alt="who-we-are"
            className="flex-1 w-[100%] max-w-[640px] min-w-[380px] object-cover"
          />
          <div className="max-w-[764px] flex-1">
            <p className="text-[clamp(80px,8vw,155px)] font-semibold leading-[107.24px] text-[#ECF1FE] pt-[80px] pb-[40px]">
              01
            </p>
            <h3 className="text-[clamp(26px,3vw,40px)] min-[1360px]:text-[48px] font-bold pr-[100px]">
              Responsiveness and cost-effectiveness
            </h3>
            <p className="flex text-[18px] text-[#394445] leading-[40px] mt-6 justify-around">
              Understanding that your time is precious, our policy allows all
              inquiries to be responded within 24 hours. Threeland team is
              committed to provide clients timely support for any issues either
              pre, during or post travel. Our excellent consultancy will help
              you plan the most effective and effcient travel and services on
              the ground are on offer 24/7. We also keep you updated with the
              latest updates and appealing promotions so that you can be always
              well-informed with any related travel information while making the
              most of your budget.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
