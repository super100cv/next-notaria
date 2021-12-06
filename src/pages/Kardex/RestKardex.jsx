import { Row } from "antd";
import { useTasks } from "./../../context/taskContext";
import { useState, useEffect } from "react";
import TarjetasKardex from "../Components/Componentes-Kardex/TarjetasKardex";
import HeaderKardex from "../Components/Componentes-Kardex/HeaderKardex";
import Loading from "../Components/Componentes-Kardex/Loading";
import { useRouter } from "next/router";

const RestKardex = () => {
  const { push } = useRouter();
  //Values del taskContext
  const { usKardex, items, setItems, url } = useTasks();
  const { numerodocumento } = usKardex.values;
  //useState del error del fetch
  const [error, setError] = useState(null);
  //useState del loading del fetch
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!numerodocumento) {
      push("/Kardex/SrchKardex");
    }
    console.log(numerodocumento);
    fetch(`${url}/VerificarCertificadoNotarial?kardex=${numerodocumento}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setItems(data.result);
          console.log(items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <>
        <HeaderKardex items={items}>
          <Row>
            <TarjetasKardex items={items} />
          </Row>
        </HeaderKardex>
      </>
    );
  }
};
export default RestKardex;
