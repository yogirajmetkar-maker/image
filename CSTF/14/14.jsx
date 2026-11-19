import "./14.css";

// CHILD COMPONENT
// Shows the student profile using props

function StudentProfile(props) {
  return (
    <div className="profile-card">

      <div className="avatar">
        {props.name.charAt(0)}
      </div>

      <h2>{props.name}</h2>

      <p className="college">
        {props.college}
      </p>

      <br />

      <p>
        <strong>Roll No:</strong> {props.roll}
      </p>

      <p>
        <strong>Department:</strong> {props.department}
      </p>

    </div>
  );
}

// PARENT COMPONENT
// Sends the data using props

function App() {
  return (
    <div className="page">

      <h1>Student Profile</h1>

      <StudentProfile
        name="Rahul Sharma"
        roll="23CS101"
        department="Computer Science"
        college="ABC College of Engineering"
      />

    </div>
  );
}

export default App;