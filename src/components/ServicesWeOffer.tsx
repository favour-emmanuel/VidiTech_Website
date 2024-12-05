import { Icon } from "@iconify/react/dist/iconify.js";
import { serviceOfferData } from "../data/data";

const ServicesWeOffer = () => {
  return (
    <div className="w-full px-8 lg:px-20 py-7 lg:py-14 my-10 lg:my-16 bg-[#07000E] text-appWhite">
      <div className="flex items-center gap-2">
        <h1 className="text-4xl md:text-5xl font-bold">Services We Offer</h1>
        <span className="text-6xl text-[#A234FD]">
          <Icon icon="jam:menu" />
        </span>
      </div>

      <div className="my-10 lg:my-12 grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-6 grid-cols-1 gap-y-7">
        {serviceOfferData.map((data, index) => (
          <div
            key={index}
            className="px-6 py-5 border border-appPurple/10 rounded-xl bg-[#3f334415] backdrop-blur-4xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="max-w-[4rem] my-3">
              <Icon icon={data.image} className="text-4xl text-[#a33af9]" />
            </div>
            <h3 className="text-[22px] font-bold">{data.headline}</h3>
            <p className="text-base font-light mt-2">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesWeOffer;
