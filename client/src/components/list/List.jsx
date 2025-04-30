import './list.scss'
import { listData } from '../../lib/dummyData.js'
import Card from '../../components/card/Card.jsx'

const List = ({posts}) => {
  console.log(posts)
  return (
    <div className='list'>
      {posts.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}

export default List