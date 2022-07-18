interface State {
  error: boolean;
  loading: boolean;
  value: string;
  deleted: boolean;
  confirmed: boolean;
}

type ActionShape =
  | {
      type: "VALUE";
      payload: string;
    }
  | { type: "RESET" }
  | { type: "CONFIRM" };

export type { State, ActionShape };
