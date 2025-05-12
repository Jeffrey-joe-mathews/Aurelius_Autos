// import { useSearchParams } from 'react-router-dom'
// import './Filter.scss'
// import { useState } from 'react'

// const Filter = () => {

//   const [searchParams, setSearchParams] = useSearchParams()
//   const [query, setQuery] = useState({
//     type : searchParams.get("type") || "",
//     carType : searchParams.get("carType") || "",
//     city : searchParams.get("city") || "",
//     transmission : searchParams.get("transmission") || "",
//     minPrice : searchParams.get("minPrice") || 0,
//     maxPrice : searchParams.get("maxPrice") || 100000000,
//   })

//   const handleChange = e => {
//     setQuery({
//       ...query,
//       [e.target.name]:e.target.value
//     })
//   }

//   const handleFilter = e => {
//     setSearchParams(query)
//   }

//   return (
//     <div className='filter'>
//       <h1>Search results for <b>{searchParams.get("city")}</b></h1>
//       <div className="top">
//         <div className="item">
//           <label htmlFor="city">Location</label>
//           <input type="text" id='city' name='city' placeholder='City Location' onChange={handleChange} defaultValue={query.city} />
//         </div>
//       </div>
//       <div className="bottom">
//         <div className="item">
//           <label htmlFor="type">Service Type</label>
//           <select name="type" id="type" onChange={handleChange} defaultValue={query.type} >
//             <option value="">any</option>
//             <option value="buy">Buy</option>
//             <option value="rent">Rent</option>
//           </select>        
//         </div>
//         <div className="item">
//           <label htmlFor="city">Car Type</label>
//           <select name='carType' id='carType' onChange={handleChange} defaultValue={query.carType} >
//             <option value="">any</option>
//             <option value="sedan">Sedan</option>
//             <option value="suv">SUV</option>
//             <option value="luxury">Luxury</option>
//             <option value="Sports">Sports</option>
//           </select>
//         </div>
//         <div className="item">
//           <label htmlFor="minPrice">Min Price</label>
//           <input type="number" id='minPrice' name='minPrice' placeholder='any' onChange={handleChange} defaultValue={query.minPrice} />
//         </div>
//         <div className="item">
//           <label htmlFor="maxPrice">Max Price</label>
//           <input type="number" id='maxPrice' name='maxPrice' placeholder='any' onChange={handleChange} defaultValue={query.maxPrice} />
//         </div>
//         <div className="item">
//           <label htmlFor="transmission">Transmission</label>
//           <select name="transmission" id="transmission" onChange={handleChange} defaultValue={query.transmission} >
//             <option value="">any</option>
//             <option value="automatic">Automatic</option>
//             <option value="manual">Manual</option>
//           </select>
//         </div>
//         <button onClick={handleFilter} >
//           <img src="/search.png" alt="Search" />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Filter

import { useSearchParams } from 'react-router-dom';
import './Filter.scss';
import { useState } from 'react';

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    date: searchParams.get("date") || "",
    carType: searchParams.get("carType") || "",
    city: searchParams.get("city") || "",
    transmission: searchParams.get("transmission") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 100000000,
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };

  return (
    <div className="filter">
      <h1>Search results for <b>{searchParams.get("city") || "All"}</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            onChange={handleChange}
            defaultValue={query.city}
          />
        </div>
      </div>
      <div className="bottom">
        {/* 🔄 Replaced Service Type with Date Input */}
        <div className="item">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleChange}
            value={query.date}
          />
        </div>
        <div className="item">
          <label htmlFor="carType">Car Type</label>
          <select
            name="carType"
            id="carType"
            onChange={handleChange}
            defaultValue={query.carType}
          >
            <option value="">any</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="luxury">Luxury</option>
            <option value="sportsCar">Sports</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.minPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.maxPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="transmission">Transmission</label>
          <select
            name="transmission"
            id="transmission"
            onChange={handleChange}
            defaultValue={query.transmission}
          >
            <option value="">any</option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
          </select>
        </div>
        <button onClick={handleFilter}>
          <img src="/search.png" alt="Search" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
