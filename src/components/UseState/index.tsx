import { ChangeEvent, useEffect, useState } from "react";
import { Error } from "../Error";
import { Loading } from "../Loading";

interface props {
  name: string;
}

const SECRET = "metare";

const UseState = ({ name }: props) => {
  const [error, setError] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const [value, setValue] = useState<String>("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (!!loading) {
      setTimeout(() => {
        if (value === SECRET) {
          setError(false);
        } else {
          setError(true);
        }
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  return (
    <section>
      <h2>{name}</h2>
      <p>Por favor ingrese un codigo de seguridad</p>
      <Error isError={error as boolean} isLoading={loading as boolean} />
      <Loading isLoading={loading as boolean} />
      <div>
        <input type="text" value={value as string} onChange={handleInput} />
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
