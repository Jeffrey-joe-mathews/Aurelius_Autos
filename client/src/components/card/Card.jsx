import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({item}) => {
  return (
    <div className='card'>
      <Link to={`/list/${item.id}`} className="imageContainer" >
        <img src={item.images[0]} alt={item.title} />
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
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom </span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom </span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="save" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="chat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card