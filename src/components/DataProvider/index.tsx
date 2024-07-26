type DataProviderProps = {
  data: string[];
  children: (data: string[]) => React.ReactNode;
};

const DataProvider: React.FC<DataProviderProps> = ({ data, children }) => (
  <div className="data-provider">{children(data)}</div>
);

export default DataProvider;
