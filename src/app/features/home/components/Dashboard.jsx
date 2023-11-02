import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-2xl py-24">
        <div className="inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]"></div>
        <div className="">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            React Fire Auth demo
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            A React app to show implementation of Authentication, Authorization
            and Session management using Firebase and Context API
          </p>
          <div className="mt-3 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Link to="/auth/update-profile">Update Email</Link>
            </button>
            <button
              type="button"
              className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              <Link to="/auth/update-password">Update Password</Link>
            </button>
            <button
              type="button"
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <Link to="/auth/delete-user">Delete me from DB</Link>
            </button>
            <button
              type="button"
              className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              <Link
                to="https://github.com/pktherock/React-Fire-Auth"
                target="_blank"
              >
                View Code on GitHub
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
