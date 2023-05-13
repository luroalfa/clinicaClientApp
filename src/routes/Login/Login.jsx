import {
  Container,
  SectionImg,
  SectionInfo,
  ContainerBanner,
  FirstSection,
  Logo,
  ContainerForm,
  ImagenEncima,
  Overlay,
  TextoEncima,
} from "./Style/LoginStyle";
import { Button, Form, Input } from "antd";
import LogoImg from "../../../public/ClinicaLogoblue.svg";
import OverlayImage from "../../assets/intro.jpg";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  return (
    <Container>
      <SectionInfo>
        <ContainerBanner>
          <div>
            <Logo src={LogoImg} alt="" />
          </div>
          <div>
            <div>
              <div>8464-5689/2207-6452</div>
              <div>info@elbuenvivir.com</div>
            </div>
            <div>Síguenos:</div>
          </div>
        </ContainerBanner>
        <FirstSection>
          <h1>
            Ingresa para acceder a tus citas, expedientes médicos y disfrutar de
            nuestros servicios de calidad.{" "}
          </h1>
        </FirstSection>
        <ContainerForm>
          <div>
            <h2>Iniciar Sesión</h2>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Correo Electrónico"
                name="username"
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="Ingrese su Correo Electrónico" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Ingrese su Contraseña" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Ingresar
                </Button>
              </Form.Item>
            </Form>
          </div>
        </ContainerForm>
      </SectionInfo>
      <SectionImg>
        <ImagenEncima src={OverlayImage} alt="" />
        <Overlay />
        <TextoEncima>
          Estamos encantados de verte aquí. Tu bienestar es nuestra prioridad,
          por eso te ofrecemos una experiencia personalizada y segura en nuestra
          plataforma. ¡Gracias por confiar en nuestra clínica privada para tu
          atención médica!
        </TextoEncima>
      </SectionImg>
    </Container>
  );
};

export default Login;
