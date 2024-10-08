import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../../api/apiSlice.js";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  addItemToBasket,
  addToWishlist,
} from "../../../store/productsReducer.js";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products = [], isLoading, isError } = useGetProductsQuery();
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products.</div>;
  }

  return (
    <div>
      <section className="section-margin calc-60px">
        <div className="container">
          <div className="section-intro pb-60px">
            <p>Popular Item in the market</p>
            <h2>
              Trending <span className="section-intro__style">Product</span>
            </h2>
          </div>
          <div className="row">
            {products?.map((product) => (
              <div key={product.id} className="col-md-6 col-lg-4 col-xl-3">
                <div className="card text-center card-product">
                  <div className="card-product__img">
                    <img
                      className="card-img"
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
