import './imgSlider.scss'

const ImgSlider = ({images}) => {
  return (
    <div className='imgSlider'>
        <div className="full">
            <div className="arr"><img src="/arrow.png" alt="previous" /></div>
            <div className="imgContainer">
                <img src={images[0]} alt="" />
            </div>
            <div className="arr"><img className='right' src="/arrow.png" alt="next" /></div>
            <div className="closeBtn">(x)</div>
        </div>
        <div className="bigImage">
            <img src={images[0]} alt='' />
        </div>
        <div className='smallImages'>
            {images.slice(1).map((image, index) => (
                <img src={image} alt="image" key={index} />
            ))}
        </div>
    </div>
  )
}

export default ImgSlider