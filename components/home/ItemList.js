const ItemList = ({ listItems }) => {
  return (
    <ul>
      { !listItems ? 'Loding' : listItems.map((listItem) => <li key={listItem}>{listItem}</li>) }
    </ul>
  )
}
export default ItemList