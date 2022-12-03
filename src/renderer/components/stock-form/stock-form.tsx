/* eslint-disable react/button-has-type */

import { useState } from 'react';
import ConfirmModal from '../confirm-delete/confirm-delete';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Inventory = () => {
  const [state, setState] = useState(false);

  const handleOpen = () => setState(true);

  return (
    <>
      <div className="grid grid-cols-5 w-full my-2 p-3 rounded-lg shadow bg-white">
        <span>ID</span>
        <span>Café Normal</span>
        <span>Bebidas - Quentes</span>
        <span>90Mt</span>
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

const TotalInventory = () => (
  <div className="w-full my-10">
    <span className="text-3xl font-semibold">Inventário</span>
    <Inventory />
    <Inventory />
    <Inventory />
    <Inventory />
  </div>
);

const StockForm = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full gap-3">
        <span className="text-3xl font-semibold">
          Criar/Atualizar Inventario
        </span>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
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
              Preco
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 mt-2 text-zinc-900 bg-white border-zinc-300  border rounded-md dark:bg-black dark:text-zinc-300 dark:border-zinc-600  focus:ring-opacity-40"
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="block  text-zinc-800 dark:text-zinc-200">
              Departamento
            </label>
            <select className="w-full px-4 py-3 mt-2 text-zinc-900 bg-white border-zinc-300  border rounded-md dark:bg-black dark:text-zinc-300 dark:border-zinc-600  focus:ring-opacity-40">
              <option value="servente">Comida</option>
              <option value="gestor">Bebida</option>
            </select>
          </div>
          <div className="flex w-full flex-col">
            <label className="block  text-zinc-800 dark:text-zinc-200">
              Categoria
            </label>
            <select className="w-full px-4 py-3 mt-2 text-zinc-900 bg-white border-zinc-300  border rounded-md dark:bg-black dark:text-zinc-300 dark:border-zinc-600  focus:ring-opacity-40">
              <option value="servente">Tostas</option>
              <option value="gestor">Hamburguers</option>
            </select>
          </div>
        </div>
        <div className="w-full flex flex-row-reverse">
          <button className="bg-orange-500 px-4 py-3 rounded-lg text-white">
            Adicionar
            <i className="bi bi-plus-lg ml-2" />
          </button>
        </div>
      </div>
      <TotalInventory />
    </div>
  );
};

export default StockForm;
