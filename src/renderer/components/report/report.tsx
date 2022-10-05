/* eslint-disable react/button-has-type */
const EachReport = () => (
  <div className="bg-zinc-100 p-3 rounded-lg my-3 flex items-center justify-between">
    <div className="flex gap-10">
      <span className="font-medium">Dia / Semana</span>
      <span>Operador</span>
    </div>
    <div>
      <button className="bg-emerald-500 text-white p-2 rounded-lg">
        Imprimir
        <i className="bi bi-download ml-2" />
      </button>
    </div>
  </div>
);

const Report = () => {
  return (
    <div>
      <div className="w-full">
        <button className="w-1/4 bg-blue-500 py-3 px-4 text-white rounded-lg">
          Gerar Relatório Diário
          <i className="bi bi-file-earmark-ruled ml-1" />
        </button>
      </div>

      <div className="w-full bg-white shadow my-5 rounded-lg p-4">
        <span className="font-medium text-3xl">Relatórios Passados</span>
        <div className="mt-10">
          <EachReport />
          <EachReport />
          <EachReport />
        </div>
      </div>
    </div>
  );
};

export default Report;
