import { useEffect, useState } from "react";
import { Square } from "../square/Square";
import "./tictac.css";

export const Tictac = () => {
  const [point, setPoint] = useState(["", "", "", "", "", "", "", "", ""]);

  const [flag, setFlag] = useState(false);

  const winner = () => {
    let pattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < pattern.length; i++) {
      let [a, b, c] = pattern[i];

      if (point[a] && point[a] === point[b] && point[a] === point[c]) {
        return point[a];
      }
    }
    return null;
  };

  useEffect(() => {
    let answer = winner();

    if (answer) {
      alert(`The winner is ${answer}`);
      setPoint(["", "", "", "", "", "", "", "", ""]);
    }
  }, [point]);

  const handleClick = (value) => {
    if (point[value]) {
      return;
    } else {
      if (flag === false) {
        setPoint(point.map((e, index) => (index === value ? (e = "x") : e)));
        setFlag(true);
      } else {
        setPoint(point.map((e, index) => (index === value ? (e = "o") : e)));
        setFlag(false);
      }
    }
  };
  return (
    <div className="tictacWrapper">
      <div className="box">
        <Square onClick={() => handleClick(0)} point={point[0]} />
        <Square onClick={() => handleClick(1)} point={point[1]} />
        <Square onClick={() => handleClick(2)} point={point[2]} />
      </div>
      <div className="box">
        <Square onClick={() => handleClick(3)} point={point[3]} />
        <Square onClick={() => handleClick(4)} point={point[4]} />
        <Square onClick={() => handleClick(5)} point={point[5]} />
      </div>
      <div className="box">
        <Square onClick={() => handleClick(6)} point={point[6]} />
        <Square onClick={() => handleClick(7)} point={point[7]} />
        <Square onClick={() => handleClick(8)} point={point[8]} />
      </div>
    </div>
  );
};
