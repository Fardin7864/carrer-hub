import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  AiOutlineDollar,
  AiOutlineAccountBook,
  AiTwotonePhone,
  AiTwotoneMail,
} from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import CommonBanner from "../CommonBanner/CommonBanner";
import { addToLocalStorage } from "../LocalStorage/SetandGet";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    experiences,
    educational_requirements,
    job_responsibility,
    job_description,
    contact_information,
    job_title,
    salary,
  } = job;

  const notify = (e) => {
    e.preventDefault();
    toast('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const handleApply = (e) => {
    notify(e);
    addToLocalStorage(idInt);
  }


  return (
    <>
      <CommonBanner>Job Details</CommonBanner>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      {/* Details */}
      <div className="mt-32 flex justify-center gap-9 mb-20">
        <div className="flex flex-col w-1/2">
          <p>
            <span className="text-lg font-bold">Job Description:</span>{" "}
            {job_description}
          </p>
          <p className="my-8">
            <span className="text-lg font-bold">Job Resposibalitis:</span>
            {job_responsibility}{" "}
          </p>
          <p className="mb-9">
            <span className="text-lg font-bold">Educational Requirements:</span>{" "}
            {educational_requirements}
          </p>
          <p>
            <span className="text-lg font-bold">Experiences:</span>
            {experiences}
          </p>
        </div>
        {/* Apply section */}
        <div>
          <div className="w-96 h-96 rounded-lg bg-gradient-to-b from-purple-50 via-purple-773bff to-purple-50 pt-9 pl-9">
            <div className="border-b-2 pb-4 mb-5">
              <h4 className="text-xl font-bold text-[#1A1919]">Job Detail</h4>
            </div>
            <p className="flex gap-2 items-center">
              <AiOutlineDollar className="text-blue-600"></AiOutlineDollar>
              <span className="text-sm font-bold text-[#1A1919]">
                {" "}
                Salary:{" "}
              </span>
              {salary}
            </p>
            <p className="flex gap-2 items-center">
              <AiOutlineAccountBook className="text-blue-500"></AiOutlineAccountBook>
              <span className="text-sm font-bold text-[#1A1919]">
                Job Title:{" "}
              </span>
              {job_title}
            </p>
            <br />
            <h3 className="text-xl font-bold text-[#1A1919] mb-5">
              Contact Information
            </h3>
            <p className="flex gap-2 items-center">
              <AiTwotonePhone className="text-blue-500"></AiTwotonePhone>
              <span className="text-sm font-bold text-[#1A1919]">Phone:</span>
              {contact_information.phone}
            </p>
            <p className="flex gap-2 items-center">
              <AiTwotoneMail className="text-blue-500"></AiTwotoneMail>
              <span className="text-sm font-bold text-[#1A1919]">Email:</span>
              {contact_information.email}
            </p>
            <p className="flex gap-2 mt-1">
              <FaLocationDot className="text-blue-500"></FaLocationDot>
              <span className="text-sm font-bold text-[#1A1919]">Address:</span>
              {contact_information.address}
            </p>
          </div>
          <div className="w-full">
            <button onClick={handleApply} className=" w-full mt-6 py-3 px-4 rounded-lg bg-gradient-to-b from-[#7E90FE] to-[#9873FF] text-white font-bold text-xl hover:shadow-lg focus:bg-blue-900">
              <Link>Apply Now</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
