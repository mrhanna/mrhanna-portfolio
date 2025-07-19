'use client';

import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image src="/headshot-transparent.png" alt="Profile Picture" width={240} height={240} className="rounded-full mx-auto border-4 border-gray-50 bg-gradient-to-b from-background-200 to-background-500 shadow-lg" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Michael Hanna</h1>
				<p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8">Full Stack Developer</p>
				<p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base px-4">
					I'm a freelance musician and educator actively pivoting into full-stack development. Bringing the same discipline, creativity, and problem-solving mindset that shaped my success in performance and teaching.
				</p>
			</div>
		</section>
	);
}
