import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/authorize";

const AdminDashboard = () => {
  const [auth] = useAuth();

  const styles = {
    container: {
      margin: "1rem",
      padding: "1rem",
      backgroundColor: "#f9f9f9",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto",
      padding: "1.5rem",
      backgroundColor: "#fff",
      borderRadius: "1rem",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    },
    heading: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "1.5rem",
    },
    label: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#777",
      marginBottom: "0.5rem",
    },
    value: {
      fontSize: "1.4rem",
      color: "#333",
      marginBottom: "1.5rem",
    },
    imageContainer: {
      flex: "0 0 auto",
      marginRight: "3rem",
    },
    image: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      marginBottom: "1.5rem",
    },
    detailsContainer: {
      flex: "1 1 auto",
      textAlign: "left",
    },
  };

  return (
    <Layout>
      <div style={styles.container}>
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div style={styles.card}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={styles.imageContainer}>
                  <img
                    src="/images/admin.jpg"
                    alt="Admin"
                    style={styles.image}
                  />
                </div>
                <div style={styles.detailsContainer}>
                  <h2 style={styles.heading}>Admin Dashboard</h2>
                  <div>
                    <div>
                      <label style={styles.label}>Name:</label>
                      <div style={styles.value}>{auth?.user?.name}</div>
                    </div>
                    <div>
                      <label style={styles.label}>Email:</label>
                      <div style={styles.value}>{auth?.user?.email}</div>
                    </div>
                    <div>
                      <label style={styles.label}>Phone:</label>
                      <div style={styles.value}>{auth?.user?.phone}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;

