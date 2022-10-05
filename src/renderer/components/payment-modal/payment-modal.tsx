/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import { Dispatch, FC, SetStateAction } from 'react';

type PaymentModalType = {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

const PaymentModal: FC<PaymentModalType> = ({ state, setState }) => {
  const handleClose = () => setState(false);

  if (!state) return null;

  return (
    <div className="max-w-2xl mx-auto ">
      <div className="overflow-x-hidden h-screen bg-black/10 backdrop-blur-sm overflow-y-auto fixed md:h-full left-0 right-0 md:inset-0 z-50 justify-center items-center">
        <div className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 relative w-full max-w-2xl h-auto">
          {/* Modal content */}
          <div className="bg-white rounded-lg shadow relative dark:bg-black dark:border dark:border-zinc-700  m-2">
            {/* Modal header */}
            <div className="flex items-start justify-between p-5  rounded-t dark:border-zinc-800">
              <h3 className="text-zinc-900 text-xl lg:text-2xl font-semibold dark:text-white">
                Pagamento
              </h3>
              <button
                onClick={handleClose}
                className="text-zinc-400 bg-transparent hover:bg-zinc-200 hover:text-zinc-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-6">
              <div>
                <div className="flex flex-col gap-5">
                  <div>
                    <label className="block  text-zinc-800 dark:text-zinc-200">
                      Forma de Pagamento
                    </label>
                    <select className="block w-full px-4 py-3 mt-2 text-zinc-900 bg-white border-zinc-300  border rounded-md dark:bg-black dark:text-zinc-300 dark:border-zinc-600 focus:border-meisy dark:focus:border-meisy-secondary focus:ring-meisy focus:outline-none focus:ring dark:focus:ring-meisy-secondary focus:ring-opacity-40">
                      <option value="numerario">Numerario</option>
                      <option value="mpesa">Mpesa</option>
                      <option value="emola">Emola</option>
                      <option value="cartao">Cartão</option>
                    </select>
                  </div>
                  <div>
                    <label className="block  text-zinc-800 dark:text-zinc-200">
                      Digite o valor
                    </label>
                    <input
                      type="number"
                      className="block w-full px-4 py-2 mt-2 text-zinc-900 bg-white border-zinc-300  border rounded-md dark:bg-black dark:text-zinc-300 dark:border-zinc-600 focus:border-meisy dark:focus:border-meisy-secondary focus:ring-meisy focus:outline-none focus:ring dark:focus:ring-meisy-secondary focus:ring-opacity-40"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="flex justify-between items-center">
              <div className="flex space-x-2 items-center p-6 border-zinc-200 rounded-b dark:border-zinc-800">
                <button className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-meisy dark:hover:bg-purple-600 dark:focus:ring-purple-800 flex items-center justify-center">
                  Pagar
                </button>
                <button
                  onClick={handleClose}
                  className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-500 rounded-md border-meisy-secondary text-sm font-medium px-5 py-2.5  focus:z-10 "
                >
                  Fechar
                </button>
              </div>
              <div className="mr-8 flex gap-10">
                <span>
                  <span className="font-semibold">Total: &nbsp;</span>
                  3000 MT
                </span>
                <span>
                  <span className="font-semibold">Troco: &nbsp;</span>0 MT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
