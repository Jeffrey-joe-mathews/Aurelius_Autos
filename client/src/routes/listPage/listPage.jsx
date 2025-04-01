import Card from "../../components/card/Card.jsx";
import Filter from "../../components/filter/Filter.jsx";
import Map from "../../components/map/Map.jsx";
import { listData } from "../../lib/dummyData.js"
import './listPage.scss'

const ListPage = () => {
  const data = listData;
  return (
    <div className='listPage'>
      <div className="listContainer" >
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer" >
        <Map items={data} />
      </div>
    </div>
  )
}

export default ListPage
