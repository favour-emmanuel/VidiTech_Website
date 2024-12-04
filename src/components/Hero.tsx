const Hero = () => {
  return (
    <div className="w-full px-8 lg:px-20 lg:py-12 py-6 my-10 flex flex-col lg:flex-row">
      <div className="w-full max-w-[40rem]">
        <h1 className="font-extrabold  text-[#0d0d0d] text-3xl lg:text-5xl">
          Empowering Your Business with{" "}
          <span className="text-appPurple"> Cutting-Edge</span> Digital
          Solutions
        </h1>
        <p className="my-5 w-full max-w-[28rem]">
          Empowering your business with expert freelance talent, ensuring
          secure, seamless, and affordable digital solutions.
        </p>
        <button className="my-2 w-full text-base max-w-[10rem] bg-appPurple text-appWhite py-3 px-2 rounded-md">
          Get Started
        </button>
      </div>

      <div></div>
    </div>
  );
};

export default Hero;
