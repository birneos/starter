import { useState } from 'react'
import people from './data.js'
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from 'react-icons/fa'

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  console.log(name)

  return (
    <main>
      <article className="review">
        <div className="div img-container">
          <img className="person-img" alt={name} src={image} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
      </article>
      <FaChevronCircleLeft />
      <FaChevronCircleRight />
    </main>
  )
}
export default App
