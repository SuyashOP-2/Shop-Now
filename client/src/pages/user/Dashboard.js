import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/authorize";
// import "./Dashboard.css";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3 d-flex flex-row-reverse align-items-center">
              <div className="dashboard-image ml-3">
                <img src="/images/admin.jpg" alt="Admin" className="img-fluid rounded-circle" />
              </div>
              <div className="text-right">
                <h3>{auth?.user?.name}</h3>
                <h3>{auth?.user?.email}</h3>
                <h3>{auth?.user?.address}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .dashboard {
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

        @media screen and (max-width: 767px) {
          .dashboard {
            justify-content: center;
            align-items: center;
            padding: 10px;
          }

          .col-md-3 {
            margin-bottom: 20px;
          }

          .dashboard-image {
            margin-right: 0;
            margin-left: 0;
            width: 150px;
          }

          .text-right {
            margin-left: 10px;
            margin-right: auto;
            text-align: center;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Dashboard;
