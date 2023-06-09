import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            At Ecommerce, we are dedicated to providing our customers with the
            best shopping experience possible. Our team of experts carefully
            curates a selection of high-quality products from around the world
            to ensure that our customers can find exactly what they need.
            Whether you are looking for the latest fashion trends or the newest
            tech gadgets, we have something for everyone.
            We pride ourselves on our exceptional customer service and fast, reliable shipping. If you
            have any questions or concerns, our friendly and knowledgeable
            customer support team is always here to help. Thank you for choosing
            Ecommerce, and we hope to see you soon!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
