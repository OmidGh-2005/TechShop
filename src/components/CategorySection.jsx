import { categories } from "../constants/mock";
import { useNavigate } from "react-router-dom";

const CategorySection = () => {
  const navigate = useNavigate();
  const handleClick = ({ category, title }) =>
    navigate(`/shop/${category}?title=${title}`);
  return (
    <section className=" w-full bg-neutral-950 px-30 py-20">
      <div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-35">
        {categories.map((item) => (
          <div
            onClick={() => handleClick(item)}
            key={item.id}
            className={`group relative cursor-pointer flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-4 
              shadow-[0_0_30px_-8px_rgba(255,255,255,0.2)] transition-all duration-300 
              hover:border-neutral-700 hover:shadow-[0_8px_40px_-6px_rgba(168,85,247,0.55)]`}
          >
            <p className="absolute flex justify-center items-center text-sm font-semibold text-white">
              {item.title}
            </p>

            <img
              src={item.image}
              alt={item.category}
              className="mx-auto h-24 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-110 sm:h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
