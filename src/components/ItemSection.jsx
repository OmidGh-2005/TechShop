const ItemSection = ({ item }) => {
  return (
    <div>
      <div
        key={item.id}
        className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-4 shadow-[0_0_30px_-8px_rgba(255,255,255,0.2)] transition-all duration-300 hover:border-neutral-700 hover:shadow-[0_8px_40px_-6px_rgba(168,85,247,0.55)]"
      >
        <div className="flex h-40 items-center justify-center overflow-hidden">
          <img
            className="h-full w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-110"
            src={item.images?.[2] ?? item.thumbnail}
            alt={item.title}
          />
        </div>
        <p className="mt-4 font-semibold text-white">{item.title}</p>
        <p className="text-purple-400">${item.price}</p>
      </div>
    </div>
  );
};

export default ItemSection;
