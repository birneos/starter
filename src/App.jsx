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

  const checkNumber = (number) => {
    if (number > people.length - 1) return 0

    if (number < 0) return people.length - 1

    return number
  }

  const nextBtn = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1
      return checkNumber(newIndex)
    })
  }
  const prevBtn = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1
      return checkNumber(newIndex)
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length - 1)

    if (randomNumber === index) {
      randomNumber = index + 1
    }

    setIndex(checkNumber(randomNumber))
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
        <button className="btn btn-hipster" onClick={randomPerson}>
          Suprise Me
        </button>
      </article>
    </main>
  )
}
export default App
