import logo from "../../assets/Icons/Logo.svg";
import icon3 from "../../assets/Icons/Icon 11.svg";
const Footer = () => {
  const quickLinks = [
    "Home",
    "About Us",
    "Services",
    "Industries We Serve",
    "Blog & News",
    "FAQ",
    "Contact Us",
  ];
  const servicesLink = [
    "Permanent Recruitment",
    "Contract Staffing",
    "Housing & Accomodation Support",
    "Compliance and Legal Support",
    "Workforce Planning",
    "Background Checks",
    "Onboarding Support",
  ];
  return (
    <div>
      <footer className="text-white bg-blue-900">
        <div className="mx-auto w-full max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 items-start mx-auto py-5 md:py-7 gap-14">
            <div className="md:col-span-4">
              <div className="flex flex-col justify-center  pt-4">
                <div className="py-4">
                  <img
                    src={logo}
                    className="h-16 md:h-24 mr-4 rounded-md mx-auto md:mx-0"
                    alt="Logo"
                  />
                </div>
                <div className="flex flex-col justify-center font-medium">
                  <p className="text-center md:text-left">
                    Hire & Fire is a cutting-edge job website designed to
                    connect employers with top-tier talent across various
                    industries. Utilizing advanced matching algorithms, it
                    streamlines the hiring process, ensuring quick and effective
                    placements. Employers benefit from efficient tools for
                    posting jobs, screening candidates, and managing
                    applications. Ideal for businesses aiming for growth, Hire &
                    Fire is your go-to resource for all recruitment needs.
                    Please note that it operates on an employer basis and does
                    not provide jobs directly to workers.
                  </p>
                  <button className="block rounded-md h-10 w-24 md:h-12 md:w-28 text-white bg-[#e01133fc] mt-6 font-medium mx-auto md:mx-0 text-sm md:text-base">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 pt-7">
              <h2 className="mb-4 md:mb-6 text-lg md:text-2xl font-medium">
                Quick Links
              </h2>
              <hr className="w-[130px] -mt-5" />
              <ul className="font-medium text-lg text-[#AAA7B1]">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <div className="flex items-center text-white pt-3">
                      <img
                        src={icon3}
                        alt="icon"
                        className="pe-2 md:pe-1 w-6"
                      />
                      <a href="" className="block py-2 ">
                        {link}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 pt-7">
              <h2 className="mb-4 md:mb-6 text-lg md:text-2xl font-medium">
                Our Services
              </h2>
              <hr className="w-[145px] -mt-5" />
              <ul className="font-medium text-lg text-[#AAA7B1]">
                {servicesLink.map((link) => (
                  <li key={link}>
                    <div className="flex items-center text-white pt-3">
                      <img
                        src={icon3}
                        alt="icon"
                        className="pe-2 md:pe-1 w-6"
                      />
                      <a href="" className="block py-2 ">
                        {link}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 pt-7">
              <h2 className="mb-4 md:mb-6 text-lg md:text-2xl font-medium">
                Get In Touch
              </h2>
              <div className="flex flex-col justify-center font-medium">
                <p className="text-center md:text-left">
                  Subscribe Our Newsletter to Get Latest Update & News
                </p>

                <div className="flex items-center md:w-[380px] justify-center py-5">
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-s-md  md:w-[330px] md:h-[50px] "
                    placeholder="Your Email Here"
                  />
                  <button
                    type="button"
                    className="bg-[#e01133fc] text-white font-bold  text-xs md:text-sm px-3 md:px-7  py-1.5 md:py-4 rounded-md btn-xs "
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="px-2 py-5 md:px-4 md:py-12 text-center md:text-left text-white md:flex md:items-center md:justify-between">
            <span className="text-sm font-bold">
              © Copyright 2024 <a href="">"Hire & Fire"</a> All Rights Reserved.
            </span>
            <div className="flex mt-3 md:mt-4 justify-center  space-x-5 rtl:space-x-reverse">
              <a href="#" className="text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-white">
                Terms & Conditions
              </a>
              <a href="#" className="text-white">
                Cookie Policy
              </a>
            </div>
            <div className="flex mt-3 md:mt-4 justify-center  space-x-5 rtl:space-x-reverse">
              <p>Follow Us</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
