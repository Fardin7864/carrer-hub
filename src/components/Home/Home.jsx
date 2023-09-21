import Featuresjob from "./FeaturesJob/Featuresjob";
import Homebanner from "./Homebabnner/Homebanner";
import Jobcategorys from "./JobCategorys/Jobcategorys";

const Home = () => {
    return (
        <div className="mb-8">
            <Homebanner></Homebanner>
            <Jobcategorys></Jobcategorys>
            <Featuresjob></Featuresjob>
        </div>
    );
};

export default Home;