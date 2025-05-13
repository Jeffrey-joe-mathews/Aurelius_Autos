import { Link, useNavigate } from 'react-router-dom'
import './Card.scss'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'



const Card = ({item}) => {
  const naviagate = useNavigate()
  console.log(item)
  const handleClick = () => {
    naviagate(`/list/${item.id}`)
  }
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
  return (
    <div className='card' onClick={handleClick}>
      <Link to={`/list/${item.id}`} className="imageContainer" >
        <img src={item.images[0]} alt={item.title} />
      </Link>
      <div className="txtContainer">
        <h2 className="title">
          <Link to={`/list/${item.id}`} >{item.title}</Link>
        </h2>
        <p className='address' >
          <img src="/pin.png" alt="address" />
          <span>{item.city}</span>
        </p>
        <p className='price' >$ {item.price} / day</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/serviceType.svg" alt="" />
              <span>{item.serviceType==="buy"?"For Sale":"Rental Service"}</span>
            </div>
            <div className="feature">
              <img src="/mileage.svg" alt="" />
              <span>{item.mileage} Km/L </span>
            </div>
          </div>
          <div className="icons">
            { currentUser.userInfo.id === item.userID && 
              <div className="icon">
              <img src="/delete.svg" alt="save" />
            </div>}
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