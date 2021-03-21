import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col, Card, message } from "antd";
import {
  UserOutlined,
  LockOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

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
      message.success(
        `Payment has been done. Please note your payment id for further reference. ${response.razorpay_payment_id}`
      );
      // form.resetFields();
      document.getElementById("form").reset();
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
    <div style={{ backgroundColor: "#001529" }}>
      <Row style={{ height: "100vh" }} justify="center" align="middle">
        <Col md={8}>
          <Card style={{ borderRadius: "10px" }}>
            <Row justify="center">
              <img
                style={{ height: "150px", marginBottom: "40px" }}
                src={"https://client.a2markets.com/Account/GetLoginImage"}
              />
            </Row>

            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              id="form"
              onFinish={openPayModal}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please add valid amount",
                  },
                ]}
              >
                <Input
                  prefix={
                    <ArrowRightOutlined className="site-form-item-icon" />
                  }
                  placeholder="Enter Amount In INR (MAX INR 40,000)"
                  type="number"
                  onChange={(e) => setPay(e.target.value)}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Pay Now
                </Button>
              </Form.Item>
              <Row justify="center">
                <p style={{ color: "grey", fontSize: "12px" }}>
                  By clicking on Pay Now Button, you agrees the A2Markets Terms &
                  Conditions Policy and Refunds & Cancellation Policy.
                </p>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
    // <div>
    //   <h1 style={{ textAlign: "center" }}>A2 Markets</h1>
    //   <input
    //     onChange={(e) => setPay(e.target.value)}
    //     type="number"
    //     placeholder="Enter Amount In INR"
    //   />
    //   <button onClick={openPayModal}>Pay</button>
    // </div>
  );
}

export default Payment;
