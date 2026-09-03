const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-800 text-neutral-400">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 lg:px-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              TECH<span className="text-purple-500">SHOP</span>
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">
              Discover the latest technology, powerful devices, and innovative
              products designed for your digital lifestyle.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-sm transition duration-500 hover:bg-purple-700 hover:text-white"
              >
                IG
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-sm transition duration-500 hover:bg-purple-700 hover:text-white"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-sm transition duration-500 hover:bg-purple-700 hover:text-white"
              >
                IN
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-purple-500">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-purple-500">
                  Products
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-purple-500">
                  Categories
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-purple-500">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <span className="block text-neutral-600">Address</span>
                <span className="text-neutral-400">123 Technology Street</span>
              </li>

              <li>
                <span className="block text-neutral-600">Email</span>
                <a
                  href="mailto:info@techshop.com"
                  className="transition hover:text-purple-500"
                >
                  info@techshop.com
                </a>
              </li>

              <li>
                <span className="block text-neutral-600">Phone</span>
                <a
                  href="tel:+1234567890"
                  className="transition hover:text-purple-500"
                >
                  +1 234 567 890
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Opening Hours
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex justify-between gap-6">
                <span>Monday - Friday</span>
                <span className="text-white">9AM - 8PM</span>
              </li>

              <li className="flex justify-between gap-6">
                <span>Saturday</span>
                <span className="text-white">10AM - 6PM</span>
              </li>

              <li className="flex justify-between gap-6">
                <span>Sunday</span>
                <span className="text-neutral-600">Closed</span>
              </li>
            </ul>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-neutral-800 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 <span className="text-purple-500">TechShop</span>. Omid Gholami
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-purple-500">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-purple-500">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
