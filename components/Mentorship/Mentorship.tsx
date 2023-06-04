import React from 'react';
import Container from '../Container';

import mentor1 from '../../public/mentors/1.svg';
import mentor2 from '../../public/mentors/2.svg';
import mentor3 from '../../public/mentors/3.svg';
import Image from 'next/image';

const Mentorship = () => {
  return (
    <section id="mentorship">
      <Container>
        <div className="py-10">
          {' '}
          <h2 className=" text-center lg:px-16 text-xl lg:text-4xl  text-black font-bold">
            Our Team Members Volunteer time and effort to bring{' '}
            <br className="hidden lg:block" /> events, projects and general
            tasks to help ensure that <br className="hidden lg:block" /> the
            Guided Path mission continues to Stay alive.
          </h2>
          <div className=" grid pt-10 md:grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="bg-[#FDF4D8] rounded-t-[16px]">
              <Image
                className=" rounded-t-[16px]"
                src={mentor1}
                alt="mentor1"
              />
              <div className=" space-y-5 pt-4 px-5 pb-7">
                <h3 className=" text-[#1C1B1F] text-xl font-bold">
                  Membership
                </h3>
                <button className="secondary_btn">Apply Now</button>
              </div>
            </div>
            <div className="bg-[#FDF4D8] rounded-t-[16px]">
              <Image
                className=" rounded-t-[16px]"
                src={mentor2}
                alt="mentor1"
              />
              <div className=" space-y-5 pt-4 px-5 pb-7">
                <h3 className=" text-[#1C1B1F] text-xl font-bold">
                  Application Questions?
                </h3>
                <button className="secondary_btn">Visit</button>
              </div>
            </div>
            <div className="bg-[#FDF4D8] rounded-t-[16px]">
              <Image
                className=" rounded-t-[16px]"
                src={mentor3}
                alt="mentor1"
              />
              <div className=" space-y-5 pt-4 px-5 pb-7">
                <h3 className=" text-[#1C1B1F] text-xl font-bold">
                  Partnering
                </h3>
                <button className="secondary_btn px-10">Get Involved</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mentorship;
