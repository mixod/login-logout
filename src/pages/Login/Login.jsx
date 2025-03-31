import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { postFunction } from "../../Apis/MainApi";
import { NavLink, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const mutuationLogin = useMutation({
    mutationFn: postFunction,
    onSuccess: (res) => {
      console.log("re", res.token);
      localStorage.setItem("token", res?.token);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onFinish = (values) => {
    console.log("Received values:", values);
    mutuationLogin.mutate(values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card title="Login" className="w-[300px]">
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Log in
            </Button>
          </Form.Item>
          <p className="text-center">
            Don't have an account?{" "}
            <NavLink to="/register" className="text-blue-500">
              Register
            </NavLink>
          </p>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
