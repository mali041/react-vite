interface WithLoadingProps {
  isLoading: boolean;
}

const WithLoading = <P extends object>(Component: React.ComponentType<P>) => {
  return function WithLoadingComponent(props: P & WithLoadingProps) {
    const { isLoading, ...rest } = props;
    if (isLoading) return <p>Loading...</p>;
    return <Component {...(rest as P)} />;
  };
};

export default WithLoading;
