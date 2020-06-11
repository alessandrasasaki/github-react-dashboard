export default function GridView({ Component, collection = [] }) {

  const renderGrid = () => collection.map((dataItem, index) => <Component key={ index } { ...dataItem } />);

  return (
    <div>
      { renderGrid() }
    </div>
  )
}
