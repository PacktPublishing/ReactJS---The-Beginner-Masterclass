/** @format */

function DecrementButton({ onDecrement }) {
  return (
    <div>
      <button onClick={onDecrement} className="btn btn-danger">
        Decrement
      </button>
    </div>
  );
}
export default DecrementButton;

/*
This is what goes inside the App.jsx parent component as part of lifting state up

const [count, setCount] = useState(0);

function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
*/
