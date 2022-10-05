import { Link } from 'react-router-dom';

const ItemKitchen = () => (
  <div className="py-1">
    <div className="bg-white text-gray-900 p-2 flex items-center justify-between">
      <div>
        <i className="bi bi-chevron-right" />
        <span className="font-semibold"> Refrigerante - </span>
        <span className="font-base">Café Normal </span>
      </div>
    </div>
  </div>
);

const EachTable = () => (
  <div className="p-3 my-3 rounded-lg shadow bg-white w-full">
    <span className="text-3xl flex items-center gap-4">
      <span>Mesa 1</span>
      <Link to="/mesa/1" className="text-base">
        <i className="bi bi-box-arrow-up-right" />
      </Link>
    </span>
    <div className="ml-10">
      <ItemKitchen />
      <ItemKitchen />
      <ItemKitchen />
      <ItemKitchen />
    </div>
  </div>
);

const KitchenContent = () => {
  return (
    <div className="flex w-full flex-col my-10">
      <EachTable />
      <EachTable />
      <EachTable />
      <EachTable />
    </div>
  );
};

export default KitchenContent;
