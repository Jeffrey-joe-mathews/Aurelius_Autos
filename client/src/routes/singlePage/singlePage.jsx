import ImgSlider from '../../components/imgSlider/ImgSlider'
import './singlePage.scss'
import { singlePostData, userData } from '../../lib/dummyData.js'

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
            <div className="bottom"></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">

        </div>
      </div>
    </div>
  )
}

export default SinglePage