import backgroundImage2 from "../../assets/Images/Background image 2.svg";
import icon8 from "../../assets/Icons/Icon 8.svg";
import icon9 from "../../assets/Icons/Icon 9.svg";
import icon10 from "../../assets/Icons/Icon 10.svg";
const Contact = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-6 md:py-24">
      <div className="hero-content flex flex-col md:flex-row items-center justify-center">
        <div
          className="flex-1 max-w-96 bg-cover bg-no-repeat bg-center p-10"
          style={{ backgroundImage: `url(${backgroundImage2})` }}
        >
          <div className="flex flex-col text-white gap-2 md:gap-4 p-3 md:p-7 w-80 md:w-96">
            <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
              Contact Us
            </h2>
            <p className="text-xs md:text-sm text-center md:text-left">
              Say Something to start a live chat
            </p>
            {/* Company Location */}
            <div className="flex justify-start items-center gap-3 md:gap-4">
              <div className="bg-blue-700 md:w-16 md:h-12 p-2 md:p-3 rounded-md">
                <img src={icon8} alt="icon" className="md:w-10 md:h-7" />
              </div>
              <div className="flex flex-col gap-1 font-medium mt-4">
                <h3 className="text-base md:text-lg">Company Location</h3>
                <p className="text-xs">
                  Bucureşti Sectorul 1, Strada ING. ZABLOVSCHI, Nr. 10, BIROUL 1
                </p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex justify-start items-center gap-3 md:gap-4">
              <div className="bg-blue-700 md:w-14 md:h-12 p-2 md:p-3 rounded-md">
                <img src={icon9} alt="icon" className="md:w-9 md:h-7" />
              </div>
              <div className="flex flex-col gap-1 font-medium mt-4">
                <h3 className="text-base md:text-lg">Phone Number</h3>
                <p className="text-xs">+(40) 7372 28622</p>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex justify-start items-center gap-3 md:gap-4">
              <div className="bg-blue-700 md:w-14 md:h-12 p-2 md:p-3 rounded-md">
                <img src={icon10} alt="icon" className="md:w-9 md:h-7" />
              </div>
              <div className="flex flex-col gap-1 font-medium mt-4">
                <h3 className="text-base md:text-lg">Email Address</h3>
                <p className="text-xs">career@hireandfire.eu</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-8 p-4 md:p-8">
            <form className="max-w-xl mx-auto space-y-4">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="First name"
                required
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="email"
                placeholder="Email"
                required
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="number"
                placeholder="Phone Number"
                required
              />
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Write Your message"
                rows="4"
                required
              ></textarea>
              <button className="block rounded-md h-7 w-24 md:h-12 md:w-28 text-white bg-blue-800 mt-6 font-medium mx-auto md:mx-0 md:text-base  text-xs ">
                Send Message
              </button>
            </form>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Contact;
