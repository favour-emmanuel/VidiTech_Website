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

      <div className="my-5 grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-6 grid-cols-1 gap-y-5">
        {serviceOfferData.map((data, index) => (
          <div
            key={index}
            className="px-6 py-5 border border-white/30 rounded-lg bg-appWhite/5 backdrop-blur-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img src="" alt="" className="w-16 h-16 mb-4 mx-auto" />
            <h1 className="text-lg font-semibold text-center">
              {data.headline}
            </h1>
            <p className="text-sm text-center mt-2">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesWeOffer;
