export default ({ listItems }) => {
  return (
    <ul>
      { !listItems ? 'Loding' : listItems.map((listItem) => <li key={listItem}>{listItem}</li>) }
    </ul>
  )
}