/** @format */

function IncrementButton({ onIncrement }) {
  return (
    <div>
      <button onClick={onIncrement} className="btn btn-success">
        Increment
      </button>
    </div>
  );
}
export default IncrementButton;
