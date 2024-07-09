/** @format */

function GroceryList({ items, handleOnToggle, handleRemoveItem}) {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className="card mb-2 p-2 d-flex justify-content-between align-center"
        >
          <div
            className="d-flex align-items-center"
            style={{ cursor: 'pointer' }}
          >
            <div
              onClick={() => handleOnToggle(item.id)}
              style={{ height: '20px', width: '20px' }}
              className={`rounded-circle me-2 ${
                item.bought ? 'bg-success' : 'bg-secondary'
              }`}
            ></div>

            <span
              className={`${item.bought ? 'text-decoration-line-through' : ''}`}
            >
              <p className="display-6 pt-2">{item.text}</p>
            </span>
            <button onClick={() => handleRemoveItem(item.id)} className="btn btn-danger ms-5">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GroceryList;
