
const JobCategory = ({category}) => {
    const {availability, category_name, logo} = category;
    return (
        <div className="w-80 h-56 rounded-lg bg-gradient-to-b from-purple-50 via-purple-773bff to-purple-50">
           <div className="pt-14 pl-10">
            <img src={logo} alt=""/>
           </div>
            <div className="mt-8 ml-10">
            <h3 className="text-[#474747] text-xl font-extrabold">{category_name}</h3>
            <p className="text-[#A3A3A3] text-base font-medium leading-6">{availability}</p>
            </div>
        </div>
    );
};

export default JobCategory;