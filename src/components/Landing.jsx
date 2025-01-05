import Banner from "../static/banner.png";
const Landing = () => {
  return (
    <div className="flex max-h-screen bg-[#FFFAF9] font-heading">
      <div className="flex basis-[10%] pl-3 pt-36 pb-20 text-gray-300">
        <div>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
        <div>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
        <div>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
        <div>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
      </div>
      <div
        className="flex basis-[90%] bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "80%",
          backgroundPosition: "right center",
        }}
      >
        <div className="flex flex-col basis-[50%] pl-16 pt-40 pb-20 gap-6">
          <span className="text-[16px] bold uppercase">
            Every Mind Deserves Peace
          </span>
          <span className="text-[20px] uppercase">
            <span className="text-yellow-500 text-[24px]">You</span> Don't Have
            to Face It{" "}
            <span className="text-yellow-500 text-[24px]">Alone</span>
          </span>
          <span>Begin Your Path to Mental Wellness</span>
          <span className="flex justify-center items-center rounded-t-[15px] rounded-l-[10px] cursor-pointer border w-[150px] h-[40px] bg-black text-white hover:bg-white hover:text-black">
            Find a cure
          </span>
        </div>
        <div className="flex justify-center items-center opacity-80 font-heading">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h1 className="text-2xl font-bold text-center font-heading mb-6">
              Choose Your Initial Cure
            </h1>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="option1"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  What are you looking for?
                </label>
                <select
                  id="option1"
                  className="block text-[14px] w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="option1">Anxiety</option>
                  <option value="option2">Depression</option>
                  <option value="option3">Stress</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="option2"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  What reference you Looking for?
                </label>
                <select
                  id="option2"
                  className="block text-[14px] w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="option1">Quranic</option>
                  <option value="option2">Hadith</option>
                  <option value="option3">Quotes</option>
                </select>
              </div>
              <div className="flex justify-center">
                <span className="flex justify-center items-center rounded-t-[15px] rounded-l-[10px] cursor-pointer border w-[150px] h-[40px] bg-black text-white hover:bg-white hover:text-black">
                  Search For Cure
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
