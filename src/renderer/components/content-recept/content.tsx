import { useState } from 'react';
import AsksModal from '../asks-modal/asks-modal';
import PaymentModal from '../payment-modal/payment-modal';

/* eslint-disable react/button-has-type */
const Item = () => (
  <div className="py-1">
    <div className="bg-white text-gray-900 rounded p-4 shadow flex items-center justify-between">
      <div>
        <span className="font-semibold"> Refrigerante - </span>
        <span className="font-medium">Café Normal </span>
      </div>
      <div className="flex gap-4 items-center">
        <span>90 MT</span>
        <button className="w-6 h-6 text-red-500 rounded-full flex items-center justify-center">
          <i className="bi bi-trash" />
        </button>
      </div>
    </div>
  </div>
);

const ItemKitchen = () => (
  <div className="py-1">
    <div className="bg-white text-gray-900 rounded p-4 shadow flex items-center justify-between">
      <div>
        <span className="font-semibold"> Refrigerante - </span>
        <span className="font-medium">Café Normal </span>
      </div>
      <div className="flex gap-4 items-center">
        <input type="checkbox" className="h-5 w-5" />
      </div>
    </div>
  </div>
);

const Content = () => {
  const [modal, setModal] = useState(false);
  const [asks, setAsks] = useState(false);
  const handleOpen = () => setModal(true);
  const handleAsks = () => setAsks(true);

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-2xl flex items-center justify-center">
          <span className="-mt-1 uppercase">Estado da Conta:</span>
          <span className="bg-emerald-500 text-white px-2 py-1 rounded-xl ml-2 text-sm">
            Aberto
          </span>
        </span>
        <div className="flex gap-3">
          <button className="rounded-lg shadow px-4 py-3 text-white bg-blue-500">
            Abrir
            <i className="bi bi-door-open ml-2" />
          </button>
          <button
            onClick={handleOpen}
            className="rounded-lg shadow px-4 py-3 text-white bg-red-500"
          >
            Fechar
            <i className="bi bi-door-closed ml-2" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="py-10">
          <span className="text-3xl uppercase">
            <i className="bi bi-cash-coin mr-2" />
            Conta Total
          </span>
          <div className="my-4">
            <Item />
            <Item />
            <Item />
            <div className="my-4 flex gap-4">
              <button className="rounded-lg py-3 px-4 shadow bg-orange-500 text-white">
                Cozinha
                <i className="bi bi-shop ml-2" />
              </button>
              <button
                onClick={handleAsks}
                className="rounded-lg shadow px-4 py-3 text-white bg-emerald-500"
              >
                Adicionar
                <i className="bi bi-plus-lg ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="py-10">
          <span className="text-3xl uppercase">
            <i className="bi bi-shop mr-2" />
            Cozinha
          </span>
          <div className="my-4">
            <ItemKitchen />
            <ItemKitchen />
            <ItemKitchen />
            <div className="my-4 ">
              <button className="rounded-lg py-3 px-4 shadow bg-orange-500 text-white">
                Concluido
                <i className="bi bi-check-lg ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <PaymentModal setState={setModal} state={modal} />
      <AsksModal setState={setAsks} state={asks} />
    </div>
  );
};

export default Content;
