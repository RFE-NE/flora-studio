import { useGetProductsQuery } from "../../../api/apiSlice.js";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  addItemToBasket,
  addToWishlist,
} from "../../../store/productsReducer.js";
import { useDispatch, useSelector } from "react-redux";

const BestSeller = () => {
  const dispatch = useDispatch();

  const { data: products = [], isLoading, error } = useGetProductsQuery();
  const wishlist = useSelector((state) => state.basket.wishlist);

  const handleAddToBasket = (product) => {
    dispatch(addItemToBasket(product));
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  const handleRemoveFromWishlist = (product) => {
    dispatch(handleRemoveFromWishlist(product));
  };

  const isProductInWishlist = (productId) => {
    return wishlist.some((product) => product.id === productId);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;

  const bestSellers = [...products]
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 4);

  return (
    <div>
      <section className="section-margin calc-60px">
        <div className="container">
          <div className="section-intro pb-60px">
            <p>Popular Item in the market</p>
            <h2>
              Best <span className="section-intro__style">Sellers</span>
            </h2>
          </div>
          <div className="owl-carousel owl-theme" id="bestSellerCarousel">
            {bestSellers?.map((product) => (
              <div className="card text-center card-product" key={product.id}>
                <div className="card-product__img">
                  <img
                    className="img-fluid"
                    src={product.image}
                    alt={product.title}
                  />
                  <ul className="card-product__imgOverlay">
                    <li>
                      <button>
                        <SearchIcon style={{ color: "#fff" }} />
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleAddToBasket(product)}>
                        <ShoppingCartIcon style={{ color: "#fff" }} />
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          isProductInWishlist(product.id)
                            ? handleRemoveFromWishlist(product)
                            : handleAddToWishlist(product)
                        }
                      >
                        {isProductInWishlist(product.id) ? (
                          <FavoriteIcon style={{ color: "#fff" }} />
                        ) : (
                          <FavoriteBorderIcon style={{ color: "#fff" }} />
                        )}
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <p>{product.category}</p>
                  <h4 className="card-product__title">
                    <Link
                      to={`/products/${product.id}`}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      <h5 className="card-title" style={{ color: "black" }}>
                        {product.title}
                      </h5>
                    </Link>
                  </h4>
                  <p className="card-product__price">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestSeller;
