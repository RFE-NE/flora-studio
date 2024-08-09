import { useGetProductsQuery } from "../../../api/apiSlice.js";

const BestSeller = () => {
  const { data: products = [], isLoading, error } = useGetProductsQuery();

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
                        <i className="ti-search" />
                      </button>
                    </li>
                    <li>
                      <button>
                        <i className="ti-shopping-cart" />
                      </button>
                    </li>
                    <li>
                      <button>
                        <i className="ti-heart" />
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <p>{product.category}</p>
                  <h4 className="card-product__title">
                    <a href="single-product.html">{product.title}</a>
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
