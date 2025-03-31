import SearchBar from '../../components/searchBar/searchBar'
import './homePage.scss'

function HomePage(){
  return (
    <div className='homePage'>
        <div className="txtContainer">
            <div className="wrapper">
                <h1 className='title' >Speedy Rentals for Your Busy Life</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nihil labore officia dicta corporis ad harum cumque accusantium veritatis dignissimos omnis magni illo expedita nesciunt voluptate, quo natus sequi consequuntur molestiae ullam rerum ratione. Quas, numquam excepturi amet enim dolore delectus inventore accusamus sequi non impedit consequuntur voluptate? Nobis, omnis.</p>
                <SearchBar />
                <div className="boxes">
                    <div className="box">
                        <h1>10+</h1>
                        <h2>years of experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Awards Gained</h2>
                    </div>
                    <div className="box">
                        <h1>100000+</h1>
                        <h2>Cars Rented</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg.svg" alt="" srcset="" />
        </div>
    </div>
  )
}

export default HomePage 