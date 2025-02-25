"use client";
import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast"; 
import { UserOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu, Modal, Input, Button, Form } from "antd";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);  // Initially, no user is logged in
  const [form] = Form.useForm();

  const handleLogin = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);

      const response = await fetch("/api/userLogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        toast.success(data.message);
        setUser(data.name);  // Store the logged-in user's name
        setIsModalOpen(false);
        form.resetFields();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong.");
    }
  };

  const handleLogout = () => {
    setUser(null); // Reset user state
    toast.success("Logged out successfully!");
  };

  const menu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="p-4 bg-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-primary font-semibold text-2xl">
          PIZZA's
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-500 font-semibold">
          <Link className="hover:scale-110 hover:transition-all" href="/">Home</Link>
          <Link className="hover:scale-110 hover:transition-all" href="/menu">Menu</Link>
          <Link className="hover:scale-110 hover:transition-all" href="/aboutus">About</Link>
          <Link className="hover:scale-110 hover:transition-all" href="/contactus">Contact</Link>

          <div className="flex gap-2">
            {user ? (
              <Dropdown menu={menu} trigger={["click"]}>
                <button className="hover:scale-110 hover:transition-all flex items-center">
                  <Avatar size="medium" style={{ background: "red", color: "white", marginTop: "-3px" }}>
                    {user[0]?.toUpperCase()} {/* Show first letter of user's name */}
                  </Avatar>
                  <span className="ml-2">{user}</span>
                </button>
              </Dropdown>
            ) : (
              <>
                <button onClick={() => setIsModalOpen(true)} className="hover:scale-110 hover:transition-all flex items-center">
                  <Avatar size="medium" style={{ background: "red", color: "white", marginTop: "-3px" }} icon={<UserOutlined />} />
                </button>
                <Link className="hover:scale-110 hover:transition-all text-primary" href="/register">Register</Link>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <button className="md:hidden text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="flex flex-col gap-4 py-4 bg-white md:hidden">
          <Link className="hover:scale-110 hover:transition-all" href="/">Home</Link>
          <Link className="hover:scale-110 hover:transition-all" href="/menu">Menu</Link>
          <Link className="hover:scale-110 hover:transition-all" href="/aboutus">About</Link>
          <Link className="hover:scale-110 hover:transition-all" href="/contactus">Contact</Link>
          <div className="flex gap-2">
            {user ? (
              <Dropdown menu={menu} trigger={["click"]}>
                <button className="hover:scale-110 hover:transition-all flex items-center">
                  <Avatar size="medium" style={{ background: "red", color: "white" }}>
                    {user[0]?.toUpperCase()}
                  </Avatar>
                  <span className="ml-2">{user}</span>
                </button>
              </Dropdown>
            ) : (
              <>
                <button onClick={() => setIsModalOpen(true)} className="hover:scale-110 hover:transition-all flex items-center">
                  <Avatar size="medium" style={{ background: "red", color: "white" }} icon={<UserOutlined />} />
                </button>
                <Link className="hover:scale-110 hover:transition-all text-primary" href="/register">Register</Link>
              </>
            )}
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
          <Button
            type="link"
            className="text-primary hover:!bg-transparent"
            onClick={() => setIsModalOpen(false)}
          >
            <Link href="/forgetPassword">Forgot Password?</Link>
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
