import { useEffect, useState } from "react";

export const useFetch = (url,propiedad,valor) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`${url}?${propiedad}=${valor}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => setError("Error de servidor"))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};