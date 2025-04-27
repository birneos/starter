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

  /** Nächste Person mit normaler Logik */
  const nextBtn = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1
      return checkNumber(newIndex)
    })
  }

  /** Voherige Person mit normaler Logik */
  const prevBtn = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1
      return checkNumber(newIndex)
    })
  }

  /**
   * console.log( 1 % 4)
   * console.log( 2 % 4)
   * console.log( 3 % 4)
   * console.log( 4 % 4)
   * console.log( 10 % 4)
   */

  /** Nächste Person mit Modulo Logik */
  const nextBtnModulo = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length
      return newIndex
    })
  }

  /** Voherige Person mit Modulo Logik */
  const prevBtnModulo = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length
      return newIndex
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length - 1)

    if (randomNumber === index) {
      randomNumber = index + 1
    }

    /* Normale Logik mit checkNumber */
    setIndex(checkNumber(randomNumber))
  }

  /* Alternative mit Modulo wäre */
  const randomPersonModulo = () => {
    let randomNumber = Math.floor(Math.random() * people.length - 1)

    if (randomNumber === index) {
      randomNumber = index + 1
    }

    const newIndex = randomNumber % people.length
    setIndex(newIndex)
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
