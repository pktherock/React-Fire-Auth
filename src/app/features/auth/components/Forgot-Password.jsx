import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../../contexts/Auth";
import { alertService, authService } from "../../../services";
import {
  CodeBracketSquareIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const { user } = useAuth();

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      return alertService.warn("email is mandatory");
    }
    // console.log(email)

    try {
      await authService.sendResetPasswordLink(email);
      alertService.success("Password reset link sended to email id");
      navigate("/auth/login");
    } catch (error) {
      alertService.error(error.code);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <CodeBracketSquareIcon className="w-14 h-14" />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Forgot Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              title="create account"
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          <form onSubmit={handleOnSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Send Reset Password Link{" "}
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

export default ForgotPassword;
