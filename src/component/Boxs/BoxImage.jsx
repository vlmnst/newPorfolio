
function BoxImage({ image, text }) {
  return (
    <div className={`flex justify-center items-center  mt-5`}>
      <div className={`flex flex-col justify-center items-center`}>
        <div className="w-7/12 md:w-9/12  lg:w-8/12 ">
          <img src={image} alt="image" className="" />
        </div>
        <div className="p-5">
          <span className="text-white font-semibold md:hidden ">{text}</span>
        </div>
      </div>
    </div>
  );
}

export default BoxImage;
