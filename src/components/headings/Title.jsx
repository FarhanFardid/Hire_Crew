const Title = ({ main, sub }) => {
  return (
    <div className="text-center p-5 w-[900px] mx-auto">
      <h2 className="text-2xl md:text-5xl font-semibold  pb-2 md:pb-7">
        {main}
      </h2>
      <h5 className="text-sm md:text-lg font-medium  py-1 md:py-3">
        {sub}
      </h5>
    </div>
  );
};

export default Title;
