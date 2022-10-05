/* eslint-disable react/button-has-type */

import { useState } from 'react';
import ConfirmModal from '../confirm-delete/confirm-delete';

/* eslint-disable jsx-a11y/label-has-associated-control */
const User = () => {
  const [state, setState] = useState(false);

  const handleOpen = () => setState(true);

  return (
    <>
      <div className="grid grid-cols-4 w-full my-2 p-3 rounded-lg shadow bg-white">
        <span>ID</span>
        <span>Keven Gonçalves</span>
        <span>Cargo</span>
        <div className="flex gap-4 flex-row-reverse">
          <button
            onClick={handleOpen}
            className="w-8 h-8 text-red-500 rounded-full flex items-center justify-center"
          >
            <i className="bi bi-trash" />
          </button>
          <button className="w-8 h-8 text-blue-500 rounded-full flex items-center justify-center">
            <i className="bi bi-pencil" />
          </button>
        </div>
      </div>
      <ConfirmModal state={state} setState={setState} />
    </>
  );
};

const TotalUsers = () => (
  <div className="w-full my-10">
    <span className="text-3xl font-semibold">Usuários</span>
    <User />
    <User />
    <User />
    <User />
  </div>
);

const FormUser = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full gap-3">
        <span className="text-3xl font-semibold">Criar/Atualizar Usuário</span>
        <div className="flex w-full gap-10">
          <div className="flex w-full flex-col">
            <label className="block  text-zinc-800 dark:text-zinc-200">
              Nome
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 text-zinc-900 bg-white border-zinc-300  border rounded-md dark:bg-black dark:text-zinc-300 dark:border-zinc-600  focus:ring-opacity-40"
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="block  text-zinc-800 dark:text-zinc-200">
              SobreNome
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 text-zinc-900 bg-white border-zinc-300  border rounded-md dark:bg-black dark:text-zinc-300 dark:border-zinc-600  focus:ring-opacity-40"
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="block  text-zinc-800 dark:text-zinc-200">
              Cargo
            </label>
            <select className="w-full px-4 py-3 mt-2 text-zinc-900 bg-white border-zinc-300  border rounded-md dark:bg-black dark:text-zinc-300 dark:border-zinc-600  focus:ring-opacity-40">
              <option value="servente">Servente</option>
              <option value="gestor">Gestor</option>
              <option value="administrador">Administrador</option>
            </select>
          </div>
        </div>
        <div className="flex w-full gap-10">
          <div className="flex w-full flex-col">
            <label className="block  text-zinc-800 dark:text-zinc-200">
              BI
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 text-zinc-900 bg-white border-zinc-300  border rounded-md dark:bg-black dark:text-zinc-300 dark:border-zinc-600  focus:ring-opacity-40"
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="block  text-zinc-800 dark:text-zinc-200">
              Local
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 text-zinc-900 bg-white border-zinc-300  border rounded-md dark:bg-black dark:text-zinc-300 dark:border-zinc-600  focus:ring-opacity-40"
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="block  text-zinc-800 dark:text-zinc-200">
              Data de Nascimento
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 mt-2 text-zinc-900 bg-white border-zinc-300  border rounded-md dark:bg-black dark:text-zinc-300 dark:border-zinc-600  focus:ring-opacity-40"
            />
          </div>
        </div>
        <div className="flex w-full gap-10">
          <div className="flex w-full flex-col">
            <label className="block  text-zinc-800 dark:text-zinc-200">
              ID
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 text-zinc-900 bg-white border-zinc-300  border rounded-md dark:bg-black dark:text-zinc-300 dark:border-zinc-600  focus:ring-opacity-40"
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="block  text-zinc-800 dark:text-zinc-200">
              Password
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 text-zinc-900 bg-white border-zinc-300  border rounded-md dark:bg-black dark:text-zinc-300 dark:border-zinc-600  focus:ring-opacity-40"
            />
          </div>
        </div>
        <div className="flex w-full gap-4 flex-row-reverse">
          <button className="rounded-lg shadow px-4 py-3 text-white bg-red-500">
            Limpar
            <i className="bi bi-x-lg ml-2" />
          </button>
          <button className="rounded-lg shadow px-4 py-3 text-white bg-blue-500">
            Criar
            <i className="bi bi-plus-lg ml-2" />
          </button>
        </div>
      </div>
      <TotalUsers />
    </div>
  );
};

export default FormUser;
