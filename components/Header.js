"use client";
import React, { useState } from "react";
import Link from "next/link";
import { UserOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Avatar, Modal, Input, Button, Form } from "antd";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="p-4 bg-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-primary font-semibold text-2xl">PIZZA's</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-500 font-semibold">
          <Link className="hover:scale-110 hover:transition-all" href="/">Home</Link>
          <Link className="hover:scale-110 hover:transition-all" href="/menu">Menu</Link>
          <Link className="hover:scale-110 hover:transition-all" href="/aboutus">About</Link>
          <Link className="hover:scale-110 hover:transition-all" href="/contactus">Contact</Link>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="hover:scale-110 hover:transition-all flex items-center"
            >
              <Avatar size="medium" style={{ background: "red", color: "white", marginTop:"-3px" }} icon={<UserOutlined />} />
            </button>
            <Link className="hover:scale-110 hover:transition-all text-primary" href="/register">Register</Link>
          </div>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button 
          className="md:hidden text-2xl" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col  gap-4 py-4 bg-white md:hidden">
          <Link className="hover:scale-110 hover:transition-all" href="/">Home</Link>
          <Link className="hover:scale-110 hover:transition-all" href="/menu">Menu</Link>
          <Link className="hover:scale-110 hover:transition-all" href="/aboutus">About</Link>
          <Link className="hover:scale-110 hover:transition-all" href="/contactus">Contact</Link>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="hover:scale-110 hover:transition-all flex items-center"
            >
              <Avatar size="medium" style={{ background: "red", color: "white" }} icon={<UserOutlined />} />
            </button>
            <Link className="hover:scale-110 hover:transition-all text-primary" href="/register">Register</Link>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <Modal 
        title="Login" 
        open={isModalOpen} 
        onCancel={() => setIsModalOpen(false)} 
        footer={null}
        // className="text-center text-xl"
        className="text-center text-xl !max-w-[70%] md:!max-w-[50%] lg:!max-w-[30%]"
      >
        <Form layout="vertical">
          <Form.Item label="Email">
            <Input className="w-full border-0 border-b-2 border-gray-400 hover:!border-primary focus:!border-primary focus:!outline-none focus:!ring-0 font-bold"
            style={{ boxShadow: "none", outline: "none" }}
            placeholder="Enter your email" />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password className="w-full border-0 border-b-2 border-gray-400 hover:!border-primary focus:!border-primary focus:!outline-none focus:!ring-0 font-bold"
            style={{ boxShadow: "none", outline: "none" }}
            placeholder="Enter your password" />
          </Form.Item>
          <div className="flex justify-between items-center">
            <Button className="text-primary hover:!bg-primary focus:!bg-primary" type="link" onClick={() => alert("Redirect to forgot password page")}>Forgot Password?</Button>
            <Button className="bg-primary hover:!bg-primary focus:!bg-primary" type="primary" onClick={() => setIsModalOpen(false)}>Login</Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default Header;
