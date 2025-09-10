'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import {
  ChangeEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactModal() {
  const isOpen = useSearchParams().has('contact');

  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [state, handleSubmit] = useForm('xeozobbe');

  // Escape key behavior
  useLayoutEffect(() => {
    const handleEscape = (e: Event) => {
      e.preventDefault();
      router.push('/', { scroll: false });
    };

    const dialog = dialogRef.current;

    if (dialog) {
      dialog.addEventListener('cancel', handleEscape);

      return () => {
        dialog.removeEventListener('cancel', handleEscape);
      };
    }
  }, [router]);

  // imperatively use HTML5 Dialog Events
  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog) {
      if (isOpen) {
        dialog.showModal();
      } else {
        const timeout = setTimeout(() => {
          dialog.close();
        }, 200);

        return () => {
          clearTimeout(timeout);
        };
      }
    }
  }, [isOpen, router]);

  return (
    <dialog ref={dialogRef} aria-label="Contact form modal">
      <div
        className={`grid place-items-center fixed w-full h-full left-0 top-0 ${isOpen ? 'animate-fadeIn' : 'animate-fadeOut'} bg-[#0006]`}
      >
        <div
          className={`${isOpen ? 'animate-slideIn' : 'animate-slideOut'} bg-white rounded-lg w-full max-w-xl m-4 overflow-hidden shadow-lg`}
        >
          <div className="text-right bg-background-200 text-2xl p-2 leading-none">
            <button
              aria-label="Close contact form"
              title="Close contact form"
              onClick={() => {
                router.push('/', { scroll: false });
              }}
              className="transition-colors text-background-800 hover:text-background-600 duration-75 align-bottom"
            >
              <FaWindowClose aria-hidden="true" />
            </button>
          </div>
          <div className="relative">
            <form
              onSubmit={handleSubmit}
              className={`${state.succeeded ? 'blur-sm' : ''} p-6 flex flex-col gap-2 relative`}
            >
              <label htmlFor="email" className="font-bold">
                Your Email
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                }}
                placeholder="your@email.com"
                className="w-full focus:outline-background-100 focus:invalid:outline-red-500 invalid:outline-red-400 outline-none"
                disabled={state.succeeded ? true : undefined}
              />
              <label htmlFor="message" className="font-bold">
                Your Message
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                  setMessage(e.target.value);
                }}
                className="w-full h-36 focus:outline-background-100 outline-none resize-none overflow-scroll"
                placeholder="Write your message here"
                disabled={state.succeeded ? true : undefined}
              ></textarea>

              <input
                type="submit"
                className="px-6 py-2 border bg-background-200  text-gray-700 mt-4 cursor-pointer disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-default font-medium rounded hover:bg-background-100 transition-colors self-center"
                disabled={
                  !state.succeeded &&
                  !state.submitting &&
                  email &&
                  message &&
                  /^[^@\s]+@[^@\s]+$/.test(email)
                    ? undefined
                    : true
                }
                value={state.submitting ? 'Submitting...' : 'Submit'}
              />
            </form>
            {state.succeeded && (
              <div className="absolute left-0 top-0 w-full h-full z-10 blur-0 grid place-items-center text-xl font-bold p-16 text-center">
                Your message has been received. Thanks for reaching out!
              </div>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
}
