type ContainerProps = {
  data: Array<{ name: string }>;
  children: (data: Array<{ name: string }>) => React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ data, children }) => (
  <div className="container">{children(data)}</div>
);

export default Container;
