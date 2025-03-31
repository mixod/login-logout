import { Form, Input, Button } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { postRegister } from "../../Apis/MainApi";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import FormItem from "antd/es/form/FormItem";

function Registerss() {
  const navigate = useNavigate();
  const mutationRegister = useMutation({
    mutationFn: postRegister,
    onSuccess: (data) => {
      navigate("/login");
      console.log("res", data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onFinish = (values) => {
    console.log("Registration values:", values);
    const payload = { ...values, type: "individual" };
    mutationRegister.mutate(payload);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Register
        </h2>
        <Form
          name="register"
          onFinish={onFinish}
          layout="vertical"
          className="space-y-4"
        >
          <Form.Item
            name="name"
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Full Name"
              className="py-2"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Email"
              className="py-2"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              className="py-2"
            />
          </Form.Item>
          <FormItem
            name="password_confirmation"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm Password"
              className="py-2"
            />
          </FormItem>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              Register
            </Button>
          </Form.Item>
          <p>
            Already Have a Account ? <NavLink to="/login">Login</NavLink>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Registerss;
