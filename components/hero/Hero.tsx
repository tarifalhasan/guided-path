import Container from '../Container';

import Logo from '../../public/logo.svg';
import Navbar from '../navbar/Navbar';

export default function Hero() {
  return (
    <div className=" bg-hero-image bg-no-repeat bg-cover bg-center">
      <Container>
        <Navbar />
        <div className="relative isolate  pt-14 l">
          <div
            className="absolute inset-x-0 -top-36 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div className="relative" />
          </div>
          <div className="mx-auto  py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
                Muslim tech innovators creating{' '}
                <br className=" hidden lg:block" /> global revolution.
              </h1>
              <p className="mt-6 text-lg lg:text-2xl leading-8 text-gray-50">
                We are a Community of Muslim Revolutions Creators Who{' '}
                <br className="hidden lg:block" /> Up Ability & Innovator The
                World of Tech
              </p>
              <form className="mt-10 mx-auto max-w-[448px] bg-white overflow-hidden rounded-full flex items-center pl-5 pr-2 py-2 justify-between gap-x-6">
                <input
                  type="email"
                  required
                  className="focus:outline-none border-none text-base placeholder:text-[#9A9A9A]"
                  placeholder="Enter Your Email Address"
                />
                <button className="primary_btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
