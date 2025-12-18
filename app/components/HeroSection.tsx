'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-2 mt-20 sideline items-center">
        <div className="md:order-2 w-60 aspect-square lg:w-90 relative bg-accent-blue-400 rounded-full justify-self-center md:justify-self-end">
          <svg width="0" height="0" aria-hidden="true">
            <defs>
              <clipPath id="portrait-cut" clipPathUnits="objectBoundingBox">
                <path
                  d="
          M 0 0
          H 1
          V 0.6086956522
          A 0.5 0.391304348 0 0 1 0 0.6086956522
          Z
        "
                />
              </clipPath>
            </defs>
          </svg>

          <img
            src="/images/headshot-transparent-cropped.png"
            alt="Profile picture of Michael Hanna"
            style={{ clipPath: 'url(#portrait-cut)' }}
            className="absolute w-full bottom-0 left-0"
          />
        </div>
        <div className="md:order-1 text-left prose max-w-90 pl-4">
          <h1>
            Hi, I'm Michael Hanna.{' '}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </h1>
          <p className="text-5xl font-normal">
            I make websites
            <br />
            <strong className="font-black">behave.</strong>
          </p>
          <p className="max-w-80">
            I help teams ship reliable websites by handling the parts that need
            careful thinking: structure, implementation, and the details that
            break when no one’s paying attention.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary">Get in Touch</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
