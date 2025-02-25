"use client";
import { useState } from "react";
import { Form, Input, Button } from "antd";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleCheckPassword = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("/api/forgetPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        toast.success("Password sent to your email!");
        form.resetFields();
      } else {
        toast.error(data.message || "Failed to retrieve password.");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-16 p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold text-center text-primary mb-4">Forgot Password</h1>

      <Form form={form} name="forgotPassword" layout="vertical" onFinish={handleCheckPassword}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Enter a valid email address!" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full bg-primary" loading={loading}>
            Check Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgetPassword;
