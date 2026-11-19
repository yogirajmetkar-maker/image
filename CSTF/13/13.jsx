import { useState } from "react";
import "./13.css";

function Card(props) {
  return (
    <div className="sc">
      <h2>{props.name}</h2>
      <p>Roll No: {props.roll}</p>
      <p>English: {props.m1}</p>
      <p>Physics: {props.m2}</p>
      <p>Chemistry: {props.m3}</p>
      <p>Maths: {props.m4}</p>
      <p>Biology: {props.m5}</p>

      <h3>Total: {props.total}</h3>
      <h3>Percentage: {props.per}%</h3>
      <h3>Result: {props.result}</h3>
    </div>
  );
}

function App() {
  const [name, setname] = useState("");
  const [roll, setroll] = useState("");
  const [m1, setm1] = useState("");
  const [m2, setm2] = useState("");
  const [m3, setm3] = useState("");
  const [m4, setm4] = useState("");
  const [m5, setm5] = useState("");

  const total = Number(m1) + Number(m2) + Number(m3) + Number(m4) + Number(m5);
  const per = total / 5;

  let result;

  if (per >= 35) {
    result = "Pass";
  } else {
  result = "Fail";
 }

  return (
    <div>
      <h1>Student Result</h1>

      <input placeholder="Name" onChange={(e) => setname(e.target.value)} />
      <input placeholder="Roll No" onChange={(e) => setroll(e.target.value)} />

      <input placeholder="English" onChange={(e) => setm1(e.target.value)} />
      <input placeholder="Physics" onChange={(e) => setm2(e.target.value)} />
      <input placeholder="Chemistry" onChange={(e) => setm3(e.target.value)} />
      <input placeholder="Maths" onChange={(e) => setm4(e.target.value)} />
      <input placeholder="Biology" onChange={(e) => setm5(e.target.value)} />

      <Card
        name={name}
        roll={roll}
        m1={m1}
        m2={m2}
        m3={m3}
        m4={m4}
        m5={m5}
        total={total}
        per={per}
        result={result}
      />
    </div>
  );
}

export default App;