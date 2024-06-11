import Image from "next/image";
import React from "react";

import WhyUs1 from "@/assets/images/why-us/why-us1.jpg";
import WhyUs2 from "@/assets/images/why-us/why-us2.jpg";
import WhyUs3 from "@/assets/images/why-us/why-us3.jpg";
import WhyUs4 from "@/assets/images/why-us/why-us4.jpg";

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
        <div className="2xl:mx-[200px] lg:mx-[50px] mx-auto shadow-lg block min-[900px]:flex gap-8 bg-white relative z-10 px-[2.5rem] py-[3rem]">
          <Image
            src={WhyUs1}
            alt="who-we-are"
            className="flex-1 w-[100%] max-w-[640px] min-w-[240px] object-cover"
          />
          <div className="flex-1">
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
              you plan the most effective and efficient travel and services on
              the ground are on offer 24/7. We also keep you updated with the
              latest updates and appealing promotions so that you can be always
              well-informed with any related travel information while making the
              most of your budget.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundImage: `url('/banner_why_us_1.jpg')` }}
        className="min-[900px]:flex block relative py-[clamp(2rem,6vw,2rem)] px-[24px] sm:px-[50px] lg:px-[100px] mt-[50px]"
      >
        <div className="absolute h-[100%] bg-[#171717] opacity-80 bottom-0 left-0 right-0 top-0"></div>
        <p className=" absolute text-[clamp(80px,8vw,155px)] text-opacity-20 font-semibold leading-[107.24px] text-[#ECF1FE] pt-[30px] pb-[40px] z-0">
          02
        </p>
        <div className="flex-1 mb-10 relative pr-10">
          <h3 className="text-[clamp(26px,3vw,40px)] min-[1360px]:text-[64px] font-bold pt-[90px] z-10 text-[#fff]">
            Highly-customized
          </h3>
          <h4 className="text-[clamp(26px,3vw,40px)] min-[1360px]:text-[48px] font-bold text-[#fff] z-10 ">
            services and flexibility
          </h4>
          <p className="flex text-[20px] text-[#FFFFFF] leading-[40px] mt-6 justify-around text-[#fff] z-10 tracking-normal">
            Unlike many other local DMCs offering prearranged packages, we focus
            on customized tours since we thoroughly understand that every client
            has different preferences regarding destination choices, travel
            styles, time limit and budgets. We believe that travel is highly
            personal and that is why we are always meticulous in creating and
            curating each and every itinerary for our clients. We love to amaze
            you with not only our dynamic porfolio of options but also how
            flexible we are in making your travel plan according to your
            requests and changing demands.
          </p>
        </div>
        <Image
          src={WhyUs2}
          alt="who-we-are"
          className="flex-1 max-w-[853px] min-w-[320px] w-[100%] object-cover py-10 z-10"
        />
      </section>

      <section className="min-[900px]:block relative py-[clamp(2rem,6vw,2rem)] px-[24px] sm:px-[50px] lg:px-[100px]">
        <div className="absolute 2xl:h-[40%] lg:h-[50%] h-[50%] bg-[rgba(0,102,179,1)] bottom-0 left-0 right-0 top-0"></div>
        <div className="shadow-lg mt-[100px] block min-[900px]:flex gap-8 bg-white relative z-10 mx-auto">
          <Image
            src={WhyUs3}
            alt="who-we-are"
            className="flex-1 w-[100%] max-w-[851px] min-w-[240px] object-cover"
          />
          <div className="max-w-[1500px] flex-1 mb-10 relative pr-10">
            <div className="min-[900px]:mx-0 mx-10">
              <p className="absolute text-[clamp(80px,8vw,155px)] font-semibold leading-[107.24px] text-[#ecf1fe] pt-[30px] pb-[40px] z-1">
                03
              </p>
              <div className="relative">
                <h3 className="text-[clamp(26px,3vw,40px)] min-[1360px]:text-[48px] font-bold pt-[70px] z-10">
                  Reliability and good reputation
                </h3>
                <p className="flex text-[20px] leading-[40px] mt-6 justify-around">
                  Threeland is working with more than 1,600 agencies worldwide,
                  and our rate of returned clients stands at 25% and increasing.
                  Our high travel liability insurance package of up to USD
                  1,000,000 is known as a safeguard and crucial support during
                  travel. We ensure that each and every tour offered by
                  Threeland has been carefully crafted by our local travel
                  experts with extensive knowledge about destinations and
                  years-proven professionalism towards excellence. We don’t just
                  simply provide you a tour, but a journey that reveal the heart
                  of the destinations.
                </p>
              </div>
            </div>
            <div>
              <p className=" absolute text-[clamp(80px,8vw,155px)] font-semibold leading-[107.24px] text-[#ecf1fe] pt-[30px] pb-[40px] z-1">
                04
              </p>
              <div className="relative min-[900px]:mx-0 mx-10">
                <h3 className="text-[clamp(26px,3vw,40px)] min-[1360px]:text-[48px] font-bold pt-[70px] z-10">
                  Talented and dedicated team
                </h3>
                <p className="flex text-[20px] leading-[40px] mt-6 justify-around">
                  Our people are extremely professional to clients, greatly
                  passionate to travel, and highly adaptable to the
                  ever-changing world of travel. We take each inquiry seriously
                  as a challenge that we have to conquer until clients are
                  satiated. 100% of our staff are local who can read Indochina
                  like their homes and that is why our travel products and
                  services are second to none. Threeland team is also well
                  trained to adapt with cultural sensitivity when working with
                  clients and keep informed with global travel tendencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-[900px]:block relative py-[clamp(2rem,6vw,2rem)] px-[24px] sm:px-[50px] lg:px-[100px]">
        <div className="2xl:mx-[200px] lg:mx-[50px] mx-auto shadow-lg block min-[900px]:flex gap-8 bg-white relative z-10 pl-[2.5rem] pr-[1rem] py-[2rem] border-[0.5px] border-[#ecf1fe] my-20">
          <div className="flex-1">
            <p className="text-[clamp(80px,8vw,155px)] font-semibold leading-[107.24px] text-[#ECF1FE] pt-[80px] pb-[40px]">
              05
            </p>
            <h3 className="text-[clamp(26px,3vw,40px)] min-[1360px]:text-[48px] font-bold pr-[100px]">
              Responsible travel
            </h3>
            <p className="flex text-[18px] text-[#394445] leading-[40px] mt-6 justify-around">
              Responsible travel promotes sustainable development of destination
              by maximizing direct benefits to local communities while
              minimizing negative impacts on environment and local communities.
              We are mindful in every travel plan that we create as we want our
              clients to have meaningful connection with the destinations and
              leave nothing behind but their footprints. We take environmental
              and social welfare seriously as the etho of doing business and
              currently engaging with Travelife to audit our products and
              business operation to enhance our perfomance while increasing
              positive impacts on the communities where we operate in.
            </p>
          </div>
          <Image
            src={WhyUs4}
            alt="who-we-are"
            className="max-w-[662px] min-w-[100px] object-cover w-[100%]"
          />
        </div>
      </section>
    </div>
  );
};

export default Index;
