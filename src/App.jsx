import './App.css'
import './assets/css/main.css'
import './assets/css/style.css'
import './assets/css/bootstrap.min.css'

function App() {


  return (
    <>
      <>
  {/*================ Start Header Menu Area =================*/}
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
                  <i className="ti-search" />
                </button>
              </li>
              <li className="nav-item">
                <button>
                  <i className="ti-shopping-cart" />
                  <span className="nav-shop__circle">3</span>
                </button>{" "}
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
  {/*================ End Header Menu Area =================*/}
  <main className="site-main">
    {/*================ Hero banner start =================*/}
    <section className="hero-banner">
      <div className="container">
        <div className="row no-gutters align-items-center pt-60px">
          <div className="col-5 d-none d-sm-block">
            <div className="hero-banner__img">
              <img
                className="img-fluid"
                src="img/home/hero-banner.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-sm-7 col-lg-6 offset-lg-1 pl-4 pl-md-5 pl-lg-0">
            <div className="hero-banner__content">
              <h4>Shop is fun</h4>
              <h1>Browse Our Premium Product</h1>
              <p>
                Us which over of signs divide dominion deep fill bring they're
                meat beho upon own earth without morning over third. Their male
                dry. They are great appear whose land fly grass.
              </p>
              <a className="button button-hero" href="#">
                Browse Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*================ Hero banner start =================*/}
    {/*================ Hero Carousel start =================*/}
    <section className="section-margin mt-0">
      <div className="owl-carousel owl-theme hero-carousel">
        <div className="hero-carousel__slide">
          <img src="img/home/hero-slide1.png" alt="" className="img-fluid" />
          <a href="#" className="hero-carousel__slideOverlay">
            <h3>Wireless Headphone</h3>
            <p>Accessories Item</p>
          </a>
        </div>
        <div className="hero-carousel__slide">
          <img src="img/home/hero-slide2.png" alt="" className="img-fluid" />
          <a href="#" className="hero-carousel__slideOverlay">
            <h3>Wireless Headphone</h3>
            <p>Accessories Item</p>
          </a>
        </div>
        <div className="hero-carousel__slide">
          <img src="img/home/hero-slide3.png" alt="" className="img-fluid" />
          <a href="#" className="hero-carousel__slideOverlay">
            <h3>Wireless Headphone</h3>
            <p>Accessories Item</p>
          </a>
        </div>
      </div>
    </section>
    {/*================ Hero Carousel end =================*/}
    {/* ================ trending product section start ================= */}
    <section className="section-margin calc-60px">
      <div className="container">
        <div className="section-intro pb-60px">
          <p>Popular Item in the market</p>
          <h2>
            Trending <span className="section-intro__style">Product</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card text-center card-product">
              <div className="card-product__img">
                <img
                  className="card-img"
                  src="img/product/product1.png"
                  alt=""
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
                <p>Accessories</p>
                <h4 className="card-product__title">
                  <a href="single-product.html">Quartz Belt Watch</a>
                </h4>
                <p className="card-product__price">$150.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card text-center card-product">
              <div className="card-product__img">
                <img
                  className="card-img"
                  src="img/product/product2.png"
                  alt=""
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
                <p>Beauty</p>
                <h4 className="card-product__title">
                  <a href="single-product.html">Women Freshwash</a>
                </h4>
                <p className="card-product__price">$150.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card text-center card-product">
              <div className="card-product__img">
                <img
                  className="card-img"
                  src="img/product/product3.png"
                  alt=""
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
                <p>Decor</p>
                <h4 className="card-product__title">
                  <a href="single-product.html">Room Flash Light</a>
                </h4>
                <p className="card-product__price">$150.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card text-center card-product">
              <div className="card-product__img">
                <img
                  className="card-img"
                  src="img/product/product4.png"
                  alt=""
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
                <p>Decor</p>
                <h4 className="card-product__title">
                  <a href="single-product.html">Room Flash Light</a>
                </h4>
                <p className="card-product__price">$150.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card text-center card-product">
              <div className="card-product__img">
                <img
                  className="card-img"
                  src="img/product/product5.png"
                  alt=""
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
                <p>Accessories</p>
                <h4 className="card-product__title">
                  <a href="single-product.html">Man Office Bag</a>
                </h4>
                <p className="card-product__price">$150.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card text-center card-product">
              <div className="card-product__img">
                <img
                  className="card-img"
                  src="img/product/product6.png"
                  alt=""
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
                <p>Kids Toy</p>
                <h4 className="card-product__title">
                  <a href="single-product.html">Charging Car</a>
                </h4>
                <p className="card-product__price">$150.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card text-center card-product">
              <div className="card-product__img">
                <img
                  className="card-img"
                  src="img/product/product7.png"
                  alt=""
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
                <p>Accessories</p>
                <h4 className="card-product__title">
                  <a href="single-product.html">Blutooth Speaker</a>
                </h4>
                <p className="card-product__price">$150.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card text-center card-product">
              <div className="card-product__img">
                <img
                  className="card-img"
                  src="img/product/product8.png"
                  alt=""
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
                <p>Kids Toy</p>
                <h4 className="card-product__title">
                  <a href="#">Charging Car</a>
                </h4>
                <p className="card-product__price">$150.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ================ trending product section end ================= */}
    {/* ================ offer section start ================= */}
    <section
      className="offer"
      id="parallax-1"
      data-anchor-target="#parallax-1"
      data-300-top="background-position: 20px 30px"
      data-top-bottom="background-position: 0 20px"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="offer__content text-center">
              <h3>Up To 50% Off</h3>
              <h4>Winter Sale</h4>
              <p>Him she'd let them sixth saw light</p>
              <a className="button button--active mt-3 mt-xl-4" href="#">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ================ offer section end ================= */}
    {/* ================ Best Selling item  carousel ================= */}
    <section className="section-margin calc-60px">
      <div className="container">
        <div className="section-intro pb-60px">
          <p>Popular Item in the market</p>
          <h2>
            Best <span className="section-intro__style">Sellers</span>
          </h2>
        </div>
        <div className="owl-carousel owl-theme" id="bestSellerCarousel">
          <div className="card text-center card-product">
            <div className="card-product__img">
              <img
                className="img-fluid"
                src="img/product/product1.png"
                alt=""
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
              <p>Accessories</p>
              <h4 className="card-product__title">
                <a href="single-product.html">Quartz Belt Watch</a>
              </h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>
          <div className="card text-center card-product">
            <div className="card-product__img">
              <img
                className="img-fluid"
                src="img/product/product2.png"
                alt=""
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
              <p>Beauty</p>
              <h4 className="card-product__title">
                <a href="single-product.html">Women Freshwash</a>
              </h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>
          <div className="card text-center card-product">
            <div className="card-product__img">
              <img
                className="img-fluid"
                src="img/product/product3.png"
                alt=""
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
              <p>Decor</p>
              <h4 className="card-product__title">
                <a href="single-product.html">Room Flash Light</a>
              </h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>
          <div className="card text-center card-product">
            <div className="card-product__img">
              <img
                className="img-fluid"
                src="img/product/product4.png"
                alt=""
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
              <p>Decor</p>
              <h4 className="card-product__title">
                <a href="single-product.html">Room Flash Light</a>
              </h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>
          <div className="card text-center card-product">
            <div className="card-product__img">
              <img
                className="img-fluid"
                src="img/product/product1.png"
                alt=""
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
              <p>Accessories</p>
              <h4 className="card-product__title">
                <a href="single-product.html">Quartz Belt Watch</a>
              </h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>
          <div className="card text-center card-product">
            <div className="card-product__img">
              <img
                className="img-fluid"
                src="img/product/product2.png"
                alt=""
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
              <p>Beauty</p>
              <h4 className="card-product__title">
                <a href="single-product.html">Women Freshwash</a>
              </h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>
          <div className="card text-center card-product">
            <div className="card-product__img">
              <img
                className="img-fluid"
                src="img/product/product3.png"
                alt=""
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
              <p>Decor</p>
              <h4 className="card-product__title">
                <a href="single-product.html">Room Flash Light</a>
              </h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>
          <div className="card text-center card-product">
            <div className="card-product__img">
              <img
                className="img-fluid"
                src="img/product/product4.png"
                alt=""
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
              <p>Decor</p>
              <h4 className="card-product__title">
                <a href="single-product.html">Room Flash Light</a>
              </h4>
              <p className="card-product__price">$150.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ================ Best Selling item  carousel end ================= */}
    {/* ================ Blog section start ================= */}
    <section className="blog">
      <div className="container">
        <div className="section-intro pb-60px">
          <p>Popular Item in the market</p>
          <h2>
            Latest <span className="section-intro__style">News</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="card card-blog">
              <div className="card-blog__img">
                <img
                  className="card-img rounded-0"
                  src="img/blog/blog1.png"
                  alt=""
                />
              </div>
              <div className="card-body">
                <ul className="card-blog__info">
                  <li>
                    <a href="#">By Admin</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-comments-smiley" /> 2 Comments
                    </a>
                  </li>
                </ul>
                <h4 className="card-blog__title">
                  <a href="single-blog.html">
                    The Richland Center Shooping News and weekly shooper
                  </a>
                </h4>
                <p>
                  Let one fifth i bring fly to divided face for bearing divide
                  unto seed. Winged divided light Forth.
                </p>
                <a className="card-blog__link" href="#">
                  Read More <i className="ti-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="card card-blog">
              <div className="card-blog__img">
                <img
                  className="card-img rounded-0"
                  src="img/blog/blog2.png"
                  alt=""
                />
              </div>
              <div className="card-body">
                <ul className="card-blog__info">
                  <li>
                    <a href="#">By Admin</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-comments-smiley" /> 2 Comments
                    </a>
                  </li>
                </ul>
                <h4 className="card-blog__title">
                  <a href="single-blog.html">
                    The Shopping News also offers top-quality printing services
                  </a>
                </h4>
                <p>
                  Let one fifth i bring fly to divided face for bearing divide
                  unto seed. Winged divided light Forth.
                </p>
                <a className="card-blog__link" href="#">
                  Read More <i className="ti-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="card card-blog">
              <div className="card-blog__img">
                <img
                  className="card-img rounded-0"
                  src="img/blog/blog3.png"
                  alt=""
                />
              </div>
              <div className="card-body">
                <ul className="card-blog__info">
                  <li>
                    <a href="#">By Admin</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-comments-smiley" /> 2 Comments
                    </a>
                  </li>
                </ul>
                <h4 className="card-blog__title">
                  <a href="single-blog.html">
                    Professional design staff and efficient equipment you’ll
                    find we offer
                  </a>
                </h4>
                <p>
                  Let one fifth i bring fly to divided face for bearing divide
                  unto seed. Winged divided light Forth.
                </p>
                <a className="card-blog__link" href="#">
                  Read More <i className="ti-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ================ Blog section end ================= */}
    {/* ================ Subscribe section start ================= */}
    <section className="subscribe-position">
      <div className="container">
        <div className="subscribe text-center">
          <h3 className="subscribe__title">Get Update From Anywhere</h3>
          <p>
            Bearing Void gathering light light his eavening unto dont afraid
          </p>
          <div id="mc_embed_signup">
            <form
              target="_blank"
              action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
              method="get"
              className="subscribe-form form-inline mt-5 pt-1"
            >
              <div className="form-group ml-sm-auto">
                <input
                  className="form-control mb-1"
                  type="email"
                  name="EMAIL"
                  placeholder="Enter your email"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Your Email Address '"
                />
                <div className="info" />
              </div>
              <button
                className="button button-subscribe mr-auto mb-1"
                type="submit"
              >
                Subscribe Now
              </button>
              <div style={{ position: "absolute", left: "-5000px" }}>
                <input
                  name="b_36c4fd991d266f23781ded980_aefe40901a"
                  tabIndex={-1}
                  defaultValue=""
                  type="text"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* ================ Subscribe section end ================= */}
  </main>
  {/*================ Start footer Area  =================*/}
  <footer className="footer">
    <div className="footer-area">
      <div className="container">
        <div className="row section_gap">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget tp_widgets">
              <h4 className="footer_title large_title">Our Mission</h4>
              <p>
                So seed seed green that winged cattle in. Gathering thing made
                fly you're no divided deep moved us lan Gathering thing us land
                years living.
              </p>
              <p>
                So seed seed green that winged cattle in. Gathering thing made
                fly you're no divided deep moved
              </p>
            </div>
          </div>
          <div className="offset-lg-1 col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget tp_widgets">
              <h4 className="footer_title">Quick Links</h4>
              <ul className="list">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">Brand</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget instafeed">
              <h4 className="footer_title">Gallery</h4>
              <ul className="list instafeed d-flex flex-wrap">
                <li>
                  <img src="img/gallery/r1.jpg" alt="" />
                </li>
                <li>
                  <img src="img/gallery/r2.jpg" alt="" />
                </li>
                <li>
                  <img src="img/gallery/r3.jpg" alt="" />
                </li>
                <li>
                  <img src="img/gallery/r5.jpg" alt="" />
                </li>
                <li>
                  <img src="img/gallery/r7.jpg" alt="" />
                </li>
                <li>
                  <img src="img/gallery/r8.jpg" alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="offset-lg-1 col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget tp_widgets">
              <h4 className="footer_title">Contact Us</h4>
              <div className="ml-40">
                <p className="sm-head">
                  <span className="fa fa-location-arrow" />
                  Head Office
                </p>
                <p>123, Main Street, Your City</p>
                <p className="sm-head">
                  <span className="fa fa-phone" />
                  Phone Number
                </p>
                <p>
                  +123 456 7890 <br />
                  +123 456 7890
                </p>
                <p className="sm-head">
                  <span className="fa fa-envelope" />
                  Email
                </p>
                <p>
                  free@infoexample.com <br />
                  www.infoexample.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row d-flex">
          <p className="col-lg-12 footer-text text-center">
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with{" "}
            <i className="fa fa-heart" aria-hidden="true" /> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
  {/*================ End footer Area  =================*/}
</>

    </>
  )
}

export default App
