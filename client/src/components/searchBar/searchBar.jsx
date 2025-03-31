import { useState } from 'react'
import './searchBar.scss'

function SearchBar(){
  const types = ["buy", "rent"];
  const [query, setQuery] = useState({
    type:"buy",
    location:"",
    minPrice:0,
    maxPrice:0
  })
  const switchType = (type) => {
    setQuery(prev => ({...prev, type:type}))
  }
  return (
    <div className='searchBar'>
      <div className="type">
        {types.map((type) => (
          <button className={query.type === type ? "active" : ""} key={type} onClick={() => switchType(type)} >{type}</button>
        ))}
      </div>
      <form action="" method="get">
        <input type="text" name='loaction' placeholder='City Location' />
        <input type="number" name='minPrice' min={0} max={1000000000} placeholder='Min Price' />
        <input type="number" name='maxPrice' min={0} max={1000000000} placeholder='Max Price' />
        <button>
          <img src="/search.png" alt="search" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar