import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCartStore } from "../../store/cartStore";

const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  const getPrice = (item) =>
    item.price * (1 - (item.discountPercentage || 0) / 100);

  const subtotal = cart.reduce(
    (sum, item) => sum + getPrice(item) * (item.quantity || 1),
    0
  );

  if (cart.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-neutral-950 items-center justify-center gap-4 px-8">
        <div className="rounded-full bg-neutral-900 border border-neutral-800 p-6">
          <ShoppingBag className="w-10 h-10 text-purple-400" strokeWidth={1.5} />
        </div>
        <h2 className="text-white text-xl font-semibold">Your cart is empty</h2>
        <p className="text-neutral-500 text-sm">
          Looks like you haven't added anything yet.
        </p>
        <Link
          to="/"
          className="mt-2 flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-xl px-6 py-3 shadow-[0_4px_20px_rgba(168,85,247,0.35)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2} />
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 gap-8 px-8 py-10">
      <h2 className="text-white text-2xl font-bold tracking-tight">
        Your Cart
      </h2>

      <div className="w-full flex flex-col lg:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-5 rounded-2xl border border-neutral-800 bg-neutral-900 shadow-[0_8px_30px_rgba(168,85,247,0.1)] p-4"
            >
              <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-linear-to-br from-neutral-800/60 to-neutral-800/20 border border-neutral-800/60 flex items-center justify-center">
                <img
                  src={item.images?.[0] || item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 flex flex-col gap-1 min-w-0">
                <h3 className="text-white text-sm font-medium truncate">
                  {item.title}
                </h3>
                <span className="text-purple-400 text-xs font-medium">
                  ${getPrice(item).toFixed(2)}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-neutral-800/60 rounded-full px-1 py-1">
                <button
                  onClick={() =>
                    decreaseQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))
                  }
                  className="w-7 h-7 flex items-center justify-center rounded-full text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={2} />
                </button>
                <span className="w-5 text-center text-sm text-white">
                  {item.quantity || 1}
                </span>
                <button
                  onClick={() => increaseQuantity(item.id, (item.quantity || 1) + 1)}
                  className="w-7 h-7 flex items-center justify-center rounded-full text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={2} />
                </button>
              </div>

              <span className="w-16 text-right text-white text-sm font-semibold">
                ${(getPrice(item) * (item.quantity || 1)).toFixed(2)}
              </span>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-neutral-500 hover:text-red-400 transition-colors"
              >
                <Trash2 className="w-4 h-4" strokeWidth={1.75} />
              </button>
            </div>
          ))}
        </div>

        <div className="lg:w-80 shrink-0 h-fit rounded-2xl border border-neutral-800 bg-neutral-900 shadow-[0_8px_30px_rgba(168,85,247,0.15)] p-6 flex flex-col gap-4">
          <h3 className="text-white text-lg font-semibold border-b border-neutral-800 pb-4">
            Order Summary
          </h3>

          <div className="flex items-center justify-between text-sm text-neutral-400">
            <span>Subtotal</span>
            <span className="text-white">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-neutral-400">
            <span>Shipping</span>
            <span className="text-emerald-400">Free</span>
          </div>

          <div className="flex items-center justify-between border-t border-neutral-800 pt-4 text-white font-semibold">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <button className="mt-2 w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-xl px-6 py-3 shadow-[0_4px_20px_rgba(168,85,247,0.35)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
