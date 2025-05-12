import ImgSlider from '../../components/imgSlider/ImgSlider'
import './singlePage.scss'
import Map from '../../components/map/Map.jsx'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext.jsx'
import apiRequest from '../../lib/apiRequest.js'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parseISO } from "date-fns";


const SinglePage = () => {
  const navigate = useNavigate()
  const singlePostData = useLoaderData();
  const {currentUser} = useContext(AuthContext)
  const [saved, setSaved] = useState(singlePostData.isSaved)
  const [selectedDates, setSelectedDates] = useState([])
  console.log(singlePostData)
  const saveEvent = async() => {
    setSaved((prev) => !prev)
    if(!currentUser) {
      navigate('/')
    }
    try {
      await apiRequest.post("/users/save", {
        postId:singlePostData.post.id
      })
    }
    catch (error) {
      console.error(error)
    }
  }
  const deleteEvent = async () => {
    try{
      await apiRequest.delete("/posts/"+singlePostData.post.id, {})
    }
    catch(err) {
      console.error(err)
    }
  }
  return (
    <div className='singlePage'>
      <div  className="details">
        <div className="wrapper">
          <ImgSlider images={singlePostData.post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.post.city}</span>
                </div>
                <div className="price">$ {singlePostData.post.price}</div>
              </div>
              <div className="user">
                <img src={singlePostData.post.user.avatar} alt="profile pic" />
                <span>{singlePostData.post.user.username}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.post.postDetail.desc}</div>
<div className="booking">
<div className="summary">
  <p>Select Available Days:</p>
  <DatePicker
    selected={null}
    onChange={(date) => {
      const dateStr = date.toISOString().split("T")[0];
      const alreadySelected = selectedDates.find(d =>
        d.toISOString().split("T")[0] === dateStr
      );
      if (alreadySelected) {
        setSelectedDates(prev => prev.filter(d =>
          d.toISOString().split("T")[0] !== dateStr
        ));
      } else {
        setSelectedDates(prev => [...prev, date]);
      }
    }}
    minDate={new Date()}
    highlightDates={selectedDates}
    includeDates={singlePostData.post.availableDates.map(d => parseISO(d))}
    inline
  />
    <p>Selected Days: {selectedDates.length}</p>
    <p>Total Price: ${selectedDates.length * singlePostData.post.price}</p>
  </div>
    <button
      className="bookButton"
      onClick={() => {
        navigate("/payment", {
          state: {
            postId: singlePostData.post.id,
            selectedDates,
            total: selectedDates.length * singlePostData.post.price
          }
        });
      }}
      disabled={selectedDates.length === 0}
    >
      Proceed to Payment
    </button>
</div>

          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className='title' >General</p> 
          <div className="listVertical">
            <div className="feature">
              <img src="/transmission.svg" alt="" />
              <div className="featureText">
                <span>Transmission</span>
                <p>{(singlePostData.post.transmission)} transmission</p>
              </div>
            </div>
            <div className="feature">
              <img src="/color.svg" alt="" />
              <div className="featureText">
                <span>Color</span>
                <p>{singlePostData.post.postDetail.color}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/insurance.svg" alt="" />
              <div className="featureText">
                <span>Insurance</span>
                <p>{singlePostData.post.postDetail.insured==="yes"?"Insured" : "Not Insured"}</p>
              </div>
            </div>
          </div>
          <p className='title' >More Details</p> 
          <div className="sizes">
            <div className="size">
              <img src="/serviceType.svg" alt="" />
              <span>{singlePostData.post.serviceType}</span>
            </div>
            <div className="size">
              <img src="/carType.svg" alt="" />
              <span>{singlePostData.post.carType}</span>
            </div>
            <div className="size">
              <img src="/condition.svg" alt="" />
              <span>{singlePostData.post.postDetail.condition}</span>
            </div>
          </div>
          <p className='title' >Some Shit</p> 
          <div className="listHorizontal">
            <div className="feature">
              {/* <img src="/school.png" addlt="" /> */}
              <div className="featureText">
                <span>Make</span>
                <p>{singlePostData.post.postDetail.make}</p>
              </div>
            </div>
            <div className="feature">
              {/* <img src="/school.png" alt="" /> */}
              <div className="featureText">
                <span>Model</span>
                <p>{singlePostData.post.postDetail.model}</p>
              </div>
            </div>
            <div className="feature">
              {/* <img src="/school.png" alt="" /> */}
              <div className="featureText">
                <span>Year</span>
                <p>{singlePostData.post.postDetail.year}</p>
              </div>
            </div>
          </div>
          <p className='title' >Location</p>
          <div className="mapContainer">
            <Map items ={[singlePostData.post]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              send a message
            </button>
            { currentUser.userInfo.id===singlePostData.post.userID &&
              <button onClick={deleteEvent} >
                <img src="/delete.svg" alt="" />
                Delete
              </button>
            }
            <button onClick={saveEvent} style={{
              backgroundColor:saved?"#fece51":"white"
            }}>
              <img src="/save.png" alt="" />
              {saved?"Car Saved":"Save the Car"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage