import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../App.css'; // Ensure this file contains the necessary CSS styles

const Testimonial = () => {
  return (
    <section className="pn_reviews my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center pb-5">Reviews of our valuable users</h1>
          </div>

          {/* Testimonial 1 */}
          <div className="col-md-12 col-lg-4">
            <div className="pn_testimonial_box mt-4 p-3">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/img/profile-1.png"
                  className="profile-image me-3"
                  alt="client"
                />
                <span>
                  <strong>Ishan Bhandari</strong>
                </span>
              </div>
              <p className="text-justify">
                The Application has proved to be a really important asset in my
                journey as a farmer. From sowing to harvesting, we get helpful
                insights.
              </p>
              <div className="d-flex justify-content-end mt-3">
                &nbsp;
                <img
                  className="star-image aligncenter"
                  src="/img/5-stars.svg"
                  alt="client stars"
                />
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-md-12 col-lg-4">
            <div className="pn_testimonial_box mt-4 p-3">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/img/profile-2.png"
                  className="profile-image me-3"
                  alt="client"
                />
                <span>
                  <strong>Gina Lantina</strong>
                </span>
              </div>
              <p className="text-justify">
                What I like most is the idea behind helping our actual heroes,
                our Annadata, who are often left out from tech benefits.
              </p>
              <div className="d-flex justify-content-end mt-3">
                &nbsp;
                <img
                  className="star-image aligncenter"
                  src="/img/5-stars.svg"
                  alt="client stars"
                />
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-md-12 col-lg-4">
            <div className="pn_testimonial_box mt-4 p-3">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/img/profile-3.png"
                  className="profile-image me-3"
                  alt="client"
                />
                <span>
                  <strong>Bhavesh</strong>
                </span>
              </div>
              <p className="text-justify">
                The app works great on both mobile and web. The support for
                native languages is a big win!
              </p>
              <div className="d-flex justify-content-end mt-3">
                &nbsp;
                <img
                  className="star-image aligncenter"
                  src="/img/5-stars.svg"
                  alt="stars"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
