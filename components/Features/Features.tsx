import React from 'react';
import Container from '../Container';
import Image from 'next/image';

const Features = () => {
  const featuresData = [
    {
      name1: 'Community',
      name2: 'Arrangement',
      icon: '/community.svg',
    },
    {
      name1: 'Strong',
      name2: 'Networking',
      icon: '/Strong.svg',
    },
    {
      name1: 'Leadership',
      name2: 'Progression',
      icon: '/leadership.svg',
    },
    {
      name1: 'Career',
      name2: 'Improvement',
      icon: '/carrier.svg',
    },
    {
      name1: 'Skilled',
      name2: 'Events',
      icon: '/skilled.svg',
    },
  ];

  return (
    <section className="pb-5">
      <Container>
        <div>
          <h2 className=" py-5 lg:py-10 2xl:py-16 text-2xl lg:text-4xl lg:leading-[55px] text-center font-bold">
            The Drive of the Group is to Provision,
            <br className=" hidden lg:block" /> Advocate-for, and Brace the
            Community <br className=" hidden lg:block" /> System
          </h2>
          <div className="grid grid-cols-1 gap-6  lg:grid-cols-5">
            {featuresData.map((data, key) => (
              <div key={key}>
                <div className=" py-10 rounded-2xl bg-[#F5CA3D] !bg-opacity-30 w-full grid place-items-center">
                  <Image
                    width={114}
                    height={116}
                    src={data.icon}
                    alt={data.name1}
                  />
                  <div className=" pt-4">
                    <h2 className=" text-center text-2xl text-black font-bold">
                      {data.name1}
                    </h2>
                    <h2 className="text-2xl text-center text-black font-bold">
                      {data.name2}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
