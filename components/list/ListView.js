export default function ListView({ Component, collection = [] }) {

  const renderList = () => collection.map((dataItem, index) => <Component key={ index } { ...dataItem } />);

  return (
    <div>
      { renderList() }
    </div>
  )
}
