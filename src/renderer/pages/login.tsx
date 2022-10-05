/* eslint-disable react/button-has-type */

import { useNavigate } from 'react-router-dom';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-zinc-50 w-full h-screen items-center justify-center ">
      <div className="bg-white rounded-lg shadow w-96 h-96 p-10 flex flex-col items-center  gap-6">
        <div>
          <i className="bi bi-shop text-5xl text-orange-700" />
        </div>
        <div>
          <label className="block  text-zinc-800 dark:text-zinc-200">
            User
          </label>
          <input
            type="text"
            className="block w-full px-4 py-2 mt-2 text-zinc-900 bg-white border-zinc-300  border rounded-md dark:bg-black dark:text-zinc-300 dark:border-zinc-600 focus:border-meisy dark:focus:border-meisy-secondary focus:ring-meisy focus:outline-none focus:ring dark:focus:ring-meisy-secondary focus:ring-opacity-40"
          />
        </div>
        <div>
          <label className="block  text-zinc-800 dark:text-zinc-200">
            Password
          </label>
          <input
            type="password"
            className="block w-full px-4 py-2 mt-2 text-zinc-900 bg-white border-zinc-300  border rounded-md dark:bg-black dark:text-zinc-300 dark:border-zinc-600 focus:border-meisy dark:focus:border-meisy-secondary focus:ring-meisy focus:outline-none focus:ring dark:focus:ring-meisy-secondary focus:ring-opacity-40"
          />
        </div>
        <div className="w-full px-3">
          <button
            onClick={() => navigate('/mesas')}
            className="text-white bg-orange-500 w-full hover:bg-orange-600 focus:ring-4 focus:ring-orange-500 rounded-md border-meisy-secondary text-sm font-medium px-5 py-2.5  focus:z-10 "
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
