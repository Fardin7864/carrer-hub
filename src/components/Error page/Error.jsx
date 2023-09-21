import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center mt-56">
      <h1 className="text-3xl font-bold">Ooops!!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="btn-warning text-white text-xl p-3 rounded-lg">
        <Link to="/">Go to Home</Link>
      </button>
    </div>
  );
};

export default Error;
