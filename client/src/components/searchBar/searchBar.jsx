import { useState } from 'react'
import { Link } from 'react-router-dom';
import './searchBar.scss'

function SearchBar(){
  const types = ["buy", "rent"];
  const [query, setQuery] = useState({
    type:"buy",
    city:"",
    minPrice:0,
    maxPrice:1000000000
  })
  const switchType = (type) => {
    setQuery(prev => ({...prev, type:type}))
  }
  const handleChange = event => {
    setQuery(prev => ({...prev, [event.target.name] : event.target.value}))
  }
  return (
    <div className='searchBar'>
      <div className="type">
        {types.map((type) => (
          <button className={query.type === type ? "active" : ""} key={type} onClick={() => switchType(type)} >{type}</button>
        ))}
      </div>
      <form action="" method="get">
        <input type="text" name='city' placeholder='City' onChange={handleChange} />
        <input type="number" name='minPrice' min={0} max={1000000000} placeholder='Min Price' onChange={handleChange} />
        <input type="number" name='maxPrice' min={0} max={1000000000} placeholder='Max Price' onChange={handleChange} />
        <Link to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`} >
          <button>
            <img src="/search.png" alt="search" />
          </button>
        </Link>
      </form>
    </div>
  )
}

export default SearchBar