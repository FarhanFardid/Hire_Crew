import image1 from "../../assets/Images/Image 1.svg";

const Banner = () => {
  return (
    <div className="container-fluid hero md:p-32">
      <div className="hero-content flex flex-col md:flex-row-reverse items-center justify-center gap-16">
        <img src={image1} className="rounded-lg  flex-1 p-1" />
        <div className="flex-1">
          <h1 className="text-2xl md:text-5xl font-semibold text-left">
            Your Partner in international Construction Recruitment
          </h1>
          <div className="pt-8 ">
            {" "}
            <p className="text-sm md:text-base text-black font-medium">
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

          <button className="block md:p-0 rounded-md h-7 w-20 md:h-10 md:w-28 text-white bg-blue-900 mt-5 ">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
