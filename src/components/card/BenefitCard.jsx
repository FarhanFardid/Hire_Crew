const BenefitCard = ({ info }) => {
  const { heading, details, icon } = info;
  return (
    <div className="card bg-white md:w-96 shadow-2xl rounded-md">
      <figure className="p-2 md:p-4 ">
        <img src={icon} alt="images" className="rounded-lg mx-auto bg-red-600" />
      </figure>
      <div className="card-body items-center text-center pt-1 md:pt-2">
        <h2 className="card-title text-lg md:text-2xl font-medium">
          {heading}
        </h2>
        <p className="text-black font-medium py-2 px-1 md:py-4 md:px-2  text-xs md:text-base">
          {details}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
