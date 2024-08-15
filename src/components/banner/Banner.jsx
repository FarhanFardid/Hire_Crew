import image1 from "../../assets/Images/Image 1.svg";

const Banner = () => {
  return (
    <div className="container-fluid hero p-6 md:p-32">
      <div className="hero-content flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-16">
        <img src={image1} className="rounded-lg  flex-1 p-1" />
        <div className="flex-1">
          <h1 className="text-2xl md:text-5xl font-semibold text-center md:text-left">
            Your Partner in international Construction Recruitment
          </h1>
          <div className="pt-5 md:pt-8 ">
            {" "}
            <p className="text-sm md:text-base text-black font-medium  text-justify md:text-left">
              "Hire & Fire Job's platform for the construction industry connects
              companies with skilled professionals globally. We streamline
              recruitment processes, ensuring precise matches for project
              requirements through our extensive network and industry-specific
              expertise. Our platform offers tailored solutions for construction
              companies, facilitating efficient hiring and workforce management.
              Partner with us to access a pool of qualified talent and optimize
              your construction projects with ease."
            </p>
          </div>

          <button className="block rounded-md h-7 w-24 md:h-10 md:w-28 text-white bg-blue-800 mt-6 font-medium mx-auto md:mx-0 md:text-base  text-xs ">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
