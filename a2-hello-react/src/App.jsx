import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Header() {
  return (
    <header>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </header>
  );
}

export const Footer = () => (
  <footer>
    <p>
      Learning React and Vite? Check the{' '}
      <a
        href="https://react.dev"
        target="_blank"
        rel="noopener noreferrer">
        documentation
      </a>
    </p>
  </footer>
)


/**
 * Dynamically generate a description based on the array of strings.
 */
const description = ['Fundamental', 'Core', 'Advanced', 'Expert'];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function App() {
  const [count, setCount] = useState(0)
  const desc = description[getRandomInt(description.length)];
  return (
    <>
      <Header></Header>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {desc} concepts of Vite and React.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Footer />
    </>
  )
}

export default App