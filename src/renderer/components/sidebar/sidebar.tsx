/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type ListItemType = {
  icon: string;
  cor: string;
  name: string;
  route: string;
};

const Sidebar = () => {
  const [state, setState] = useState(false);

  const handleSideMenu = () => setState(!state);

  const ListItem: React.FC<ListItemType> = ({ route, cor, icon, name }) => (
    <li>
      <Link
        to={route}
        className="flex items-center text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 "
      >
        <div
          className={`block py-2 px-3 rounded-lg bg-gradient-to-r ${cor} shadow-lg`}
        >
          <i className={`bi bi-${icon} text-white text-2xl`} />
        </div>
        <span
          className={`flex-1 ml-3 text-start font-medium whitespace-nowrap ${
            state ? 'visible' : 'invisible'
          }`}
        >
          {name}
        </span>
      </Link>
    </li>
  );

  return (
    <aside className="" aria-label="Sidebar">
      <div
        className={`z-20 ${
          state ? 'w-64' : 'w-20'
        } transition-all duration-500 fixed top-0 left-0`}
      >
        <div className="h-screen overflow-x-hidden overflow-y-auto py-4 px-3 bg-white dark:bg-gray-800">
          <ul className="space-y-5">
            <li>
              <button
                onClick={handleSideMenu}
                className="flex w-full items-center text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 "
              >
                <div className="block py-2 px-3 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600  shadow-lg">
                  <i className="bi bi-grid text-white text-2xl" />
                </div>
                <span
                  className={`flex-1 ml-3 text-start font-medium whitespace-nowrap ${
                    state ? 'visible' : 'invisible'
                  }`}
                >
                  Menu
                </span>
              </button>
            </li>
            <ListItem
              cor="from-orange-500 to-orange-400"
              icon="house"
              name="Mesas"
              route="/mesas"
            />
            <ListItem
              cor="from-red-500 to-red-400"
              icon="file-earmark-bar-graph"
              name="Relatório"
              route="/relatorio"
            />
            <ListItem
              cor="from-green-500 to-green-400"
              icon="shop"
              name="Cozinha"
              route="/cozinha"
            />
            <ListItem
              cor="from-blue-500 to-blue-400"
              icon="person"
              name="Usuários"
              route="/users"
            />
            <ListItem
              cor="from-teal-500 to-teal-400"
              icon="archive"
              name="Stock"
              route="/stock"
            />
            <ListItem
              cor="from-purple-500 to-purple-400"
              icon="box-arrow-left"
              name="Sair"
              route="/"
            />
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
