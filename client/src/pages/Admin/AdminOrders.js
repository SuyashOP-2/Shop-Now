import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/authorize";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "deliverd",
    "cancel",
  ]);
  const [changeStatus, setCHangeStatus] = useState("");
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/all-orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(`/api/v1/auth/order-status/${orderId}`, {
        status: value,
      });
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"All Orders Data"}>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Orders</h1>
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
                      <td>
                        <Select
                          bordered={false}
                          onChange={(value) => handleChange(o._id, value)}
                          defaultValue={o?.status}
                        >
                          {status.map((s, i) => (
                            <Option key={i} value={s}>
                              {s}
                            </Option>
                          ))}
                        </Select>
                      </td>
                      <td>{o?.buyer?.name}</td>
                      <td>{moment(o?.createAt).fromNow()}</td>
                      <td>{o?.payment.success ? "Success" : "Failed"}</td>
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
    
      <style>{`
    
      /* AdminOrders Component */
.dashboard {
  padding: 50px 0;
}

h1 {
  margin-bottom: 30px;
}

.table {
  margin-bottom: 0;
}

.table thead th {
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  font-size: 14px;
  color: #6c757d;
  padding-top: 25px;
}

.table tbody tr {
  border-bottom: 1px solid #dee2e6;
}

.table tbody td {
  border: none;
  vertical-align: middle;
  font-size: 14px;
}

.table tbody td:first-child {
  font-weight: bold;
}

.select-status {
  width: 200px;
  height: 30px;
  border-radius: 0;
  border: 1px solid #dee2e6;
  padding: 0 10px;
  background-color: #fff;
  color: #495057;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}

.select-status:focus,
.select-status:hover {
  border-color: #007bff;
  box-shadow: none;
}

.product-card {
  margin-bottom: 30px;
}

.product-card img {
  max-width: 100%;
}

.product-card p {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #6c757d;
  font-weight: 400;
}

@media (max-width: 767px) {
  .dashboard {
    padding: 30px 0;
  }

  .table {
    font-size: 12px;
  }

  .select-status {
    width: 150px;
    height: 28px;
    font-size: 12px;
  }

  .product-card {
    margin-bottom: 20px;
  }

  .product-card p {
    font-size: 12px;
  }
}

@media (max-width: 575px) {
  .select-status {
    width: 120px;
    height: 26px;
    font-size: 10px;
  }

  .product-card p {
    font-size: 10px;
  }
}


      `}</style>

    </Layout>
  );
};

export default AdminOrders;