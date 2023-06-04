'use client';

import React from 'react';
import Container from '../Container';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/logo.svg';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'About Us', href: '#about_us' },
  { name: 'Programs', href: '#programs' },
  { name: 'Events', href: '#events' },
  { name: 'Mentorship', href: '#mentorship' },
  { name: 'Community', href: '#community' },
  { name: 'Contact Us', href: '#contact_us' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=" inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 px-0 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-4 lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Image className=" h-10 lg:h-16 w-auto" src={Logo} alt="logo" />
          </a>
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg  font-normal leading-6 text-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HiOutlineMenuAlt2
              className=" text-white "
              size={35}
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="hidden lg:flex gap-6 items-center lg:justify-end">
          <a href="#" className="outline_btn">
            Mentees
          </a>
          <a href="#" className="-mx-3 primary_btn">
            Mentees
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <Image className="h-8 w-auto" src={Logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 text-black w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a href="#" className="-mx-3 outline_btn">
                  Mentees
                </a>
                <a href="#" className="-mx-3 primary_btn">
                  Mentees
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
