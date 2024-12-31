const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mb-10">
      <span className="text-[24px] uppercase line-clamp-4">Heal Yourself</span>
      <button className="text-[20px] italic border border-blue-600 w-[200px] h-[50px] rounded-sm hover:bg-blue-400 hover:text-white">
        Donate us
      </button>
    </nav>
  );
};

export default Navbar;
