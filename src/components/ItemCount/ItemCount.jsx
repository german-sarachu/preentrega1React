import "./ItemCount.css";

export default function ItemCount({ stock, count, increment, decrement }) {
  return (
    <div className="item--count__container">
      <div className="item--count--counter__container">
        <button
          className="item--count-button"
          onClick={decrement}
          disabled={count < 1}
        >
          -
        </button>
        <span className="item--count-button">{count}</span>
        <button
          className="item--count-button"
          onClick={increment}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
    </div>
  );
}
