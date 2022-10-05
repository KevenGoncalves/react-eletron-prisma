const Navbar = () => {
  return (
    <div className="flex flex-row-reverse">
      <div className="bg-white rounded-3xl p-2 flex items-center justify-center gap-2">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
          <i className="bi bi-person text-white text-2xl" />
        </div>
        <span className="mx-1">Keven Gonçalves</span>
      </div>
    </div>
  );
};

export default Navbar;
