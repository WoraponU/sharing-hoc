import { WithLoading } from '../hocs'

const ItemList = ({ listItems }) => {
  return (
    <ul>
      { listItems.map((listItem) => <li key={listItem}>{listItem}</li>) }
    </ul>
  )
}

export default WithLoading(ItemList)