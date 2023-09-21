import { useEffect, useState } from "react";
import Job from "./Job";

const Featuresjob = () => {
    const [jobs, setJobs] = useState([]);
    const [isShowAll, setIsShowAll] = useState(false);
    const handlShowAll = () => { 
        setIsShowAll(true)
     }
    useEffect(() => { 
        fetch('Jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
     },[])
     console.log(jobs)
     let joblist = !isShowAll? jobs.slice(0,4) : jobs;
     
  return (
    <div className="flex flex-col items-center mt-20">
      <h3 className="text-5xl font-extrabold text-[#1A1919] mb-4">
      Featured Jobs
      </h3>
      <p className="text-[#757575] text-base font-medium leading-6 pb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-6">
        {
            joblist.map((job,idx) => <Job
            key={idx}
            job={job}
            ></Job>)
        }
      </div>
      {
        !isShowAll && <button onClick={handlShowAll} className="mt-6 py-3 px-4 rounded-lg bg-gradient-to-b from-[#7E90FE] to-[#9873FF] text-white font-bold text-xl">Show All</button> || ''

      }
    </div>
  );
};

export default Featuresjob;
