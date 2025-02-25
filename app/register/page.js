"use client";
import React from "react";
import { Form, Input, Button,message } from "antd";

const Register = () => {
  const [form]=Form.useForm();

  async function registerUser(values) {
    console.log("Sending values:", values);
  
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
  
      const data = await response.json();
      console.log("data",data);
      if (response.ok) {
        message.success(data.message);

        form.resetFields();
      } else {
        console.error("Server error:", data.message);
        message.error(data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
      message.error("Something went wrong in register", error);
    }
  }
  


  return (
    <section className="mt-16 max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-primary text-xl font-semibold text-center mb-4">Register</h1>
      <Form form={form} name="register" layout="vertical" autoComplete="off" onFinish={registerUser} >
       
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your Name!" }]}
        >
          <Input 
            placeholder="Enter your full name" 
            className="w-full border-0 border-b-2 border-gray-400 hover:!border-primary focus:!border-primary focus:!outline-none focus:!ring-0 font-bold"
            style={{ boxShadow: "none", outline: "none" }}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input 
            placeholder="Enter your email" 
            className="w-full border-0 border-b-2 border-gray-400 hover:!border-primary focus:!border-primary focus:!outline-none focus:!ring-0 font-bold"
            style={{ boxShadow: "none", outline: "none" }}
          />
        </Form.Item>

        <Form.Item
          label="Contact No."
          name="contactno"
          rules={[
            { required: true, message: "Please input your Contact number!" },
            { pattern: /^[0-9]{10}$/, message: "Please enter a valid 10-digit Contact number!" },
          ]}
        >
          <Input 
            placeholder="Enter your contact number" 
            maxLength={10} 
            className="w-full border-0 border-b-2 border-gray-400 hover:!border-primary focus:!border-primary focus:!outline-none focus:!ring-0 font-bold"
            style={{ boxShadow: "none", outline: "none" }}
         />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please enter your Address!" }]}
        >
          <Input.TextArea 
            placeholder="Enter your address" 
            rows={3} 
            className="w-full border-0 border-b-2 !border-gray-400 hover:!border-primary focus:!border-primary focus:!outline-none focus:!ring-0 font-bold"
            style={{ boxShadow: "none", outline: "none" }}
          />
        </Form.Item>

        <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
        >
        <Input.Password
            placeholder="Enter your password"
            className="w-full border-0 border-b-2 !border-gray-400 hover:!border-primary focus:!border-primary focus:!outline-none focus:!ring-0 font-bold"
            style={{ boxShadow: "none", outline: "none" }}
        />
        </Form.Item>


        <Form.Item>
          <Button 
          type="primary" 
          htmlType="submit" 
          className="w-full bg-primary hover:!bg-orange-600"
         >
            Register
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Register;
