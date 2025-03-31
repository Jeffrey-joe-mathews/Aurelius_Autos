import './Filter.scss'

const Filter = () => {
  return (
    <div className='filter'>
      <h1>Search results for <b>London</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id='city' name='city' placeholder='City Location' />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Service Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>        
        </div>
        <div className="item">
          <label htmlFor="city">Car Type</label>
          <select name='carType' id='carType' >
            <option value="">any</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="luxury">Luxury</option>
            <option value="Sports">Sports</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input type="number" id='minPrice' name='minPrice' placeholder='any' />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="number" id='maxPrice' name='maxPrice' placeholder='any' />
        </div>
        <div className="item">
          <label htmlFor="trans">Transmission</label>
          <select name="trans" id="trans">
            <option value="">any</option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
          </select>
        </div>
        <button >
          <img src="/search.png" alt="Search" />
        </button>
      </div>
    </div>
  )
}

export default Filter