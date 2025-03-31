import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({item}) => {
  return (
    <div className='card'>
      <Link to={`/list/${item.id}`} className="imageContainer" >
        <img src={item.img} alt={item.title} />
      </Link>
      <div className="txtContainer">
        <h2 className="title">
          <Link to={`/list/${item.id}`} >{item.title}</Link>
        </h2>
        <p className='address' >
          <img src="/pin.png" alt="address" />
          <span>{item.address}</span>
        </p>
        <p className='price' >$ {item.price}</p>
      </div>
    </div>
  )
}

export default Card