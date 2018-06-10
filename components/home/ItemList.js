import { WithLoading } from '../hocs'

const ItemList = ({ listItems, addProp }) => {
  console.log(addProp)
  return (
    <ul>
      { listItems.map((listItem) => <li key={listItem}>{listItem}</li>) }
    </ul>
  )
}

export default WithLoading('loading')(ItemList)