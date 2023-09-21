import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Appliedjobs from "../components/Appliedjobs/Appliedjobs";
import Error from "../components/Error page/Error";
import JobDetails from "../components/Home/JobDetails/JobDetails";


const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/applied',
                element: <Appliedjobs></Appliedjobs>
            },
            {
                path: '/job/:id',
                element: <JobDetails></JobDetails>,
                loader: () => fetch('../Jobs.json')
            }
        ]
    }
]);

export default MainRoute ;