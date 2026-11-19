import "./16.css";

// CHILD COMPONENT
function ProductCard(props) {
  return (
    <div className="card">
      <img
        src={props.image}
        alt={props.name}
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />

      <h2>{props.name}</h2>

      <p className="price">₹{props.price}</p>

      <p>{props.description}</p>
    </div>
  );
}

// PARENT COMPONENT
function App() {
  return (
    <div className="container">
      <h1>Online Product Catalogue</h1>

      <div className="grid">

        <ProductCard
          name="Smart Watch"
          price="4000"
          description="Track your fitness and receive notifications on the go."
          image="/smartwatch.jpg"
        />

        <ProductCard
          name="Wireless Headphones"
          price="2500"
          description="Enjoy crystal-clear sound with Bluetooth connectivity."
          image="/headphones.jpg"
        />

        <ProductCard
          name="Gaming Mouse"
          price="1200"
          description="Ergonomic design with customizable RGB lighting."
          image="/mouse.jpg"
        />

        <ProductCard
          name="Bluetooth Speaker"
          price="3000"
          description="Portable speaker with powerful bass and long battery life."
          image="/speaker.jpg"
        />

      </div>
    </div>
  );
}

export default App;
