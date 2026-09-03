import pic from "../assets/ubeyonroad-Po-LiCdN28M-unsplash.jpg";

const HeroSection = () => {
  return (
    <section className="w-full h-screen bg-neutral-950 overflow-hidden">
      <div className="container mx-auto h-full px-6 lg:px-20">
        <div className="grid h-full grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-purple-500">
              WELCOME<span className="text-white"> TO THE </span>
              TECH<span className="text-white">SHOP</span>
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              The Future of
              <span className="block text-purple-500">Technology</span>
            </h1>

            <p className="mt-3 max-w-lg text-neutral-500 sm:text-lg">
              Discover the latest technology, powerful devices, and innovative
              products designed to make your life easier and smarter.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="cursor-pointer rounded-full bg-purple-600 px-6 py-3 font-medium text-white transition duration-300 hover:bg-purple-800 hover:text-neutral-700 shadow-[0_0_20px_rgba(255,255,255,0.25)]">
                Shop Now
              </button>

              <button className="cursor-pointer rounded-full border border-neutral-700 px-6 py-3 font-medium text-white transition duration-300 hover:border-purple-500 hover:text-purple-500  shadow-[0_0_20px_rgba(255,255,255,0.25)]">
                Explore
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative h-110 w-full max-w-170 overflow-hidden rounded-2xl border border-neutral-700 shadow-[0_0_40px_rgba(255,255,255,0.25)]">
              <img
                src={pic}
                alt="Technology products"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-neutral-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
