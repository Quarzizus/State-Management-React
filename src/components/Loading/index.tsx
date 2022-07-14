interface props {
  isLoading: boolean;
}

const Loading = ({ isLoading }: props) => {
  return isLoading ? <h2>Loading...</h2> : null;
};

export { Loading };
