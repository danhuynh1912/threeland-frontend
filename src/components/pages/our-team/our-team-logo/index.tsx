import Image from "next/image";

import Ourteam1 from "@/assets/images/ourteam/ourteam1.jpg";
import Ourteam2 from "@/assets/images/ourteam/ourteam2.jpg";
import Ourteam3 from "@/assets/images/ourteam/ourteam3.jpg";
import Ourteam4 from "@/assets/images/ourteam/ourteam4.jpg";
import Ourteam5 from "@/assets/images/ourteam/ourteam5.jpg";
import Ourteam6 from "@/assets/images/ourteam/ourteam6.jpg";
import Ourteam7 from "@/assets/images/ourteam/ourteam7.jpg";
import BannerOurteam from "@/assets/images/ourteam/BannerOurteam.png";

const responsiveWithHeight = "2xl:w-[100%] 2xl:h-[100%] xl:w-[100%] xl:h-[100%] lg:w-[100%] lg:h-[100%] md:w-[70%] md:h-[70%] w-[30%] h-[30%]";

const Index = () => {
  return (
    <section className="flex justify-center relative py-[clamp(2rem,6vw,2rem)] 2xl:mx-[400px] xl:mx-[200px] lg:mx-[100px] md:mx-[50px] mx-[20px]">
      {/* <div className="">
        <div className="flex">
          <div className="pt-20">
            <div>
              <p className="font-semibold 2xl:text-[48px] xl:text-[48px] lg:text-[36px] text-[18px] text-[#0066B3] text-end">
                Our Team
              </p>
              <p className="2xl:text-[89px] xl:text-[89px] lg:text-[66px] text-[33px] font-bold text-[#FD9C0B] text-end">
                ThreeLand
              </p>
            </div>
            <div className="flex">
              <Image
                src={Ourteam1}
                alt="who-we-are"
                className={`object-cover max-w-[324px] max-h-[224px] ${responsiveWithHeight} self-end p-[2px] rounded-[16px]`}
              />
              <Image
                src={Ourteam2}
                alt="who-we-are"
                className={`object-cover max-w-[272px] max-h-[272px] ${responsiveWithHeight} p-[2px] rounded-[16px]`}
              />
            </div>
          </div>
          <div>
            <div>
              <div className="w-[88px] h-[88px] bg-[#02D4D4] rounded-[8px]" />
              <div className="flex justify-end">
                <div className="w-[88px] flex justify-end">
                  <div className="flex justify-center border-[2px] w-[46px] h-[46px] border-[#00D0C4] rounded-[4px] my-[26px]">
                    <div className="flex justify-center border-[2px] self-center w-[35px] h-[35px] border-[#00D0C4] rounded-[4px]">
                      <div className="border-[2px] self-center w-[25px] h-[25px] border-[#00D0C4] rounded-[4px]" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex self-center px-3">
                  <div className="w-[60px] h-[60px] bg-[#FD9C0B] rounded-[8px]"></div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={Ourteam3}
                alt="who-we-are"
                className="object-cover w-[553px] h-[369px] p-[2px] rounded-[16px]"
              />
            </div>
          </div>
        </div>
        <div className="flex p-1">
          <div className="flex ml-[130px] justify-end">
            <div>
              <div className="flex">
                <div className="flex">
                  <div className="flex justify-center border-[2px] w-[46px] h-[46px] border-[#FD9C0B] rounded-[4px] my-[5px]">
                    <div className="flex justify-center border-[2px] self-center w-[35px] h-[35px] border-[#FD9C0B] rounded-[4px]">
                      <div className="border-[2px] self-center w-[25px] h-[25px] border-[#FD9C0B] rounded-[4px]" />
                    </div>
                  </div>
                </div>
                <div className="max-w-[107px] w-[107px] h-[107px] w-[100%] bg-[#02D4D4] rounded-[16px] mx-2" />
                <Image
                  src={Ourteam4}
                  alt="who-we-are"
                  className="object-cover w-[175px] h-[175px] p-[2px] rounded-[16px]"
                />
              </div>
              <div className="flex justify-end ">
                <Image
                  src={Ourteam5}
                  alt="who-we-are"
                  className="object-cover w-[238px] h-[238px] p-[2px] rounded-[16px]"
                />
              </div>
            </div>
          </div>
          <div className="flex px-1">
            <div>
              <Image
                src={Ourteam6}
                alt="who-we-are"
                className="object-cover w-[255px] h-[255px] p-[2px] rounded-[16px]"
              />
              <div className="flex justify-between">
                <div className="w-[79px] h-[79px] bg-[#FD9C0B] rounded-[8px]" />
                <div className="w-[67px] h-[67px] bg-[#02D4D4] rounded-[8px]" />
              </div>
            </div>
            <div>
              <Image
                src={Ourteam7}
                alt="who-we-are"
                className="object-cover w-[286px] h-[286px] p-[2px] rounded-[16px]"
              />
              <div className="w-[43px] h-[46px] bg-[#FD9C0B] rounded-[8px] m-[5px]" />
            </div>
          </div>
        </div>
      </div>
      
      */}
      <Image
        src={BannerOurteam}
        alt="who-we-are"
        className="object-cover w-[1156px] h-[950px]"
      />

    </section>
  );
};

export default Index;
