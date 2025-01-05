const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 border-b divide-x-2">
      <span className="text-[24px] uppercase line-clamp-4 leading-1 text-bold font-heading">
        Calm Compass
      </span>
      <div className="flex justify-around items-center basis-[30%]">
        <span className="cursor-pointer relative group active:text-blue-600">
          <span>Home</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full active:bg-blue-600 active:w-full"></span>
        </span>

        <span className="cursor-pointer relative group active:text-blue-600">
          <span>Blog</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full active:bg-blue-600 active:w-full"></span>
        </span>

        <span className="cursor-pointer relative group active:text-blue-600">
          <span>Find a therapist</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full active:bg-blue-600 active:w-full"></span>
        </span>

        <span className="cursor-pointer relative group active:text-blue-600">
          <span>Donate us</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full active:bg-blue-600 active:w-full"></span>
        </span>
      </div>
      <div className="flex border rounded-lg">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 outline-none rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center basis-[10%]">
        <span className="flex justify-center items-center rounded-t-[15px] rounded-l-[10px] cursor-pointer border w-[70px] h-[40px] bg-black text-white hover:bg-white hover:text-black">
          Login
        </span>
        <span className="flex justify-center items-center rounded-t-[15px] rounded-l-[10px] cursor-pointer border w-[70px] h-[40px] hover:bg-black hover:text-white">
          Signup
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
