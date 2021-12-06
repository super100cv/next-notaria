import { Divider, Input, Button, Card } from "antd";
import { useRouter } from "next/router";

import Botonestilo from "./../Components/Componentes-Home/Botonestilo";

const Inicio = () => {
  const { push } = useRouter();

  return (
    <div className="centrar h-screen w-screen">
      <Card style={{ width: 400 }}>
        <p className="text-2xl centrar texto_negrita tracking-widest">
          Notaria Tambini
        </p>
        <Divider plain>Consulta tu tramite en linea</Divider>
        <button
          className="fourblack h-10 flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md focus:bg-black focus:outline-none"
          onClick={() => push("/Kardex/SrchKardex")}
        >
          Consulta en Linea
        </button>
        <Divider plain>Inicia Sesion</Divider>
        <Botonestilo estilo="fourgreen">Logeate</Botonestilo>
        <Divider plain>Servicios Constatacion</Divider>
        <Botonestilo estilo="fourorange">Constatacion</Botonestilo>
      </Card>
    </div>
  );
};

export default Inicio;
