import { useGetProductsQuery } from '../../api/apiSlice.js';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Products = () => {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();

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
                          <i className="ti-search" />
                        </button>
                      </li>
                      <li>
                        <button>
                         <ShoppingCartIcon  style={{color:"#fff"}} />
                        </button>
                      </li>
                      <li>
                        <button>
                        <FavoriteBorderIcon style={{color:"#fff"}} />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <p>{product.category}</p>
                    <h4 className="card-product__title">
                      <a href="#">{product.title}</a>
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