import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { alertService } from "../../../services";
import {
  CodeBracketSquareIcon,
  ArrowRightIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import useAuth from "../../../contexts/Auth";

function UpdateProfile() {
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { updateEmail } = useAuth();
  const navigate = useNavigate();

  const handlePasswordVisibleBtnClick = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!(password && newEmail && confirmEmail)) {
      return alertService.warn("all fields are mandatory");
    }

    if (newEmail !== confirmEmail) {
      return alertService.warn("email is not matching");
    }
    console.log(password,newEmail, confirmEmail);
    updateEmail(password, confirmEmail);
    // todo
    navigate("/home");
  };

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <CodeBracketSquareIcon className="w-14 h-14" />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Update Email
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Want to go home?{" "}
            <Link
              to="/home"
              title="create account"
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Go Home
            </Link>
          </p>
          <form onSubmit={handleOnSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="password"
                  className="text-base font-medium text-gray-900"
                >
                  Current user password
                </label>
                <div className="mt-2 relative">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    placeholder="current user password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></input>
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-600"
                    onClick={handlePasswordVisibleBtnClick}
                  >
                    {isPasswordVisible ? (
                      <EyeIcon className="w-6 h-6" />
                    ) : (
                      <EyeSlashIcon className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label
                  htmlFor="newEmail"
                  className="text-base font-medium text-gray-900"
                >
                  New Email
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    id="newEmail"
                    placeholder="New email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    required
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirmEmail"
                  className="text-base font-medium text-gray-900"
                >
                  Confirm Email
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    id="confirmEmail"
                    placeholder="confirm email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    required
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Delete me from Database
                  <ArrowRightIcon className="ml-2 h-6 w-6" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default UpdateProfile;
