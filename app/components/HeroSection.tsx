'use client';

export default function HeroSection() {
  return (
    <section className="overflow-x-clip">
      <div className="container mx-auto flex flex-col gap-8 md:flex-row justify-between mt-30 pb-30 sideline items-center px-4">
        <div className="md:order-2 w-36 aspect-square md:w-76 relative bg-accent-blue-300 rounded-full">
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
        <div className="md:order-1 text-left prose max-w-90 grow">
          <h1>
            Hi, I&apos;m Michael Hanna.{' '}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </h1>
          <p className="text-5xl font-normal">
            I make websites
            <br />
            that <strong className="font-black">behave.</strong>
          </p>
          <p className="max-w-80">
            I help teams ship reliable websites by handling the parts that need
            careful thinking: structure, implementation, and the details that
            break when no one&apos;s paying attention.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="#skills" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
