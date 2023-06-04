import BecomeSponsars from '@/components/BecomeSponsars/BecomeSponsars';
import Events from '@/components/Events/Events';
import Features from '@/components/Features/Features';
import Footer from '@/components/Footer';
import Mentorship from '@/components/Mentorship/Mentorship';
import Blog from '@/components/blog/Blog';
import Hero from '@/components/hero/Hero';
import WhyUs from '@/components/why_us/WhyUs';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhyUs />
      <Events />
      <Mentorship />
      <Blog />
      <BecomeSponsars />
      <Footer />
    </>
  );
}
