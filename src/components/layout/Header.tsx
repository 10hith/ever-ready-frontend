import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-byteloop-dark border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-byteloop-green">
                ByteLoop
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white">
                Home
              </Link>
              <Link href="/services" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/privacy-policy" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
