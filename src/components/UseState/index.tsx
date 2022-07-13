import { useState } from "react";

interface props {
  name: string;
}

const UseState = ({ name }: props) => {
  const [error, setError] = useState<Boolean>(false);
  return (
    <section>
      <h2>{name}</h2>
      <p>Por favor ingrese un codigo de seguridad</p>
      {error && <p>El código es erroneo</p>}
      <div>
        <input type="text" />
        <button onClick={() => setError(!error)}>Validar</button>
      </div>
    </section>
  );
};

export { UseState };
