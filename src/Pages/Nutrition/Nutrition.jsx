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
              <img
                src="/image 68.png"
                alt="Healthy Food"
                className=""
              />
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
          <div className=" mt-10 ">
            <div className=" grid grid-cols-12 rounded-bl-[100px] border border-green-500">
              <div className=" col-span-7">1</div>
              <div className=" grid-cols-5">2</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Nutrition;
