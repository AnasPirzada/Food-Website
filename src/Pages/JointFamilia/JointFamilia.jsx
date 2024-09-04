import React from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/NavBar';

function JointFamilia() {
  const steps = [
    {
      imgSrc: '/Layer 2.svg',
      text: 'First visit tacos n’ cream twice (2)** between February – September. Keep these receipts to redeem for your familia cardholder stamp card on your third visit.',
    },
    {
      imgSrc: 'Number.svg',
      text: 'First visit tacos n’ cream twice (2)** between February – September. Keep these receipts to redeem for your familia cardholder stamp card on your third visit.',
    },
    {
      imgSrc: 'Number (1).svg',
      text: 'Third visit tacos n’ cream three (3)** times between October (of the same year) – January (of the following year), getting your familia cardholder stamp-card stamped each time. You’ll now qualify for tier 2 perks, including free add-ons, size upgrades, and access to the exclusive secret menu for the year stated upon showing your stamp card when ordering. Program details',
    },
  ];

  return (
    <>
      <Navbar backgroundcolor='#000000' />

      <section className='w-full h-full'>
        <div className="bg-[url('/Asset.png')] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] w-full bg-cover bg-center flex items-center justify-center">
          <h1 className='Gilroy-Bold font-normal px-4 sm:px-8 md:px-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[70px] text-[#282827] text-center'>
            Join our <span className='text-[#EC9047]'>family,</span> <br />
            not just a club.
          </h1>
        </div>
        <div className='flex flex-col text-center justify-center items-center px-4 sm:px-8 md:px-10 lg:px-20 gap-4 sm:gap-6 py-6 sm:py-8 md:py-10 lg:py-12'>
          <h1 className='Gilroy-Bold text-[#EC9047] font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center'>
            YOU ARE NOT JUST A MEMBER OF A CLUB. YOU ARE A MEMBER OF OUR FAMILY.
          </h1>
          <p className='text-[#282827] Gilroy-Regular text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center'>
            your heartfelt support means you’re not just a guest…you’re familia.
            to show our appreciation, become a tacos n’ cream familia stamp-card
            holder* and earn exclusive perks and access to our secret menu.
            welcome home!
          </p>
        </div>
        <div className='pt-4 px-4 sm:px-6 md:px-8 lg:px-20 flex flex-col gap-4 sm:gap-5'>
          <h2 className='text-[#000000] Gilroy-SemiBold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            How to become familia
          </h2>
          {steps.map((step, index) => (
            <div key={index} className='flex flex-col gap-3 sm:gap-6'>
              <img
                src={step.imgSrc}
                alt=''
                className='h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14'
              />
              <p className='Gilroy-Regular my-4 font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#191918] text-center sm:text-left'>
                {step.text}
              </p>
            </div>
          ))}
          <div className='pt-6 flex justify-start items-start'>
            <p className='font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#282827] Gilroy-Regular'>
              The tacos n’ cream familia stamp-card program has two tiers. Tier
              1 card holders can enjoy complimentary add-ons like chef’s salsa
              or sour cream and earn stamps towards tier 2 status. Tier 1 cards
              are valid through December 31 of the year earned. Once fully
              stamped, tier 1 cards convert to tier 2 cards automatically. Tier
              2 card holders retain tier 1 benefits in addition to complimentary
              size upgrades and access to a secret menu of seasonal items such
              as tamales, tortas, street corn, ceviche, breakfast tacos and
              more, until December 31 of the following year. Add-ons, upgrades,
              and secret menu items are subject to change and available at our
              discretion. Upon expiry, re-completion of steps 1–3 is required to
              become a familia stamp-card holder.
            </p>
          </div>

          <div className='bg-[#F8AC54] mb-10 flex flex-col lg:flex-row justify-between items-center px-4 sm:px-10 md:px-20 lg:px-24 drop-shadow-[0px 2px 24px 0px #00000014] h-auto w-full rounded-3xl py-8 lg:py-12'>
            <div className='w-full lg:w-[45%] mb-6 lg:mb-0'>
              <img src='/image.png' alt='' className='w-[75%] mx-auto' />
            </div>
            <div className='flex flex-col justify-start items-center lg:items-center w-full px-4 sm:px-8 lg:px-12'>
              <p className='text-center lg:text-center text-[#090C0F] Gilroy-Medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal'>
                Purchases must include a standard-menu meal item (burrito or
                plate) to qualify for a familia cardholder stamp-card or to earn
                stamps on an existing card.
              </p>
              <p className='text-red-600 text-center lg:text-center w-full Gilroy-Medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl pt-6 font-normal'>
                familia cardholders
              </p>
              <p className='text-[33px] my-6 text-center lg:text-center w-full Gilroy-Medium font-normal'>
                ( 20 )
              </p>
              <div className='flex flex-wrap justify-center lg:justify-center items-center w-full'>
                <div className='flex justify-center lg:justify-center items-center gap-4 w-full'>
                  <div className='border flex justify-center items-center p-6 border-[#000000] w-[60px] h-[60px] text-lg sm:text-xl md:text-2xl'>
                    1
                  </div>
                  <div className='border flex justify-center items-center p-6 border-[#000000] w-[60px] h-[60px] text-lg sm:text-xl md:text-2xl'>
                    2
                  </div>
                  <div className='border flex justify-center items-center p-6 border-[#000000] w-[60px] h-[60px] text-lg sm:text-xl md:text-2xl'>
                    3
                  </div>
                </div>
                <div className='flex justify-center lg:justify-center items-center mt-6 w-full'>
                  <input
                    type='checkbox'
                    className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8'
                  />
                  <p className='ms-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
                    'Secret Menu' rewards valid for year shown above after
                    receiving 3 stamps within (Oct./Nov./ Dec./Jan.) of
                    designated year handed out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default JointFamilia;
