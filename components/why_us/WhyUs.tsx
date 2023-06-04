import React from 'react';
import Container from '../Container';
import whyUs from '../../public/why_us.svg';
import Image from 'next/image';
const WhyUs = () => {
  return (
    <section className=" py-5 lg:py-10">
      <Container>
        <div className="  flex items-center gap-10">
          <div className=" hidden lg:block basis-[35%] 2xl:basis-[40%]">
            <Image
              className=" max-w-[540px] 2xl:max-w-[600px]"
              src={whyUs}
              alt="why_us"
            />
          </div>
          <div className=" w-full lg:basis-[65%] 2xl:basis-[60%]">
            <h2 className=" py-5 lg:py-5  text-center lg:text-left text-4xl font-bold text-black">
              Why We’re Here?
            </h2>
            <p className=" text-center lg:text-left  text-base lg:text-3xl 2xl:pt-10 lg:leading-10  text-[#434040] font-normal">
              Lörem ipsum prevasm knäprotest. Finanssmälta isöhet div. Tol
              napobel lasoning. Du kan vara drabbad. Vod bepören. Ded
              barriärvård gabide. Primakrati isarade, hexade, pömödade. Dirad
              födor. Spena prel. Fösögt gan. Du kan vara drabbad. Hjärtstartare
              dir tävovåsa. Dysfas miren. Epill edoska, dosåling. Köttrymden
              gade. Boskapet än reana. Heminde makrosm. Gektig or. Poning
              homoktigt. Poniras endotos i makrongen. Lanat semisam boment däse.
              Brännskräp kameratelefon, ben. Kalingar pebålingar och
              kvasinissade suprans.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;
