/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import { Dispatch, FC, SetStateAction, useState } from 'react';

type OptionModalType = {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

const Item = ({ product, price }: { product: string; price: number }) => {
  const [nPrice, setNPrice] = useState(1);

  const add = () => setNPrice(() => nPrice + 1);
  const reduce = () => setNPrice(() => (nPrice > 1 ? nPrice - 1 : 1));

  return (
    <div className="py-1">
      <div className="bg-white text-gray-900 rounded p-4 shadow flex items-center justify-between">
        <div>
          <span className="font-medium">{product} </span>
          <span>- {price * nPrice} MT</span>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <span>Qnt: &nbsp;</span>
            <span className="font-medium">{nPrice}</span>
          </div>
          <button
            onClick={add}
            className="w-6 h-6 bg-blue-500 text-white rounded flex items-center justify-center text-2xl "
          >
            <span className="-mt-1">+</span>
          </button>
          <button
            onClick={reduce}
            className="w-6 h-6 bg-red-500 text-white rounded flex items-center justify-center text-2xl"
          >
            <span className="-mt-1">-</span>
          </button>
          <button className=" bg-emerald-500 text-white rounded flex items-center justify-center px-1">
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

const OptionModal: FC<OptionModalType> = ({ state, setState }) => {
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
                Bebidas
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
            <div className="p-6">
              <div>
                <div className="flex flex-col">
                  <div>
                    <span className="font-medium">Refrescos</span>
                    <Item product="Café Normal" price={100} />
                    <Item product="Café Express" price={150} />
                    <Item product="Capuccino" price={200} />
                    <Item product="Minute Maid" price={75} />
                  </div>
                </div>
              </div>
            </div>
            {/* Modal footer */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionModal;
