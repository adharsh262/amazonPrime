// Write your code here
import './index.css'

const MovieItem = props => {
  const {eachMovie} = props
  const {categoryId, videoUrl, thumbnailUrl} = eachMovie

  return (
    <div>
      <img src={thumbnailUrl} alt="thumbnail" className="imgMovietumbnamil" />
    </div>
  )
}

export default MovieItem
