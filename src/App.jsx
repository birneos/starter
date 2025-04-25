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

  const nextBtn = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1
      if (newIndex > people.length - 1) return 0

      return newIndex
    })
  }
  const prevBtn = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1
      if (newIndex < 0) return people.length - 1

      return newIndex
    })
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img className="person-img" alt={name} src={image} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevBtn}>
            <FaChevronCircleLeft />
          </button>
          <button className="next-btn" onClick={nextBtn}>
            <FaChevronCircleRight />
          </button>
        </div>
      </article>
    </main>
  )
}
export default App
