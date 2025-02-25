"use client";
import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast"; 
import { UserOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Avatar, Modal, Input, Button, Form, message } from "antd";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleLogin = async () => {
    try {
      const values = await form.validateFields();
      console.log("Form values:", values); 
      setLoading(true);
  
      const response = await fetch("/api/userLogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
  
      console.log("Response status:", response.status);
  
      const data = await response.json().catch(() => null); 
      console.log("Response data:", data); 
  
      setLoading(false);
  
      if (response.ok) {
        toast.success(data?.message || "Login successful!"); 
        console.log("Login successful:", data?.message);
        setIsModalOpen(false);
        form.resetFields();
      } else {
        toast.error(data?.message || "Login failed."); 
      }
    } catch (error) {
      setLoading(false);
      console.error("Login error:", error);
      toast.error("Something went wrong.");
    }
  };
  

  return (
    <div className="p-4 bg-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-primary font-semibold text-2xl">
          PIZZA's
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-500 font-semibold">
          <Link className="hover:scale-110 hover:transition-all" href="/">
            Home
          </Link>
          <Link className="hover:scale-110 hover:transition-all" href="/menu">
            Menu
          </Link>
          <Link className="hover:scale-110 hover:transition-all" href="/aboutus">
            About
          </Link>
          <Link className="hover:scale-110 hover:transition-all" href="/contactus">
            Contact
          </Link>
          <div className="flex gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hover:scale-110 hover:transition-all flex items-center"
            >
              <Avatar size="medium" style={{ background: "red", color: "white", marginTop: "-3px" }} icon={<UserOutlined />} />
            </button>
            <Link className="hover:scale-110 hover:transition-all text-primary" href="/register">
              Register
            </Link>
          </div>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col gap-4 py-4 bg-white md:hidden">
          <Link className="hover:scale-110 hover:transition-all" href="/">
            Home
          </Link>
          <Link className="hover:scale-110 hover:transition-all" href="/menu">
            Menu
          </Link>
          <Link className="hover:scale-110 hover:transition-all" href="/aboutus">
            About
          </Link>
          <Link className="hover:scale-110 hover:transition-all" href="/contactus">
            Contact
          </Link>
          <div className="flex gap-2">
            <button onClick={() => setIsModalOpen(true)} className="hover:scale-110 hover:transition-all flex items-center">
              <Avatar size="medium" style={{ background: "red", color: "white" }} icon={<UserOutlined />} />
            </button>
            <Link className="hover:scale-110 hover:transition-all text-primary" href="/register">
              Register
            </Link>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <Modal
        title="Login"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        className="text-center text-xl !max-w-[70%] md:!max-w-[50%] lg:!max-w-[30%]"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input className="w-full border-0 border-b-2 border-gray-400 hover:!border-primary focus:!border-primary focus:!outline-none focus:!ring-0 font-bold" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password className="w-full border-0 border-b-2 border-gray-400 hover:!border-primary focus:!border-primary focus:!outline-none focus:!ring-0 font-bold" placeholder="Enter your password" />
          </Form.Item>
          <div className="flex justify-between items-center">
            <Button className="text-primary hover:!bg-primary focus:!bg-primary" type="link">
              Forgot Password?
            </Button>
            <Button className="bg-primary hover:!bg-primary focus:!bg-primary" type="primary" loading={loading} onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default Header;
