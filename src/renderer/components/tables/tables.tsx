/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import { Link } from 'react-router-dom';

const Card = ({ nr }: { nr: number }) => (
  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    <Link to={`/mesa/${nr}`}>
      <div className="bg-gradient-to-r from-orange-400 to-orange-500  shadow-lg rounded-xl">
        <div className="relative h-44 w-full rounded overflow-hidden text-white flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={80}
            height={80}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ai ai-Utensils"
          >
            <path d="M11 8V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4z" />
            <path d="M15 16V2h3a4 4 0 0 1 4 4v10h-4" />
            <path d="M15 16v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5" />
            <path d="M5 12v9a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-9" />
            <path d="M5 6V2" />
            <path d="M8 6V2" />
          </svg>
        </div>
        <div className="py-4 text-center">
          <h2 className="text-white title-font text-2xl font-medium">
            MESA {nr}
          </h2>
        </div>
      </div>
    </Link>
  </div>
);

const Tables = () => {
  const NumberOfTables = Array.from({ length: 8 }, (_, k) => k + 1);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {NumberOfTables.map((value) => (
            <Card key={value} nr={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tables;
