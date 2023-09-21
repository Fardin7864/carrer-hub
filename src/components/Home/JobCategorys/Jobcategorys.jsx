import { useEffect, useState } from "react";
import JobCategory from "./JobCategory";

const Jobcategorys = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() => { 
        fetch('Categorys.json')
        .then(res => res.json())
        .then(data => setCategorys(data))
     },[])
    //  console.log(categorys)
    return (
        <div className="flex flex-col items-center mt-20">
            <h3 className="text-5xl font-extrabold text-[#1A1919] mb-4">Job Category List</h3>
            <p className="text-[#757575] text-base font-medium leading-6 pb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex gap-6">
                {
                    categorys.map((category, idx) => <JobCategory
                    key={idx}
                    category={category}
                    ></JobCategory>)
                }
            </div>
        </div>
    );
};

export default Jobcategorys;