import './marker.scss'

const Marker = ({data}) => {
  return (
    <div className='marker'>
        {data.map()}
    </div>
  )
}

export default Marker