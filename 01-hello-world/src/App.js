import "./App.css";

let name = "Vivek";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="container">
        <h2>Hello {name}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
          voluptate impedit nesciunt, optio veritatis sint quas ex eius culpa
          dignissimos. Quis suscipit eum, asperiores officia velit at cum sint
          labore in a saepe ex!
        </p>
      </div>
    </>
  );
}

export default App;
