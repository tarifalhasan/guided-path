import React from 'react';
import Container from '../Container';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
const Events = () => {
  const ListOfEvents = {
    column1: [
      'Nonprofit Organization',
      'Empowering',
      'Career Counseling',
      'Raising Funds',
      'Knowledge Sharing',
      'Management',
    ],
    column2: [
      'Professional Development',
      'Opportunities',
      'Team Work',
      'Extensiveness',
      'Empowerment',
    ],
    column3: ['Webinars', 'Association', 'Networking', 'Leadership', 'Events'],
  };

  return (
    <section id="events" className="pb-10">
      <Container>
        <div className=" bg-[#0183FF] bg-opacity-20 rounded-2xl">
          <div className=" py-5 lg:py-16 px-6 lg:px-10">
            <h2 className=" text-center text-2xl lg:text-4xl  text-black font-bold">
              Guided Path is Entirely Funded by its
              <br className=" hidden lg:block" /> Members, Volunteers and
              Supports
            </h2>
            <div className="  py-10 flex  flex-col lg:flex-row  lg:justify-around">
              <ul className=" space-y-2">
                {ListOfEvents.column1.map((data, key) => (
                  <li key={key} className=" flex  items-center">
                    <span className=" flex gap-3   items-center w-full">
                      <HiOutlineArrowNarrowRight className=" text-lg lg:text-3xl text-skin-primary" />
                      <span className=" text-base lg:text-3xl text-black font-medium">
                        {data}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <ul className=" space-y-1">
                {ListOfEvents.column2.map((data, key) => (
                  <li key={key} className=" flex  items-center">
                    <span className=" flex gap-3    items-center w-full">
                      <HiOutlineArrowNarrowRight className=" text-lg lg:text-3xl text-skin-primary" />
                      <span className=" text-base lg:text-3xl text-black font-medium">
                        {data}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <ul className=" sapce-y-1">
                {ListOfEvents.column3.map((data, key) => (
                  <li key={key} className=" flex   items-center">
                    <span className=" flex gap-3  items-center w-full">
                      <HiOutlineArrowNarrowRight className=" text-lg lg:text-3xl text-skin-primary" />
                      <span className=" text-base lg:text-3xl text-black font-medium">
                        {data}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" flex gap-2 justify-center items-center">
              <button className="primary_btn">(281) 000 - 1000</button>
              <button className="secondary_btn px-7">Donate</button>
            </div>
            <div className=" text-3xl pt-10 font-semibold text-center text-black">
              info@guidedpath.com
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Events;
