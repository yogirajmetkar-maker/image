import { useState } from "react";
import "./7,8,9.css";

function Card(props) {
  return (
    <div className="sc">
      <h1>{props.name}</h1>
      <p>{props.roll}</p>
      <p>{props.dept}</p>
      <p>{props.email}</p>
      <button onClick={props.remove}>Remove</button>
    </div>
  );
}

function App() {
  const [students, setstudents] = useState([]);
  const [name, setname] = useState("");
  const [roll, setroll] = useState("");
  const [dept, setdept] = useState("");
  const [email, setemail] = useState("");

  function Add() {
    if (name === "" || roll === "" || dept === "" || email === "") {
      alert("Enter details");
      return;
    }

    const student = {
      id: Date.now(),
      name: name,
      roll: roll,
      dept: dept,
      email: email
    };

    setstudents([...students, student]);

    setname("");
    setroll("");
    setdept("");
    setemail("");
  }

  function Remove(empid) {
    setstudents(students.filter((e) => e.id !== empid));
  }

  return (
    <div>
      <h1>Student Form</h1>

      <input placeholder="UserName" value={name} onChange={(s) => setname(s.target.value)} />
      <input placeholder="Roll NUMBER" value={roll} onChange={(s) => setroll(s.target.value)} />
      <input placeholder="Department" value={dept} onChange={(s) => setdept(s.target.value)} />
      <input placeholder="Email" value={email} onChange={(s) => setemail(s.target.value)} />

      <button onClick={Add}>Add</button>

      <h1>Total: {students.length}</h1>

      {students.map((e) => (
        <Card
          key={e.id}
          name={e.name}
          roll={e.roll}
          dept={e.dept}
          email={e.email}
          remove={() => Remove(e.id)}
        />
      ))}
    </div>
  );
}

export default App;