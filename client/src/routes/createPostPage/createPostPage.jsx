import { useState } from "react";
import "./createPostPage.scss";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";

function CreatePostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const formData = new FormData(event.target)
    const inputs = Object.fromEntries(formData)
    console.log(inputs)

    try {
      const res = await apiRequest.post("/posts", {
        postData : {
          title: inputs.title,
          price: parseInt(inputs.price),
          images: images ,
          address: inputs.address,
          city: inputs.city,
          transmission: inputs.transmission,
          mileage: parseFloat(inputs.mileage),
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          carType: inputs.carType,
          serviceType: inputs.serviceType
        },
        postDetail : {
          desc: value,
          make: inputs.make,
          model: inputs.model,
          color: inputs.color,
          insured: inputs.insured,
          condition: inputs.insured,
          year: parseInt(inputs.year),
          passengers: parseInt(inputs.passengers)
        }
      })
    }
    catch (err){
      console.error(err);
      setError(err)
    }

  };

  return (
    <div className="createPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <textarea name="desc" id="desc" value={value} onChange={(e) => setValue(e.target.value)} rows={10} ></textarea>
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="item">
              <label htmlFor="mileage">Mileage</label>
              <input min={1} id="mileage" name="mileage" type="number" />
            </div>
            <div className="item">
              <label htmlFor="year">Year</label>
              <input min={1} id="year" name="year" type="number" />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="type">Service Type</label>
              <select name="serviceType">
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Car Type</label>
              <select name="carType">
                <option value="sedan">Sedan</option>
                <option value="hatchback">Hatchback</option>
                <option value="suv">SUV</option>
                <option value="crossover">Crossover</option>
                <option value="coupe">Coupe</option>
                <option value="convertible">Convertible</option>
                <option value="sportsCar">Sports Car</option>
                <option value="stationWagon">Station Wagon</option>
                <option value="minivan">Minivan</option>
                <option value="pickupTruck">Pickup Truck</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
                <option value="luxury">Luxury</option>
                <option value="offRoad">Off Road</option>
                <option value="microcar">Microcar</option>
                <option value="vintage">Vintage</option> 
              </select>
            </div>

            <div className="item">
              <label htmlFor="utilities">Insurance Coverage</label>
              <select name="utilities">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="transmission">Transmission</label>
              <select name="transmission">
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
                <option value="continuousVariable">Continuous Variable</option>
                <option value="dualClutch">Dual Clutch</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="make">Make (Brand)</label>
              <input
                id="make"
                name="make"
                type="text"
                placeholder="make Policy"
              />
            </div>
            <div className="item">
              <label htmlFor="model">Model</label>
              <input min={0} id="model" name="model" type="text" />
            </div>
            <div className="item">
              <label htmlFor="color">Color</label>
              <input min={0} id="color" name="color" type="text" />
            </div>
            <div className="item">
              <label htmlFor="condition">Condition</label>
              <select name="condition">
                <option value="mint">Mint Condition</option>
                <option value="excellent">Excellent Condition</option>
                <option value="very-good">Very Good Condition</option>
                <option value="good">Good Condition</option>
                <option value="fair">Fair Condition</option>
                <option value="poor">Poor Condition</option>
                <option value="restored">Restored</option>
                <option value="project">Project Car</option>
                <option value="as-is">As-Is</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="passengers">Passengers</label>
              <input min={0} id="passengers" name="passengers" type="number" />
            </div>
            <button className="sendButton">Add</button>
            {error && <span>error</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
         <UploadWidget
          uwConfig={{
            cloudName: "dtcluwm94",
            uploadPreset: "aurelius",
            multiple: true,
            folder: "avatarsAurelius",
          }} 
          setState ={setImages}
        />
      </div>
    </div>
  );
}

export default CreatePostPage;