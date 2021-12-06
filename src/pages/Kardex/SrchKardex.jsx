import { Select, Input, Divider, Card, Form, Button, Space } from "antd";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Transition } from "@headlessui/react";
const { Option } = Select;
import { useTasks } from "./../../context/taskContext";

const SrchKardex = () => {
  const { push } = useRouter();
  const { setKardex } = useTasks();
  const slcOptions = [
    {
      documento: "KARDEX",
    },
    {
      documento: "RUC",
    },
    {
      documento: "DNI",
    },
  ];

  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
    }
  };

  const onFinish = (values) => {
    setKardex({values});
    push("/Kardex/RestKardex");
  };

  const onFinishFailed = () => {
    if (!captcha.current.getValue()) {
      console.log("El usuario es un robot");
    }
  };

  return (
    <>
      <Transition
        appear={true}
        show={true}
        enter="transition transform duration-300 ease-out"
        enter-from="translate-x-4 opacity-0"
        enter-to="translate-x-0 opacity-100"
      >
        <div className="centrar h-screen w-screen">
          <Card
            style={{
              width: 400,
              borderRadius: "15px 50px",
            }}
          >
            <p className="animate-pulse text-2xl centrar texto_negrita tracking-widest">
              Consulta tu tramite
            </p>
            <Divider style={{ borderColor: "black" }}></Divider>
            <Form
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="tipodocumento"
                label="Documento"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Porfavor selecciona un documento!",
                  },
                ]}
              >
                <Select
                  placeholder="Selecciona tu documento"
                  style={{ width: 350 }}
                >
                  {slcOptions.map((option) => (
                    <Option key={option.documento}>{option.documento}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                name="numerodocumento"
                rules={[
                  {
                    required: true,
                    message: "Porfavor ingresa el documento!",
                  },
                ]}
                hasFeedback
                label="Numero de Documento"
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item>
                <ReCAPTCHA
                  ref={captcha}
                  sitekey="6LfqwmsdAAAAAOLDSI5159K2hnV1Q-F8fdPNvbSu"
                  onChange={onChange}
                />
              </Form.Item>
              <Divider style={{ borderColor: "black" }}></Divider>
              <Form.Item>
                <Space style={{ width: "100%" }}>
                  <Button
                    style={{ borderRadius: "15px 30px" }}
                    size="large"
                    type="primary"
                    htmlType="submit"
                  >
                    Buscar documento
                  </Button>
                  <Button
                    style={{ borderRadius: "15px 30px" }}
                    size="large"
                    type="default"
                    onClick={() => push("/")}
                  >
                    Salir
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Transition>
    </>
  );
};

export default SrchKardex;
