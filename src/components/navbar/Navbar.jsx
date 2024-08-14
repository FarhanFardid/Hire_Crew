import logo from "../../assets/Icons/Logo.svg";
import countryImg from "../../assets/Icons/Country Icon.svg";
import icon1 from "../../assets/Icons/Icon 1.svg";
const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-col md:flex-row  items-center justify-between mx-auto p-4">
          <div className="flex items-center justify-center">
            <img src={logo} className="h-14" alt="logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ps-2">
              Hire Crew
            </span>
          </div>
          <div className="flex items-center justify-center order-1 md:order-2">
            <img
              className="w-8 h-8 rounded-full"
              src={countryImg}
              alt="country flag Image"
            />
            <button type="button">
              <img src={icon1} alt="icon1" className="mt-5" />
            </button>
          </div>
          <div className="items-center justify-between  w-full md:flex md:w-auto order-2 md:order-1">
            <ul className="flex flex-col justify-center items-center font-semibold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8  md:flex-row md:mt-0 md:border-0 bg-white text-black">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 hover:text-blue-700 "
                >
                  About Us
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 hover:text-blue-700 "
                  >
                    Employers
                  </a>
                  <img src={icon1} alt="icon1" className="mt-2" />
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 hover:text-blue-700"
                  >
                    Find Worker
                  </a>
                  <img src={icon1} alt="icon1" className="mt-2" />
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0  text-red-500 hover:text-blue-700"
                >
                  Industry
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 hover:text-blue-700"
                  >
                    Resources
                  </a>
                  <img src={icon1} alt="icon1" className="mt-2" />
                </div>
              </li>
              <li>
                <button
                  href="#"
                  className="block md:p-0 rounded-md h-12 w-32 text-white bg-blue-900"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
