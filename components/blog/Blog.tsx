import React from 'react';
import Container from '../Container';

import blogImage1 from '../../public/blog/1.svg';
import blogImage2 from '../../public/blog/2.svg';
import blogImage3 from '../../public/blog/3.svg';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <section id="blog">
      <Container>
        <div className="py-10">
          {' '}
          <h2 className=" text-center lg:px-16 text-xl lg:text-4xl  text-black font-bold">
            Recent Blog Posts
          </h2>
          <div className=" grid pt-10 md:grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="bg-[#CCE6FF] rounded-[18px]">
              <Image
                className=" rounded-t-[16px]"
                src={blogImage1}
                alt="mentor1"
              />
              <div className=" space-y-5 pt-4 px-5 pb-7">
                <span className=" block text-xl text-[#434040]">
                  Nov 2th, 2021
                </span>
                <h3 className=" text-[#1C1B1F] text-xl lg:text-2xl font-bold">
                  Executive Board Announced
                </h3>
                <Link
                  href="#"
                  className=" underline-offset-4 underline block text-skin-primary"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="bg-[#CCE6FF] rounded-[18px]">
              <Image
                className=" rounded-t-[16px]"
                src={blogImage2}
                alt="mentor1"
              />
              <div className=" space-y-5 pt-4 px-5 pb-7">
                <span className=" block text-xl text-[#434040]">
                  Nov 2th, 2021
                </span>
                <h3 className=" text-[#1C1B1F] text-xl lg:text-2xl font-bold">
                  Executive Board Announced
                </h3>
                <Link
                  href="#"
                  className=" underline-offset-4 underline block text-skin-primary"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="bg-[#CCE6FF] rounded-[18px]">
              <Image
                className=" rounded-t-[16px]"
                src={blogImage3}
                alt="mentor1"
              />
              <div className=" space-y-5 pt-4 px-5 pb-7">
                <span className=" block text-xl text-[#434040]">
                  Nov 2th, 2021
                </span>
                <h3 className=" text-[#1C1B1F] text-xl lg:text-2xl font-bold">
                  Executive Board Announced
                </h3>
                <Link
                  href="#"
                  className=" underline-offset-4 underline block text-skin-primary"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
