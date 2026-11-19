import "./15.css";

// CHILD COMPONENT
// Reusability = write the component once, use it many times.

function EmployeeCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>

      <p>
        <strong>Employee ID:</strong> {props.id}
      </p>

      <p>
        <strong>Designation:</strong> {props.designation}
      </p>

      <p>
        <strong>Salary:</strong> ₹{props.salary}
      </p>
    </div>
  );
}

// PARENT COMPONENT
// Uses the same card 3 times with different props

function App() {
  return (
    <div className="container">
      <h1>Employee Details</h1>

      <div className="grid">

        <EmployeeCard
          name="Neha Gupta"
          id="E101"
          designation="Software Engineer"
          salary="55000"
        />

        <EmployeeCard
          name="Rahul Sharma"
          id="E102"
          designation="Developer"
          salary="60000"
        />

        <EmployeeCard
          name="Priya Verma"
          id="E103"
          designation="Accountant"
          salary="45000"
        />

      </div>
    </div>
  );
}

export default App;