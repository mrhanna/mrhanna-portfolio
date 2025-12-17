import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="px-4 bg-background-100 sticky top-0 shadow-xs">
        <Link
          href="/"
          className="inline-flex p-2 pr-4 items-center gap-4 hover:bg-background-200"
        >
          <FaChevronLeft size={24} className="inline-block" />
          back to portfolio
        </Link>
      </nav>
      {children}
    </>
  );
}
