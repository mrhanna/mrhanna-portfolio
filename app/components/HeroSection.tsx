'use client';

export default function HeroSection() {
  return (
    <section className="overflow-x-clip">
      <div className="container mx-auto gap-8 md:gap-16 mt-30 pb-30 sideline items-center px-4 grid grid-cols-1 md:grid-cols-3">
        <div className="md:order-2 max-md:max-w-40 aspect-square relative bg-accent-blue-300 rounded-full">
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
        <div className="md:order-1 text-left prose md:col-span-2">
          <h1>
            Hi, I&apos;m Michael Hanna.{' '}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </h1>

          <p>
            When I&apos;m not playing or teaching saxophone, I&apos;m writing
            code, designing networks, and managing systems.
          </p>
          <p>
            I enjoy getting hands-on with tech. Whether I&apos;m working on a
            full-stack web app, configuring a switch, or setting up VMs in my
            homelab, I like understanding how systems work from the physical
            wire up to the UI. I&nbsp;hold CCNA and Azure Fundamentals
            certifications, grounding my practical project work in solid
            networking and cloud foundations.
          </p>
          <p>
            This portfolio is currently very front-end heavy. I plan to update
            it with write-ups on network labs, homelab configs, and practical
            guides. Feel free to explore the projects or get in touch!
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
