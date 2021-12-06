import { Row, Col, Card, Button, Badge, Divider, Space } from "antd";
import { Typography } from "antd";
const { Text, Title } = Typography;
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const HeaderKardex = (props) => {
  const { push } = useRouter();
  const { children, items } = props;
  return (
    <>
      <div className="bg-gray-800 h-screen bg-opacity-25">
        <header className="rounded-sm bg-white py-3 px-8 border border-black">
          {" "}
          <>
            <Row>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <p className="tracking-wider pt-2 text-black text-2xl font-normal animate-pulse ">NOTARIA TAMBINI</p>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 13 }}></Col>
              <Col xs={{ span: 24 }} lg={{ span: 5 }}>
                <div className="flex pt-2 inline-flex">
                  <button
                    onClick={() => push("/Kardex/SrchKardex")}
                    className="mr-3 boton_hover_azul_md"
                  >
                    Consulta otro servicio
                  </button>
                  <Badge count={items.length}>
                    <button className="boton_hover_azul_md py-3">
                      <ShoppingCartOutlined className="mr-2" />
                      Carrito
                    </button>
                  </Badge>
                </div>
              </Col>
            </Row>
          </>
        </header>
        <main className="pt-12 bg-opacity-25">{children}</main>
      </div>
    </>
  );
};

export default HeaderKardex;
