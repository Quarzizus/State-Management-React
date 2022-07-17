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
  const [deleted, setDeleted] = useState<Boolean>(false);
  const [confirmed, setConfirmed] = useState<Boolean>(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onConfirmed = () => {
    setError(false);
    setConfirmed(true);
  };

  const onReset = () => {
    setConfirmed(false);
    setDeleted(false);
    setValue("");
  };

  useEffect(() => {
    if (!!loading) {
      setTimeout(() => {
        if (value === SECRET) {
          onConfirmed();
        } else {
          setError(true);
        }
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  if (!deleted && !!confirmed)
    return (
      <section>
        <p>procederemos a eliminar</p>
        <button onClick={() => setDeleted(true)}>Sí, estoy seguro</button>
        <button onClick={onReset}>Nooo, fue aún nop</button>
      </section>
    );
  if (!!deleted && !!confirmed)
    return (
      <section>
        <h2>Se ha elimado exitosamente</h2>
        <button onClick={onReset}>Volver</button>
      </section>
    );
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
