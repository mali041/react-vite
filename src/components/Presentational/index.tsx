type PresentationProps = {
  item: { name: string };
};

const Presentation: React.FC<PresentationProps> = ({ item }) => (
  <div className="item">{item.name}</div>
);

export default Presentation;
