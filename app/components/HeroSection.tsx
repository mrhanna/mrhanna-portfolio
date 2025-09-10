'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="grid place-items-center py-32">
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-12 px-12 lg:gap-16 lg:px-16">
        <div className="md:order-2 w-[240px] h-[310px] -mt-[70px] lg:w-[360px] lg:h-[460px] lg:-mt-[100px] shrink-0 relative">
          <Image
            src="/images/headshot-transparent-cropped.png"
            alt="Profile picture of Michael Hanna"
            fill
            className="object-cover z-10"
          />

          <div className="bg-gradient-to-b from-background-200 to-background-500 absolute bottom-0 left-0 w-full h-[234px] lg:h-[347px]" />
        </div>
        <div className="md:order-1 text-center md:text-right flex md:items-end justify-between flex-col">
          <div className="flex flex-col md:items-end">
            <h1 className="font-black text-4xl md:text-5xl lg:text-8xl text-gray-900 mb-3 sm:mb-4 md:translate-x-[4px] md:max-w-[448px] xl:max-w-full">
              Michael Hanna
            </h1>
            <p className="text-lg sm:text-xl mb-3 sm:mb-4">
              Full Stack Developer
            </p>
          </div>
          <p className="lg:max-w-md md:max-w-[350px] leading-relaxed translate-y-[5px]">
            I&apos;m a freelance musician and educator actively pivoting into
            full-stack development
            <span className="inline-block md:max-lg:w-0">.</span> Bringing the
            same discipline
            <span className="inline-block lg:w-0">,</span> creativity, and
            problem-solving mindset that shaped my success in performance and
            teaching
            <span className="inline-block w-0">.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
