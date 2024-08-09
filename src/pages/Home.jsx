import BestSeller from "../components/Products/BestSeller/index.jsx"
import HeroCarousel from "../components/HeroCarousel/index.jsx";
import Products from "../components/Products/Trending/index.jsx";

const Home = () => {
  return (
    <div>
      <main className="site-main">
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
                    Us which over of signs divide dominion deep fill bring
                    they are meat beho upon own earth without morning over third.
                    Their male dry. They are great appear whose land fly grass.
                  </p>
                  <a className="button button-hero" href="#">
                    Browse Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HeroCarousel />

        {/* ================ trending product section start ================= */}
        <Products />
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
                  <p>Him she let them sixth saw light</p>
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
        <BestSeller />
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
                      Let one fifth i bring fly to divided face for bearing
                      divide unto seed. Winged divided light Forth.
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
                        The Shopping News also offers top-quality printing
                        services
                      </a>
                    </h4>
                    <p>
                      Let one fifth i bring fly to divided face for bearing
                      divide unto seed. Winged divided light Forth.
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
                      Let one fifth i bring fly to divided face for bearing
                      divide unto seed. Winged divided light Forth.
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
                      onFocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Your Email Address '"
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
    </div>
  );
};

export default Home;
