import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/authorize";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <Layout title={"Your Orders"}>
      <div className="container-flui p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            {/* <h1 className="text-center">All Orders</h1> */}
            {orders?.map((o, i) => {
              return (
                <div className="border shadow">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col"> date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{i + 1}</td>
                        <td>{o?.status}</td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createAt).fromNow()}</td>
                        <td>{o?.payment.success ? "Success" : "Failure"}</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container">
                    {o?.products?.map((p, i) => (
                      <div className="row mb-2 p-3 card flex-row" key={p._id}>
                        <div className="col-md-4">
                          <img
                            src={`/api/v1/product/product-photo/${p._id}`}
                            className="card-img-top"
                            alt={p.name}
                            width="100px"
                            height={"100px"}
                          />
                        </div>
                        <div className="col-md-8">
                          <p>{p.name}</p>
                          <p>{p.description.substring(0, 30)}</p>
                          <p>Price : {p.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style>
        {
          `.dashboard {
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 20px;
}

.card {
  display: flex;
  align-items: center;
}

.dashboard-image {
  width: 200px;
  margin-right: auto;
  margin-left: 100px;
}

.img-fluid {
  width: 100%;
  height: auto;
}

.text-right {
  flex-direction: column-reverse;
  align-items: flex-end;
}

@media (max-width: 767px) {
  .dashboard {
    padding: 10px;
  }
  
  .dashboard-image {
    width: 100px;
    margin-left: 0;
    margin-right: 20px;
  }
}

@media (max-width: 576px) {
  .dashboard {
    padding: 5px;
  }
  
  .dashboard-image {
    width: 75px;
    margin-right: 10px;
  }
}

@media (max-width: 374px) {
  .dashboard-image {
    display: none;
  }
}

.table {
  width: 100%;
  margin-bottom: 0;
  background-color: transparent;
}

.table td,
.table th {
  padding: .75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table tbody + tbody {
  border-top: 2px solid #dee2e6;
}

.table-sm td,
.table-sm th {
  padding: .3rem;
}

.table-bordered {
  border: 1px solid #dee2e6;
}

.table-bordered td,
.table-bordered th {
  border: 1px solid #dee2e6;
}

.table-bordered thead td,
.table-bordered thead th {
  border-bottom-width: 2px;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0,0,0,.05);
}

.table-hover tbody tr:hover {
  background-color: rgba(0,0,0,.075);
}

@media (max-width: 767px) {
  .table-responsive-md {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
`
        }
      </style>
    </Layout>
  );
};

export default Orders;