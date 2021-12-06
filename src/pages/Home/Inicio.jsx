import { Divider, Input, Button, Card } from "antd";
import { useRouter } from "next/router";

import Botonestilo from "../../Components/Componentes-Home/Boton-estilo";

const Inicio = () => {
  const { push } = useRouter();

  return (
    <div className="centrar h-screen w-screen">
      <Card style={{ width: 400 }}>
        <p className="text-2xl centrar texto_negrita tracking-widest">
          Notaria Tambini
        </p>
        <Divider plain>Consulta tu tramite en linea</Divider>
        <Botonestilo
          estilo="fourblack"
          onClick={() => push("/Kardex/SrchKardex")}
        >
          Consulta en Linea
        </Botonestilo>
        <Divider plain>Inicia Sesion</Divider>
        <Botonestilo estilo="fourgreen">Logeate</Botonestilo>
        <Divider plain>Servicios Constatacion</Divider>
        <Botonestilo estilo="fourorange">Constatacion</Botonestilo>
      </Card>
    </div>
  );
};

export default Inicio;
