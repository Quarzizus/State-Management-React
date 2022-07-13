import React from "react";

interface props {
  name: string;
}

interface typeState {
  error: boolean;
}

class ClassState extends React.Component<props, typeState> {
  constructor(props: props | Readonly<props>) {
    super(props);
    this.state = {
      error: false,
    };
  }

  render() {
    return (
      <section>
        <h2>{this.props.name}</h2>
        <p>Por favor ingrese un codigo de seguridad</p>
        {this.state.error && <p>El codigo no es el correcto c:</p>}
        <div>
          <input type="text" />
          <button onClick={() => this.setState({ error: !this.state.error })}>
            Validar
          </button>
        </div>
      </section>
    );
  }
}

export { ClassState };
