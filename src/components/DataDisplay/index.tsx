interface DataDisplayProps {
  data: string;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => <div>{data}</div>;

export default DataDisplay;
