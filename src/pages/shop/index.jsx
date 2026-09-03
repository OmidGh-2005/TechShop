import { useState, useEffect } from "react";
import { getData } from "../../api/ProductApi";
import { Link, useParams, useSearchParams } from "react-router-dom";
import ItemSection from "../../components/ItemSection";

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  const params = useParams();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getData(`/products/category/${params.category}`);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    if (params.category) {
      fetchProducts();
    }
  }, [params.category]);

  return (
    <div className="min-h-screen w-full bg-neutral-950">
      <div className="flex flex-col items-center">
        <p className="w-fit max-w-[90%] rounded-2xl border border-neutral-800 bg-neutral-900 px-6 py-3 text-center font-bold tracking-widest text-white">
          {title || params.category}
        </p>

        {products.length === 0 ? (
          <p className="mt-20 text-neutral-500">
            No products found in this category.
          </p>
        ) : (
          <div className="container mx-auto grid grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 sm:px-12 lg:grid-cols-3 lg:px-20">
            {products.map((item) => (
              <Link to={`${item.id}`}>
                <ItemSection item={item} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
