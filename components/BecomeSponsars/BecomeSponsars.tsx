import React from 'react';
import Container from '../Container';
import image from '../../public/sponsars.svg';
import Image from 'next/image';
const BecomeSponsars = () => {
  return (
    <section id="contact_us" className=" pb-10">
      <Container>
        <div className=" bg-[#F5CA3D] gap-5 lg:gap-20 bg-opacity-20 flex flex-col lg:flex-row rounded-2xl p-4 pb-0">
          <div className=" px-5 lg:pt-20 py-10 basis-full lg:basis-[60%]">
            <div className=" space-y-5 lg:space-y-10">
              <h3 className=" text-xl lg:text-5xl font-bold">
                Become a Sponsor
              </h3>
              <p className=" text-base lg:text-3xl font-normal">
                Are you a business. organisation or tech company that would like{' '}
                to actively support our work? Our aim is to facilitate
                collaboration by connecting changemakers who drive innovation,
                upskilling within our community and providing opportunities by
                bridging cross-industry expertise.{' '}
              </p>
              <div>
                <h2 className=" text-3xl font-bold">Journey So Far:</h2>
                <ul className=" pt-2 gap-3 lg:gap-16 flex items-center ">
                  <li className=" flex flex-col justify-center ">
                    <span className="  font-bold leading-6 block text-xl lg:text-6xl text-skin-primary">
                      3+
                    </span>
                    <small className="block text-xs lg:text-2xl text-black font-normal ">
                      Years
                    </small>
                  </li>
                  <li className=" flex flex-col justify-center ">
                    <span className=" font-bold leading-6 block text-xl lg:text-6xl text-skin-primary">
                      2000+
                    </span>
                    <small className="block text-xs lg:text-2xl text-black font-normal  ">
                      Attendees
                    </small>
                  </li>
                  <li className=" flex flex-col justify-center ">
                    <span className=" font-bold leading-6 block text-xl lg:text-6xl text-skin-primary">
                      12+
                    </span>
                    <small className="block text-xs lg:text-2xl text-black font-normal  ">
                      Events
                    </small>
                  </li>
                  <li className=" flex flex-col justify-center ">
                    <span className=" font-bold leading-6 block text-xl lg:text-6xl text-skin-primary">
                      85+
                    </span>
                    <small className="block text-xs lg:text-2xl text-black font-normal  ">
                      Members
                    </small>
                  </li>
                </ul>
              </div>
              <div>
                <button className="secondary_btn">
                  Give us a Ring: (281) 000 - 1000{' '}
                </button>
              </div>
            </div>
          </div>
          <div className=" basis-full lg:basis-[40%]">
            <Image src={image} alt="aoimagfevd" className="  w-full h-full " />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BecomeSponsars;
