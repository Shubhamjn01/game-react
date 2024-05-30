import {
    AntdLayout,
    Row,
    Col,
    Typography,
    Form,
    Card,
    Input,
    Button,
  } from "@pankod/refine-antd";
//   import "./style.css"
  import { useLogin } from "@pankod/refine-core";
  
  const { Text, Title } = Typography;
  
  export interface ILoginForm {
    username: string;
    password: string;
    remember: boolean;
  }
  const Login = () => {
    const [form] = Form.useForm<ILoginForm>();
  
    const { mutate: login } = useLogin<ILoginForm>();
  
    const CardTitle = (
      <Title level={3} className="title">
        Sign in your account
      </Title>
    );
  
    return (
      <AntdLayout>
        <Row
          justify="center"
          align="middle"
          style={{
            height: "100vh",
          }}
        >
          <Col xs={22}>
            <div className="container">
              <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
                <Form<ILoginForm>
                  layout="vertical"
                  form={form}
                  onFinish={(values) => {
                    login(values);
                  }}
                  requiredMark={false}
                  // initialValues={{
                  //   remember: false,
                  //   email: "info+refineflix@refine.dev",
                  //   password: "refineflix",
                  // }}
                >
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, type: "email" }]}
                  >
                    <Input size="large" placeholder="info+refineflix@refine.dev" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true }]}
                    style={{ marginBottom: "12px" }}
                  >
                    <Input type="password" placeholder="●●●●●●●●" size="large" />
                  </Form.Item>
                  <Button type="primary" size="large" htmlType="submit" block>
                    Sign in
                  </Button>
                </Form>
              </Card>
            </div>
          </Col>
        </Row>
      </AntdLayout>
    );
  };
  
  export default Login;