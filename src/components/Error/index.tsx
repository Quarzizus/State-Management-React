interface props {
  isError: boolean;
  isLoading: boolean;
}

const Error = ({ isError, isLoading }: props) => {
  return isError && !isLoading ? <h2>Error</h2> : null;
};

export { Error };
