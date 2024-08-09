import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const basketItems = useSelector(state => state.basket.items); 
  const wishlist = useSelector((state) => state.basket.wishlist);

  return (
    <div>
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand logo_h" href="index.html">
                <img src="img/logo.png" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="category.html">
                          Shop Category
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="single-product.html">
                          Product Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="checkout.html">
                          Product Checkout
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="confirmation.html">
                          Confirmation
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="cart.html">
                          Shopping Cart
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="single-blog.html">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="login.html">
                          Login
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="register.html">
                          Register
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="tracking-order.html">
                          Tracking
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
                <ul className="nav-shop">
                  <li className="nav-item">
                    <button>
                     <SearchIcon />
                    </button>
                  </li>
                  <li className="nav-item">
                    <button>
                      <FavoriteIcon />
                      <span className="nav-shop__circle">{wishlist?.length || 0}</span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button>
                      <ShoppingCartIcon />
                      <span className="nav-shop__circle">{basketItems?.length || 0}</span>
                    </button>
                  </li>
                  <li className="nav-item" style={{ marginLeft: "8px" }}>
                    <button>
                      <Link to="/admin"> <PersonIcon /></Link>
                     
                    </button>
                  </li>

                  <li className="nav-item">
                    <a className="button button-header" href="#">
                      Buy Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
