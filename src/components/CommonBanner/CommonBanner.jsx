import Banner from "../../assets/images/bg1.png";
import Banner2 from "../../assets/images/bg2.png";
const CommonBanner = ({children}) => {
    return (
        <>
                  {/* Banner Section */}
      <div className=" pt-32 bg-gradient-to-b from-purple-50 via-purple-773bff to-purple-50 ">
        <div>
          <div className="">
            <img src={Banner} alt="" />
          </div>
          <div className="absolute top-0 right-4">
            <img src={Banner2} alt="" />
          </div>
          <h1 className="text-[#1A1919] text-3xl font-extrabold absolute top-40 right-1/2">
            {children}
          </h1>
        </div>
      </div>
        </>
    );
};

export default CommonBanner;