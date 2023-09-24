import type { NextPage } from "next";
import Link from "next/link";
interface LoginProps {
  signIn: (method: string) => void;
}
const Login: NextPage<LoginProps> = ({ signIn }) => {
  return (
    <main className="flex min-h-screen ">
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-lg lg:w-[50vw]">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-3 pr-8 border-r">
                <Link className="bg-red-500 rounded-md" href="/">
                  <svg
                    className="h-8 w-10 mt-1"
                    viewBox="0 0 191 376.25"
                    x="0px"
                    y="0px"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <g>
                      <circle cx="78" cy="11" r="11" />
                      <circle cx="113" cy="11" r="11" />
                      <path
                        fill="#000000"
                        d="M54 27l83 0c30,0 54,26 54,57l0 107c0,25 -15,46 -37,53l21 57 -15 0 -10 -27 -108 0 -10 27 -16 0 21 -57c-22,-7 -37,-28 -37,-53l0 -107c0,-31 24,-57 54,-57zm90 232l-4 -12 -89 0 -4 12 97 0zm-76 -219l55 0c3,0 5,2 5,4l0 8c0,3 -2,5 -5,5l-55 0c-2,0 -5,-2 -5,-5l0 -8c0,-2 3,-4 5,-4zm82 146c-7,0 -12,5 -12,12 0,7 5,13 12,13 6,0 12,-6 12,-13 0,-7 -6,-12 -12,-12zm-109 0c7,0 12,5 12,12 0,7 -5,13 -12,13 -6,0 -12,-6 -12,-13 0,-7 6,-12 12,-12zm1 -113l107 0c12,0 21,10 21,23l0 34c0,13 -9,23 -21,23l-107 0c-12,0 -21,-10 -21,-23l0 -34c0,-13 9,-23 21,-23z"
                      />
                    </g>
                  </svg>
                </Link>

                <h1 className="text-xl font-medium  text-gray-900">
                  transit
                  <span className="font-bold">pal</span>
                </h1>
              
              </div>
              <div>

            
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 pl-8 text-center">
                Sign in to your account
              </h2>  </div>
           
            </div>

            <div className="mt-10">
            

              <div className="mt-10">
          

                <div className="mt-6 grid gap-3 px-8">
                  <button
                    onClick={() => signIn("google")}
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-red-500 px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                  >
                    <svg
                      className="h-5 w-5"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 50 50"
                    >
                      <path
                        fill="currentColor"
                        d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"
                      ></path>
                    </svg>
                    <span className="text-sm font-semibold leading-6">
                      Google
                    </span>
                  </button>

                  <button
                    onClick={() => signIn("github")}
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                  >
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-semibold leading-6">
                      GitHub
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1556624651-1f527cdf6508?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};
export default Login;
