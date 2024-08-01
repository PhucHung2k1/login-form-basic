// src/pages/Login.tsx
import { GoogleOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const { Title } = Typography;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const onFinish = (values: { username: string; password: string }) => {
    console.log("Success:", values);
    login();
    navigate("/home");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleGoogleSignIn = () => {
    const url = "http://103.188.82.10:8069";
    window.open(url, "_blank");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[500px] bg-white p-8 border rounded shadow-md">
        <Title level={2} className="text-center mb-8">
          Login Form
        </Title>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Log in
            </Button>
          </Form.Item>
          <Button
            type="link"
            className="w-full"
            icon={<GoogleOutlined />}
            onClick={handleGoogleSignIn}
          >
            Sign in with Google
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
