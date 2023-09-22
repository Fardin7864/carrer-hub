import { useEffect, useState } from "react";
import CommonBanner from "../CommonBanner/CommonBanner";
import { getFromLocalStorage } from "../LocalStorage/SetandGet";
import Job from "./Job";

const Appliedjobs = () => {
  const [jobs, setJobs] = useState([]);
  const [jobtoLS, setJobtoLS] = useState([]);
  const [displayjobs, setDisplayjobs] = useState([]);
  useEffect(() => {
    fetch("Jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  useEffect(() => {
    const jobFromLStorage = getFromLocalStorage();
    // Filter jobs based on IDs from local storage
    if (jobFromLStorage.length > 0) {
      const jobtoDisplay = jobs.filter((job) =>
        jobFromLStorage.includes(job.id)
      );
      setJobtoLS(jobtoDisplay);
      setDisplayjobs(jobtoDisplay);
    }
  }, [jobs]);



  const remote = jobtoLS.filter(job=> job.remote_or_onsite === "Remote")
  const onSite = jobtoLS.filter(job=> job.remote_or_onsite === "Onsite")
  const handleFilter = (filterText) => { 
    if (filterText === 'all') {
        setDisplayjobs(jobtoLS);
    }
    else if (filterText === 'remote') {
        setDisplayjobs(remote)
    }else if (filterText === 'onsite') {
        setDisplayjobs(onSite)
    }
  }

  return (
    <>
      <CommonBanner>Applied Jobs</CommonBanner>
      <div className="flex flex-col justify-center items-center my-28 gap-10">
        <div className=" flex justify-end w-4/5 mr-14">
          <details className="dropdown mb-0">
            <summary className="m-1 btn">Filter</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={() => handleFilter('all')} className="hover:bg-slate-300 p-3 rounded-lg">
                All
              </li>
              <li onClick={() => handleFilter('remote')} className="hover:bg-slate-300 p-3 rounded-lg">
                Remote
              </li>
              <li onClick={() => handleFilter('onsite')} className="hover:bg-slate-300 p-3 rounded-lg">
                On Site
              </li>
            </ul>
          </details>
        </div>
        {displayjobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </>
  );
};

export default Appliedjobs;
