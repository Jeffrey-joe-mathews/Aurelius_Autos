import { Link } from 'react-router-dom'
import './pin.scss'
import { Marker, Popup } from 'react-leaflet'

const Pin = ({item}) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
        <Popup>
            <div className="popupContainer">
                <img src={item.img} alt="image" />
                <div className="txtContainer">
                    <Link to={`/list/${item.id}`} >{item.title}</Link>
                    <span className='trans' >{item.bedroom} transmission</span>
                    <b>$ {item.price}</b>
                </div>
            </div>
        </Popup>
    </Marker>
  )
}

export default Pin