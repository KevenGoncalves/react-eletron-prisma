import image from '../../../../assets/images/undraw_breakfast_psiw.svg';

const PageCard = () => {
  return (
    <div className="text-white bg-gradient-to-r  from-orange-400 to-orange-300 my-5 rounded-3xl p-5 flex items-center justify-between">
      <span className="text-6xl font-medium">Mesas</span>
      <div>
        <img className="w-40 h-40" src={image} alt="" />
      </div>
    </div>
  );
};

export default PageCard;
