import "./square.css";

export const Square = ({ onClick, point }) => {
  return (
    <div className="squareWrapper" onClick={onClick}>
      {point}
    </div>
  );
};
