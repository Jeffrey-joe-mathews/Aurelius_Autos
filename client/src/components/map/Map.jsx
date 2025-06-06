import { MapContainer, TileLayer } from 'react-leaflet'
import './map.scss'
import "leaflet/dist/leaflet.css"
import Pin from '../pin/Pin'

const Map = ({items}) => {

  return (
    <MapContainer center={items.length===1?[items[0].latitude, items[0].longitude]:[12.9716,77.5946]} zoom={13} scrollWheelZoom={false} className='map' >
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map(item => (
            < Pin key={item.id} item={item} />
     ))}
        {/* <Marker position={[52.4797, -1.90269]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker> */}
    </MapContainer>
  )
}

export default Map