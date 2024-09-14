function Service() {
  return (
    <div className="content-fluid content-fluid-carousel" id="service-view">
      <div
        id="carouselExampleInterval"
        className="carousel slide carousel-style"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="../home2.jpg" className="d-block w-100 img-caroulel" alt="..." />
                <div className="text-img-carousel">
                    <h1>Wealth Management</h1>
                    <h5>Wealth Management designs personalized strategies based on the client's unique profile and financial goals, aiming to ensure the stability and sustained growth of their wealth</h5>
                </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="../home3.jpg" className="d-block w-100 img-caroulel" alt="..." />
            <div className="text-img-carousel">
                    <h1>Financial Advisory</h1>
                    <h5>It focuses on providing personalized guidance to help users achieve their financial goals. This includes advice on investment planning, expense control and optimization, and tailored financial strategies. The aim is to empower users to make informed decisions that enable them to manage their money more effectively, maximize returns, and ensure long-term financial stability.</h5>
                </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Service;
