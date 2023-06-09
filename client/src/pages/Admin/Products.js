import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);


  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <div className="d-flex flex-wrap">
            {products?.map((pheto) => (
              <Link
                key={pheto._id}
                to={`/dashboard/admin/product/${pheto.slug}`}
                className="product-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${pheto._id}`}
                    className="card-img-top"
                    alt={pheto.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{pheto.name}</h5>
                    <p className="card-text">{pheto.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style>{`
    
      .container {
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard {
  margin-top: 30px;
  margin-left: 50px;

}

.row {
  max-width: 100%;
}





.col-md-9 {
  flex: 0 0 85%;
  max-width: 85%;
}

@media (min-width: 768px) {
  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
}

@media (min-width: 992px) {
  .col-md-3 {
    flex: 0 0 20%;
    max-width: 20%;
  }

  .col-md-9 {
    flex: 0 0 80%;
    max-width: 80%;
  }
}

@media (min-width: 1200px) {
  .col-md-3 {
    flex: 0 0 15%;
    max-width: 15%;
  }

  .col-md-9 {
    flex: 0 0 85%;
    max-width: 85%;
  }
}


      `}</style>
    </Layout>
  );
};

export default Products;
