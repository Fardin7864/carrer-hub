import { Link } from 'react-router-dom';
import person from '../../../assets/images/user.png'
const Homebanner = () => {
    return (
        <div className='flex items-center justify-evenly bg-gradient-to-b from-purple-50 via-purple-773bff to-purple-50 pt-20'>
            <div className=''>
            <h1 className="text-[#1A1919] text-5xl font-extrabold leading-[120%]">One Step <br /> Closer To Your <br /><span className="bg-gradient-to-b to-[#7E90FE] from-[#9873FF] bg-clip-text text-transparent">Dream job</span></h1>
            <p className="text-lg font-medium leading-7 text-[#757575] mt-6 mb-8">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
            <button className='py-6 px-7 rounded-lg bg-gradient-to-b from-[#7E90FE] to-[#9873FF] text-[#FFF] text-xl font-extrabold'><Link to="/">Get Started</Link></button>
            </div>
            <div className='w-2/5'>
                <img src={person} alt="" />
            </div>
        </div>
    );
};

export default Homebanner;