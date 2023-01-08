import React from "react";
import img from "../Images/1775.png";
import imag from "../Images/1776.png";
import Lan from "../Images/lan.svg";
import Phones from "../Images/phones.png";

const Phone = () => {
  return (
    <>
      <div style={{ marginTop: "70px" }}>
        <div
          style={{
            backgroundImage: `url(${img})`,
            width: "100%",
            height: "550px",
            flex: "1",
            background: "cover",
            transform: "100px",
          }}
        >
          <img style={{ width: "100%", height: "550px" }} src={imag} />
          <p
            style={{
              marginTop: "-500px",
              color: "white",
              marginLeft: "130px",
              fontFamily: "Poppins",
              letterSpacing: "10px",
            }}
          >
            TYPE TEXT HERE
          </p>
          <p
            style={{
              marginTop: "50px",
              marginLeft: "130px",
              color: "white",
              fontFamily: "Poppins",
              fontSize: "35px",
              fontWeight: "bolder",
            }}
          >
            360 Degree Education Hub
          </p>

          <div
            style={{
              display: "flex",
              marginLeft: "100px",
              fontWeight: "bolder",
              fontFamily: "Poppins",
            }}
          >
            <div style={{ marginLeft: "20px" }}>
              <div style={{ display: "flex", gap: "30px" }}>
                <img src={Lan} />
                <p style={{ color: "white" }}>Learning</p>
              </div>
              <div style={{ display: "flex", gap: "30px", marginTop: "15px" }}>
                <img src={Lan} />
                <p style={{ color: "white" }}>Virtual Classroom</p>
              </div>
              <div style={{ display: "flex", gap: "30px", marginTop: "15px" }}>
                <img src={Lan} />
                <p style={{ color: "white" }}>Social Forum</p>
              </div>
              <div style={{ display: "flex", gap: "30px", marginTop: "15px" }}>
                <img src={Lan} />
                <p style={{ color: "white" }}>Remedial class</p>
              </div>
            </div>
            <div style={{ marginLeft: "100px" }}>
              <div style={{ display: "flex", gap: "30px" }}>
                <img src={Lan} />
                <p style={{ color: "white" }}>Past Question Paper</p>
              </div>
              <div style={{ display: "flex", gap: "30px", marginTop: "15px" }}>
                <img src={Lan} />
                <p style={{ color: "white" }}>Practice Exam</p>
              </div>
              <div style={{ display: "flex", gap: "30px", marginTop: "15px" }}>
                <img src={Lan} />
                <p style={{ color: "white" }}>Mobile app</p>
              </div>
              <div style={{ display: "flex", gap: "30px", marginTop: "15px" }}>
                <img src={Lan} />
                <p style={{ color: "white" }}>eBook</p>
              </div>
            </div>
          </div>
        </div>
        <img
          style={{
            marginLeft: "800px",
            height: "650px",
            width: "300px",
            marginTop: "-600px",
            background: "#FFFFFF",
          }}
          src={Phones}
        />
      </div>
    </>
  );
};

export default Phone;
