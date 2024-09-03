import React from "react";

const Nutrition = () => {
  return (
    <>
      <section className="">
        <div className="">
          <img
            src="/Neutrationimg.png"
            alt="Nutrition"
            className="w-full h-auto"
          />
        </div>
        <div className="px-3 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <h1 className="text-[#090C0F] font-normal text-3xl sm:text-4xl md:text-5xl Gilroy-Light px-2 sm:px-4 md:px-6">
            Nutrition
          </h1>
          <div className=" grid grid-cols-1 md:grid-cols-12 mt-6 sm:mt-7 md:mt-8 overflow-hidden shadow-md rounded-tl-[100px] cursor-pointer  ">
            <div className="md:col-span-5 flex justify-center items-center">
              <img src="/image 68.png" alt="Healthy Food" className="" />
            </div>
            <div className="md:col-span-7 flex justify-center items-center relative group shadow-md ">
              <div className="absolute top-0 right-0 w-0 h-[3px] bg-[#EC9047] transition-all duration-300 ease-in-out group-hover:w-full z-50"></div>

              <div className="absolute top-0 right-0 h-0 w-[3px] bg-[#EC9047] transition-all duration-300 ease-in-out group-hover:h-full z-50 "></div>

              <div className="absolute bottom-0 right-0 w-0 h-[3px] bg-[#EC9047] transition-all duration-300 ease-in-out group-hover:w-full z-50 "></div>

              <div className="p-4 sm:p-8 shadow-md bg-white md:-ml-10 lg:-ml-12 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-  relative z-10">
                <p className="text-sm sm:text-base">
                  Our proprietary meat marination process not only enhances
                  flavor but also significantly reduces grease, making it
                  healthier option for consumers. By carefully selecting and
                  combining ingredients, we've crafted a method that preserves
                  juiciness while minimizing excess fats. This approach not only
                  improves the nutritional profile of our meats but also ensures
                  a more enjoyable dining experience, where flavor and health go
                  hand in hand.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12  mt-6 sm:mt-7 md:mt-8 shadow-md cursor-pointer">
            <div className="md:col-span-7 flex items-center relative group ">
              <div className="absolute top-0 right-0 w-full h-[3px] bg-[#EC9047] transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left z-50"></div>
              <div className="absolute top-0 left-0 h-full w-[3px] bg-[#EC9047] transition-all duration-300 ease-in-out transform scale-y-0 group-hover:scale-y-100 origin-top z-50 "></div>
              <div className="absolute bottom-0 right-0 w-full h-[3px] bg-[#EC9047] transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-right z-50 "></div>
              

              <div className="p-4 sm:p-6 md:p-8 shadow-md mx-4 sm:mx-6 md:mx-8 lg:mx-10 w-full bg-white transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg relative z-10 ">
                <div className="flex flex-col">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl">
                    Health Benefits of ‘smoky black beans’
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg">
                    Our ‘smoky’ black beans are very tasty, nutritious, and
                    healthy:
                  </p>
                </div>
                <div className="flex flex-wrap">
                  <div className="flex flex-col">
                    <li className="text-xs sm:text-sm md:text-base">
                      Great for Diabetes
                    </li>
                    <li className="text-xs sm:text-sm md:text-base">
                      Antioxidant Loaded
                    </li>
                    <li className="text-xs sm:text-sm md:text-base">
                      Cholesterol Reducer
                    </li>
                    <li className="text-xs sm:text-sm md:text-base">
                      ⁠Cancer Prevention
                    </li>
                  </div>
                  <div className="flex flex-col ml-4 sm:ml-6 md:ml-8">
                    <li className="text-xs sm:text-sm md:text-base">
                      Coronary Assistance
                    </li>
                    <li className="text-xs sm:text-sm md:text-base">
                      ⁠Iron Pack
                    </li>
                    <li className="text-xs sm:text-sm md:text-base">
                      Protein Powerhouse
                    </li>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex justify-center items-center ">
              <img
                src="/image 69.png"
                alt="Healthy Food"
                className="w-full h-auto object-cover sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Nutrition;
