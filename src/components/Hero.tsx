import assets from "../../public/assets/images";
import { projectCountData } from "../data/data";

const Hero = () => {
  return (
    <>
      <div className="w-full px-8 lg:px-16  lg:py-10 py-6 mt-10 flex lg:gap-x-10 gap-y-12 flex-col lg:flex-row">
        <div className="w-full max-w-[44rem]">
          <h1 className="font-extrabold  text-[#0d0d0d] text-4xl lg:text-6xl">
            Empowering Your Business with{" "}
            <span className="text-appPurple"> Cutting-Edge</span> Digital
            Solutions
          </h1>
          <p className="my-7 w-full text-base md:text-lg max-w-[32rem]">
            Empowering your business with expert freelance talent, ensuring
            secure, seamless, and affordable digital solutions.
          </p>
          <button className="my-1 w-full text-base max-w-[10rem] bg-appPurple text-appWhite py-3 px-2 rounded-md">
            Get Started
          </button>
        </div>

        <div className="lg:max-w-[33rem]">
          <img src={assets.heroImg} alt="hero image" className="object-cover" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#0A0557] to-[#0B075E]  lg:py-8 py-4 px-20 flex  justify-around items-center">
        {projectCountData.map((data, index) => (
          <div key={index} className="relative">
            <div
              className={`flex flex-wrap flex-col justify-center ${
                index === 1 ? "text-[#fb2ec4]" : "text-appWhite"
              }`}
            >
              <h3 className="font-extrabold lg:text-4xl text-[26px]">
                {data.nom}
              </h3>
              <p className="text-base font-semibold my-2 w-full">{data.desc}</p>
              {index < projectCountData.length - 1 && (
                <span className="absolute right-[-7.8rem] top-1/2 h-20 w-px bg-gray-300 transform -translate-y-1/2"></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
