import { Link } from "react-router-dom";
import {BiCurrentLocation} from 'react-icons/bi'
import{AiOutlineDollar} from 'react-icons/ai'

const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,salary,job_type} = job;
    return (
        <div className="rounded-lg border border-[#E8E8E8] pl-10 py-10 pr-36">
            <div className="w-28 h-10"><img src={logo} alt="" /></div>
            <h4 className="text-[#474747] text-xl font-extrabold">{job_title}</h4>
            <p className="text-[#A3A3A3] text-base font-medium leading-6">{company_name}</p>
            <div className="flex gap-4 py-4">
                <button className="border border-[#7E90FE] rounded py-2 px-5 text-[#7E90FE]"><Link>{remote_or_onsite}</Link></button>
                <button className="border border-[#7E90FE] rounded py-2 px-5 text-[#7E90FE]"><Link>{job_type}</Link></button>
            </div>
            <div className="flex gap-6">
                <p className="text-[#A3A3A3] text-base font-medium leading-6 flex items-center gap-2"><BiCurrentLocation></BiCurrentLocation>{location}</p>
                <p className="text-[#A3A3A3] text-base font-medium leading-6 flex items-center gap-2"><AiOutlineDollar></AiOutlineDollar> {salary}</p>
            </div>
            <Link to={`/job/${id}`}>
            <button className="mt-6 py-3 px-4 rounded bg-gradient-to-b from-[#7E90FE] to-[#9873FF] text-white font-bold text-xl">View Details</button>
            </Link>
        </div>
    );
};

export default Job;