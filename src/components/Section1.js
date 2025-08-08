import React from "react";
import "./Section1.css";

const SectionOne = () => {
  return (
    <section className="section-one">
      <div className="container">
        {/* Embedded Google Map */}
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

        {/* Hours and Contact Info */}
        <div className="info">
          <h3>Store Hours</h3>
          <p>
            Mon - Fri: 10am - 6pm
            <br />
            Sat: 10am - 5pm
            <br />
            Sun: Closed
          </p>

          <h3>Contact Us</h3>
          <p>
            2306 Front St STE 5, Slidell, LA
            <br />
            Phone: (123) 456-7890
            <br />
            Email: info@christyslagniappe.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
