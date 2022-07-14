import { useEffect, useState } from "react";
import { Loading } from "../Loading";

interface props {
  name: string;
}

const UseState = ({ name }: props) => {
  const [error, _setError] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    if (!!loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  return (
    <section>
      <h2>{name}</h2>
      <p>Por favor ingrese un codigo de seguridad</p>
      {error && <p>El código es erroneo</p>}
      <Loading isLoading={loading as boolean} />
      <div>
        <input type="text" />
        <button
          disabled={loading as boolean}
          onClick={() => setLoading(!loading)}
        >
          Validar
        </button>
      </div>
    </section>
  );
};

export { UseState };
