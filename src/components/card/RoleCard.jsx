import icon from "../../assets/Icons/Icon 3.svg";
const RoleCard = ({ info }) => {
  const { heading, details, img } = info;
  return (
    <div className="card bg-white w-96 shadow-xl rounded-md">
      <figure className="p-3">
        <img src={img} alt="images" className="rounded-lg" />
      </figure>
      <div className="card-body items-center text-center pt-2">
        <h2 className="card-title text-2xl font-medium">{heading}</h2>
        <p className="text-black font-medium p-3">{details}</p>
        <div className="card-actions flex items-center justify-center text-red-600 pb-4">
          <button className="btn text-sm font-medium">Contact Us </button>
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RoleCard;
