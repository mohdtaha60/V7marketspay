import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Payment() {
  const [pay, setPay] = useState();

  const options = {
    key: "rzp_live_DPg0UrkmwARL7k",
    // key: "rzp_test_UaDS2uihjYJINF",
    amount: pay * 100,
    name: "A2 Markets",
    description: "Pay",
    image: "https://client.a2markets.com/Account/GetLoginImage",
    handler: function (response) {
      alert(
        `Payment has been done. Please note your payment id for further reference. ${response.razorpay_payment_id}`
      );
    },
    // prefill: {
    //   name: "",
    //   contact: "",
    //   email: "",
    // },
    notes: {
      address: "A2markets",
    },
    theme: {
      color: "blue",
      hide_topbar: false,
    },
  };

  const openPayModal = () => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>A2 Markets</h1>
      <input
        onChange={(e) => setPay(e.target.value)}
        type="number"
        placeholder="Enter Amount In INR"
      />
      <button onClick={openPayModal}>Pay</button>
    </div>
  );
}

export default Payment;
