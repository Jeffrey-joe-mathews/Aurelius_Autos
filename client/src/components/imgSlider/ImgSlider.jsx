import { useState } from 'react';
import './imgSlider.scss'

const ImgSlider = ({images}) => {

    const [imageIndex, setImageIndex] = useState(null);

    const changeSlides = (direction) => {
        if (direction==="left") {
            if( imageIndex === 0 ) {
                setImageIndex(images.length-1);
            }
            else {
                setImageIndex(imageIndex-1)
            }
        }
            else {
            if( imageIndex === images.length-1 ) {
                setImageIndex(0);
            }
            else {
                setImageIndex(imageIndex+1)
            }
        } 
    }

  return (
      <div className='imgSlider'>
        { imageIndex !== null && (
        <div className="full">
            <div className="arr"><img src="/arrow.png" alt="previous" onClick={() => changeSlides("left")} /></div>
            <div className="imgContainer">
                <img src={images[imageIndex]} alt="" />
            </div>
            <div className="arr"><img className='right' src="/arrow.png" alt="next" onClick={() => changeSlides("right")} /></div>
            <div className="closeBtn" onClick={() => setImageIndex(null)} >(x)</div>
        </div>
        )}
        <div className="bigImage">
            <img src={images[0]} alt='' onClick={() => setImageIndex(
                () => (0)
            )} />
        </div>
        <div className='smallImages'>
            {images.slice(1).map((image, index) => (
                <img src={image} alt="image" key={index} onClick={() => setImageIndex(index+1)} />
            ))}
        </div>
    </div>
  )
}

export default ImgSlider