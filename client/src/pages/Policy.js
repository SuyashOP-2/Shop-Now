import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Policy - Ecommerce app"}>
      <div className="row policy">
        <div className="col-md-6">
          <img src="/images/policy.jpg" style={{ width: "80%" }} />
        </div>
        <div className="col-md-6">
          <h2 style={{ fontWeight: "bold", marginTop: "25px" }}>Policy</h2>
          <p>
            Thank you for visiting our ecommerce store. We are committed to
            providing you with the best possible shopping experience and
            ensuring that your personal information is secure and protected at
            all times.
          </p>
          <h4 style={{ fontWeight: "bold", marginTop: "4px" }}>Privacy Policy</h4>
          <p>
            We value your privacy and take great care to protect your personal
            information. We collect only the information necessary to process
            your order and to provide you with the best possible shopping
            experience. We do not sell, rent, or share your personal information
            with any third parties. Please see our Privacy Policy page for more
            information.
          </p>
          <h4 style={{ fontWeight: "bold", marginTop: "4px" }}>Shipping Policy</h4>
          <p>
            We offer free shipping on all orders over $50 within the United
            States. For orders under $50, a flat rate of $5 will be applied. We
            ship all orders within 1-2 business days and provide tracking
            information once your order has shipped. Please see our Shipping
            Policy page for more information.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

