import Link from 'next/link';

import { TbChevronLeft } from 'react-icons/tb';

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="px-4 bg-ui-blue-200 sticky top-0 shadow-xs">
        <Link
          href="/"
          className="inline-flex p-2 pr-4 items-center gap-4 hover:bg-ui-blue-100"
        >
          <TbChevronLeft size={24} className="inline-block" />
          back to portfolio
        </Link>
      </nav>
      {children}
    </>
  );
}
