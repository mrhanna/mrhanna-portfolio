'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbFile,
  TbMail,
  TbMapPin,
} from 'react-icons/tb';

export default function ContactSection() {
  return (
    <section className="py-16 bg-ui-blue-900 text-ui-blue-100">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-2xl font-semibold text-ui-blue-50">Contact</h2>
          <p>Working on something cool? Let&apos;s chat!</p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <TbMapPin className="text-2xl inline" />
            <span>Bentonville, AR</span>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
            <Link
              scroll={false}
              href="/?contact"
              className="btn dark btn-primary flex flex-row gap-2"
            >
              <TbMail className="text-2xl" />
              Get in Touch
            </Link>

            <a
              href="/assets/MichaelHanna_resume_8.7.25.pdf"
              target="_blank"
              className="btn dark btn-secondary flex flex-row gap-2"
            >
              <TbFile className="text-2xl" />
              View Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/mrhanna"
              title="View Profile on Github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ui-blue-200 hover:text-ui-blue-50 transition-[color,transform] hover:scale-105"
            >
              <TbBrandGithub className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/michael-r-hanna"
              title="View Profile on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ui-blue-200 hover:text-ui-blue-50 transition-[color,transform] hover:scale-105"
            >
              <TbBrandLinkedin className="text-2xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
