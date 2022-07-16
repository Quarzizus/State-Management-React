import React, { ChangeEvent, FormEvent } from "react";
import { Error } from "../Error";
import { Loading } from "../Loading";

interface props {
  name: string;
}

interface typeState {
  error: boolean;
  loading: boolean;
  value: string;
}

const SECRET = "type";

class ClassState extends React.Component<props, typeState> {
  constructor(props: props | Readonly<props>) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      value: "",
    };
  }

  componentDidUpdate() {
    if (!!this.state.loading)
      setTimeout(() => {
        if (this.state.value === SECRET) {
          this.setState({ error: false });
        } else {
          this.setState({ error: true });
        }

        this.setState({ loading: false });
      }, 3000);
  }

  render() {
    return (
      <section>
        <h2>{this.props.name}</h2>
        <p>Por favor ingrese un codigo de seguridad</p>
        <Error isError={this.state.error} isLoading={this.state.loading} />
        <Loading isLoading={this.state.loading as boolean} />
        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              this.setState({ value: e.target.value })
            }
          />
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
