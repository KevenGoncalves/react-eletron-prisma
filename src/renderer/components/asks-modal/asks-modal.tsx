/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import { Dispatch, FC, SetStateAction, useState } from 'react';
import OptionModal from '../option-modal/option-modal';

const TypeOfAsk = ({
  icon,
  text,
  handle,
}: {
  icon: string;
  text: string;
  handle: any;
}) => (
  <button onClick={handle} className="lg:w-1/2 md:w-1/2 p-4 w-full">
    <div className="bg-gradient-to-r from-orange-400 to-orange-500  shadow-lg rounded-xl">
      <div className="relative h-44 w-full rounded overflow-hidden text-white flex items-center justify-center">
        <i className={`bi bi-${icon} text-[80px]`} />
      </div>
      <div className="py-4 text-center">
        <h2 className="text-white title-font text-2xl font-medium">{text}</h2>
      </div>
    </div>
  </button>
);

type AsksModalType = {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

const AsksModal: FC<AsksModalType> = ({ state, setState }) => {
  const handleClose = () => setState(false);
  const [modal, setModal] = useState(false);
  const handleOpen = () => setModal(true);

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
                Pedido
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
                <div className="flex ">
                  <TypeOfAsk handle={handleOpen} icon="cup-hot" text="Bebida" />
                  <TypeOfAsk
                    handle={handleOpen}
                    icon="egg-fried"
                    text="Comida"
                  />
                </div>
              </div>
            </div>
            {/* Modal footer */}
          </div>
        </div>
      </div>
      <OptionModal setState={setModal} state={modal} />
    </div>
  );
};

export default AsksModal;
