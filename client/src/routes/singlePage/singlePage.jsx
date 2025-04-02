import ImgSlider from '../../components/imgSlider/ImgSlider'
import './singlePage.scss'
import { singlePostData, userData } from '../../lib/dummyData.js'
import Map from '../../components/map/Map.jsx'

const SinglePage = () => {
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <ImgSlider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="profile pic" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className='title' >General</p> 
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>renter is responsible</p>
              </div>
            </div>
          </div>
          <p className='title' >More Details</p> 
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>sometext</span>
            </div>
            <div className="size">
              <img src="/size.png" alt="" />
              <span>sometext</span>
            </div>
            <div className="size">
              <img src="/size.png" alt="" />
              <span>sometext</span>
            </div>
          </div>
          <p className='title' >Some Shit</p> 
          <div className="listHorizontal"></div>
          <p className='title' >some more shit</p>
          <div className="mapContainer">
            <Map items ={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              send a message
            </button>
            <button>
              <img src="/save.png" alt="" />
              save the dealer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage