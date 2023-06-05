import React from 'react';
import mentoeImage from '../../public/menor.png';
import Image from 'next/image';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';
const Mentor = () => {
  return (
    <div className=" bg-[#CCE6FF] ">
      <div className=" h-screen grid lg:grid-cols-2">
        <div className=" relative">
          <Image
            className=" h-full max-h-screen "
            src={mentoeImage}
            alt="mentor image"
          />
          <div className=" absolute top-[5%] left-[5%]">
            <Link
              href={'/'}
              className=" bg-[#CCE6FF] w-16 h-16 rounded-full grid place-items-center"
            >
              <IoIosArrowBack className=" text-white" size={35} />
            </Link>
          </div>
        </div>
        <div className=" grid place-items-center ">
          <div className=" bg-white rounded-2xl w-full h-full max-w-[585px] max-h-[866px] px-6 py-10">
            <div className=" text-center px-10">
              <h2 className=" text-2xl pt-2 font-semibold">For Mentors</h2>
              <p className=" text-lg font-normal">
                Lörem ipsum prevasm knäprotest. Finanssmälta isöhet div. Tol
                napobel lasoning.
              </p>
            </div>
            <form action="#" className=" py-10 space-y-5">
              <div
                style={{ borderRadius: '5.3931px 5.3931px 0px 0px' }}
                className="bg-[#E5F1FE]  px-10 py-3"
              >
                <label className=" text-base font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  className=" text-xl text-[#9A9A9A] block bg-transparent focus:outline-none"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div
                style={{ borderRadius: '5.3931px 5.3931px 0px 0px' }}
                className="bg-[#E5F1FE]  px-10 py-3"
              >
                <label
                  className=" text-base font-semibold"
                  htmlFor="Occupation"
                >
                  Occupation
                </label>
                <input
                  className=" text-xl text-[#9A9A9A] block bg-transparent focus:outline-none"
                  type="text"
                  placeholder="Your Occupation"
                  name="Occupation"
                />
              </div>
              <div
                style={{ borderRadius: '5.3931px 5.3931px 0px 0px' }}
                className="bg-[#E5F1FE]  px-10 py-3"
              >
                <label
                  className=" text-base text-skin-primary font-semibold"
                  htmlFor="experience"
                >
                  Years of Experience
                </label>
                <div className="block relative w-full bg-transparent">
                  <select className="block text-xl appearance-none bg-transparent w-full hover:border-gray-500 px-4 py-2  rounded  leading-tight focus:outline-none focus:shadow-outline">
                    <option>5</option>
                    <option>10</option>
                    <option>3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      width="14"
                      height="7"
                      viewBox="0 0 14 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.333374 0.333336L7.00004 7L13.6667 0.333336H0.333374Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                style={{ borderRadius: '5.3931px 5.3931px 0px 0px' }}
                className="bg-[#E5F1FE]  px-10 py-3"
              >
                <label
                  className=" text-base font-semibold"
                  htmlFor="experience"
                >
                  what are you interested in mentoring
                </label>
                <div className="block relative w-full bg-transparent">
                  <select className="block text-xl appearance-none bg-transparent w-full hover:border-gray-500 px-4 py-2  rounded  leading-tight focus:outline-none focus:shadow-outline">
                    <option>Select Interest</option>
                    <option>Developer</option>
                    <option>Content Creator</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      width="14"
                      height="7"
                      viewBox="0 0 14 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.333374 0.333336L7.00004 7L13.6667 0.333336H0.333374Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                style={{ borderRadius: '5.3931px 5.3931px 0px 0px' }}
                className="bg-[#E5F1FE]  px-10 py-3"
              >
                <label
                  className=" text-base font-semibold"
                  htmlFor="Occupation"
                >
                  Occupation
                </label>

                <textarea
                  id="message"
                  rows="4"
                  class="block   text-xl text-[#9A9A9A]  bg-transparent focus:outline-none"
                ></textarea>
              </div>
              <button type="submit" className=" primary_btn w-full">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
