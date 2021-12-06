import { Card, Col, Button } from "antd";
import Moment from 'moment';
const TarjetasKardex = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Col key={index} xs={{ span: 24 }} lg={{ span: 24 }}>
          <div className="centrar pl-4 pt-2 ">
            <div className="card bg-white bg-opacity-70 px-5 py-5">
              <div className="flex justify-between mb-2  mt-3 text-left">
                <p className="text-black">Nombre del Tramite :</p>
                <div className="text-right w-30">
                  <p className="font-black">{item.servicio}</p>
                </div>
              </div>
              <div className="flex justify-between mb-2 text-left">
                <p className="text-black"> Numero de Tramite :</p>
                <div className="text-right w-30">
                  <p className="font-black">{item.numero_tramite}</p>
                </div>
              </div>
              <div className="flex justify-between mb-2 text-left ">
                <p className="text-black">Fecha de Tramite :</p>
                <div className="text-right w-30">
                  <p className="font-black">
                    {Moment(item.fecha_tramite).format('l')}
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2 text-left">
                <p className="text-black">Fecha de Testimonio :</p>
                <div className="text-right w-30">
                  <p className="font-black">
                    {Moment(item.fecha_testimonio).format('l')}
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2 text-left">
                <p className="text-black">Pagos Notariales :</p>
                <div className="text-right w-30">
                  <p className="font-black">
                    S/{item.pagos_notariales.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2 text-left">
                <p className="text-black">Pagos Registrales :</p>
                <div className="text-right w-30">
                  <p className="font-black">
                    S/{item.pagos_registrales.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2 text-left">
                <p className="text-black ">Situación :</p>
                <div className="text-right w-30">
                  <p className="font-black">{item.estado}</p>
                </div>
              </div>
              <div className="flex justify-between mb-2 text-left">
                <p className="text-black">Asesor :</p>
                <div className="text-right w-30">
                  <p className="font-black">{item.asesor}</p>
                </div>
              </div>
              <div className="flex justify-between mb-2 text-left">
                <p className="text-black">Correo/Mail :</p>
                <div className="text-right w-30">
                  <p className="font-black">{item.correo?item.correo:"No hay correo de asesor"}</p>
                </div>
              </div>
              <div className="flex justify-between mb-2 text-left">
                <p className="text-black">Celular/Wsp :</p>
                <div className="text-right w-30">
                  <p className="font-black">{item.celular?item.celular:"Nohay celular de asesor"}</p>
                </div>
              </div>
              <div className="flex justify-between mb-2 text-left">
                {item.estado === "FALTANTE DE PAGO" ? (
                  <Button
                    size="large"
                    style={{ background: "black", color: "white" }}
                  >
                    Pagar kardex
                  </Button>
                ) : (
                  <Button></Button>
                )}
              </div>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};

export default TarjetasKardex;
