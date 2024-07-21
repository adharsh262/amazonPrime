// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesTOScroll: 1,
  }

  return (
    <div className="mainPage">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt="prime video"
        className="imagemainPAgehead"
      />
      <div className="reactSlickContainer">
        <Slider {...settings}>
          {moviesList.map(eachMovie => (
            <MovieItem key={eachMovie.id} eachMovie={eachMovie} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PrimeVideo
