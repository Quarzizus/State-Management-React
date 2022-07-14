import React from "react";
import { Loading } from "../Loading";

interface props {
  name: string;
}

interface typeState {
  error: boolean;
  loading: boolean;
}

class ClassState extends React.Component<props, typeState> {
  constructor(props: props | Readonly<props>) {
    super(props);
    this.state = {
      error: false,
      loading: false,
    };
  }

  componentDidUpdate() {
    if (!!this.state.loading)
      setTimeout(() => {
        this.setState({ loading: false });
      }, 3000);
  }

  render() {
    return (
      <section>
        <h2>{this.props.name}</h2>
        <p>Por favor ingrese un codigo de seguridad</p>
        {this.state.error && <p>El codigo no es el correcto c:</p>}
        <Loading isLoading={this.state.loading as boolean} />
        <div>
          <input type="text" />
          <button
            onClick={() => this.setState({ loading: !this.state.loading })}
          >
            Validar
          </button>
        </div>
      </section>
    );
  }
}

export { ClassState };
