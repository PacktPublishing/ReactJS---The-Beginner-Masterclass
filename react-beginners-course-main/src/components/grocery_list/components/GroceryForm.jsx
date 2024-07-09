/** @format */

function GroceryForm({ item, handleOnSubmit, handleOnChange }) {
  return (
    <div>
      <form onSubmit={handleOnSubmit} className="mb-3">
        <input
          className="form-control"
          placeholder="Add a grocery item"
          value={item}
          onChange={handleOnChange}
          type="text"
        />
        <button className="btn btn-primary mt-2">Add Item</button>
      </form>
    </div>
  );
}
export default GroceryForm;
