/* eslint-disable react/prop-types */

import { useState } from 'react';

/* eslint-disable jsx-a11y/anchor-is-valid */
type AskType = {
  category: 'drink' | 'food';
};

const Ask: React.FC<AskType> = ({ category }) => (
  <li className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
    {category === 'drink' ? <i className="bi bi-cup-hot  mr-2" /> : null}
    {category === 'food' ? <i className="bi bi-egg-fried  mr-2" /> : null}
    <span>Hamburguer Completo</span>
  </li>
);

const KitchenAsks = () => {
  const [state, setState] = useState(false);

  const handleHover = () => setState(!state);

  return (
    <div>
      <button
        onClick={handleHover}
        id="dropdownTopButton"
        data-dropdown-toggle="dropdownTop"
        data-dropdown-placement="top"
        className="mr-3 mb-3 md:mb-0 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center fixed bottom-5 right-5"
        type="button"
      >
        Pedidos Na Cozinha
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`${
          state ? 'visible h-96' : 'invisible h-0'
        } fixed bottom-16 w-72 right-8 transition-all duration-500 z-10 overflow-y-auto bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700`}
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownTopButton"
        >
          <Ask category="drink" />
          <Ask category="food" />
          <Ask category="drink" />
          <Ask category="food" />
          <Ask category="drink" />
          <Ask category="food" />
        </ul>
      </div>
    </div>
  );
};

export default KitchenAsks;
