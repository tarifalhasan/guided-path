import React from 'react';
import Logo from '../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { CiLocationOn } from 'react-icons/ci';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from 'react-icons/fa';
import Container from './Container';
const Footer = () => {
  return (
    <footer className="bg-[#030F25] text-white">
      <Container>
        <div className=" py-24  flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-40 fmd:mx-0 mx-auto text-center md:text-left">
            <a className=" ">
              <Image src={Logo} alt="logo" />
            </a>
          </div>
          <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className=" font-medium  tracking-widest text-xl mb-5">
                Quick Links
              </h2>
              <nav className="list-none space-y-2 mb-10">
                <li>
                  <Link href="" className=" text-lg font-normal">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href={''} className=" text-lg font-normal">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href={''} className=" text-lg font-normal">
                    Supporters Club
                  </Link>
                </li>
                <li>
                  <Link href={''} className=" text-lg font-normal">
                    Sponsor Events
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav className="list-none space-y-2 mt-10 mb-10">
                <li>Careers Development Programme</li>

                <li>Blog Contact Us</li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className=" font-medium  tracking-widest text-xl mb-5">
                Others
              </h2>
              <nav className="list-none space-y-2 mb-10">
                <li>
                  <Link href="" className=" text-lg font-normal">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href={''} className=" text-lg font-normal">
                    Privacy Policy
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className=" font-medium  tracking-widest text-xl mb-5">
                Contact Information
              </h2>
              <nav className="list-none space-y-3 mb-10">
                <li className=" flex gap-3 items-center">
                  <span className=" block">
                    <span className=" w-14 h-14 rounded-full bg-skin-primary grid place-items-center">
                      <MdOutlineLocalPhone size={24} />
                    </span>
                  </span>
                  <span className=" block text-lg ">(281) 000 - 1000 </span>
                </li>
                <li className=" flex gap-3 items-center">
                  <span className=" block">
                    <span className=" w-14 h-14 rounded-full bg-skin-primary grid place-items-center">
                      <HiOutlineEnvelope size={24} />
                    </span>
                  </span>
                  <span className=" block text-lg ">
                    support@guidedpath.com
                  </span>
                </li>
                <li className=" flex gap-3 items-center">
                  <span className=" block">
                    <span className=" w-14 h-14 rounded-full bg-skin-primary grid place-items-center">
                      <CiLocationOn size={24} />
                    </span>
                  </span>
                  <span className=" block text-lg ">
                    Abc Apartment 132134, 1212 232{' '}
                  </span>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className=" pb-10 gap-9 flex lg:flex-row flex-col items-center justify-between">
          <div className=" text-lg lg:text-2xl font-light">
            © 2023 Guided Path. All rights reserved.
          </div>
          <div className=" flex   items-center gap-4">
            <Link
              target="_blank"
              href=""
              className=" rounded-full  bg-[#071837] grid place-items-center w-14 h-14 "
            >
              <FaFacebookF size={25} />
            </Link>
            <Link
              target="_blank"
              href=""
              className=" rounded-full  bg-[#071837] grid place-items-center w-14 h-14 "
            >
              <FaLinkedinIn size={25} />
            </Link>
            <Link
              target="_blank"
              href=""
              className=" rounded-full  bg-[#071837] grid place-items-center w-14 h-14 "
            >
              <FaInstagram size={25} />
            </Link>
            <Link
              target="_blank"
              href=""
              className=" rounded-full  bg-[#071837] grid place-items-center w-14 h-14 "
            >
              <FaBehance size={25} />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
