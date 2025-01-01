const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <span className="text-[24px] uppercase line-clamp-4 leading-1 text-bold font-heading">
        Calm Compass
      </span>
      <button className="text-[20px] font-heading border border-blue-600 w-[200px] h-[50px] rounded-lg hover:bg-blue-400 hover:text-white">
        Donate us
      </button>
    </nav>
  );
};

export default Navbar;
