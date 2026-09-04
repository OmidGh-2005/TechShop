import { useEffect, useState } from "react";
import { getData } from "../../api/ProductApi";
import { useParams } from "react-router-dom";
import { Star, ShoppingCart, Truck } from "lucide-react";

const ItemDetailPage = () => {
  const [product, setProduct] = useState([]);
  console.log(product);

  const params = useParams();

  useEffect(() => {
    getData(`/products/${params.productId}`).then((data) => setProduct(data));
  }, []);

  const discountedPrice = product.price
    ? (product.price * (1 - (product.discountPercentage || 0) / 100)).toFixed(2)
    : null;

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 gap-8">
      <div className="w-full flex items-start justify-center px-8 py-10">
        <div className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-10 rounded-3xl border border-neutral-800 bg-neutral-900 shadow-[0_8px_30px_rgba(168,85,247,0.15)]  px-15 py-5">
          <div className="md:w-80 shrink-0 rounded-2xl overflow-hidden bg-linear-to-br from-neutral-800/60 to-neutral-800/20 border border-neutral-800/60 px-12 py-14 flex items-center justify-center">
            <img
              src={product.images?.[2]}
              alt={product.title || ""}
              className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            />
          </div>

          <div className="w-full flex flex-col justify-center gap-5">
            {product.category && (
              <span className="w-fit uppercase   text-purple-400 font-medium bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1">
                {product.category}
              </span>
            )}

            <div className="flex flex-col gap-2 border-b border-neutral-800 pb-5">
              <h2 className="text-white text-3xl font-bold tracking-tight">
                {product.title}
              </h2>

              <div className="flex items-center gap-4">
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-semibold text-white">
                    ${discountedPrice}
                  </p>
                  {product.discountPercentage > 0 && (
                    <>
                      <p className="text-sm text-neutral-500 line-through">
                        ${product.price}
                      </p>
                      <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-full px-2 py-0.5">
                        -{Math.round(product.discountPercentage)}%
                      </span>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-1 text-sm text-neutral-300 bg-neutral-800/60 rounded-full px-2.5 py-1">
                  <span>{product.rating}</span>
                  <Star
                    className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed tracking-wide max-w-md">
              {product.description}
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <Truck className="w-4 h-4 text-purple-400" strokeWidth={1.75} />
              {product.stock > 0
                ? `In stock — ${product.stock} available`
                : "Out of stock"}
            </div>

            <button className="mt-2 w-fit flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-xl px-6 py-3 shadow-[0_4px_20px_rgba(168,85,247,0.35)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
              <ShoppingCart className="w-4 h-4" strokeWidth={2} />
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-neutral-950 flex items-start justify-center px-8 pb-10">
        <div className="w-full max-w-8xl flex flex-col gap-6 rounded-2xl border border-neutral-800 bg-neutral-900 shadow-[0_8px_30px_rgba(168,85,247,0.15)] p-8">
          <h3 className="text-white text-lg font-semibold">Reviews</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {product.reviews?.map((item) => (
              <div
                key={item.reviewerEmail}
                className="flex flex-col gap-2 rounded-xl border border-neutral-800/60 bg-neutral-800/30 p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm font-medium">
                    {item.reviewerName}
                  </span>
                  <span className="flex items-center gap-0.5 text-xs text-neutral-400">
                    {item.rating}{" "}
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  </span>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
