import React from "react";
import "./Section1.css";

const SectionOne = () => {
  return (
    <section className="section-one">
      <div className="container">
        {/* Visit Us Title */}
        <h2 className="section-title">Visit Us</h2>

        {/* Embedded Google Map */}
        <div className="map-container-wrapper">
          <div className="map-container">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d609.1290894328463!2d-89.78527795578162!3d30.272576019253155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889de532e6cf226d%3A0xe7ca0c2201c11eb5!2sChristy&#39;s%20Lagniappe%20Music!5e0!3m2!1sen!2sus!4v1754624668852!5m2!1sen!2sus"
              width="500"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Hours and Contact Info */}
        <div className="info">
          <h3>Store Hours</h3>
          <p>Mon: 10am - 6pm</p>
          <p>Tues: 10am - 6pm</p>
          <p>Wed: 10am - 7pm</p>
          <p>Thurs: 10am - 6pm</p>
          <p>Fri: 10am - 6pm</p>
          <p>Sat: 10am - 5pm</p>
          <p>Sun: Closed</p>

          <h3>Contact Us</h3>
          <p>
            2306 Front St STE 5, Slidell, LA
            <br />
            Phone: (985) 288-0051
            <br />
            Email: CLMSLIDELL@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
