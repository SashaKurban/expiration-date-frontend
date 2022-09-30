import "./FilterInput.css";

export default function FilterInput({ order, filter, setFilter, setOrder }) {
  const options = [
    { label: "none", value: "none" },
    { label: "leftover", value: "leftover" },
    { label: "produce", value: "produce" },
    { label: "meat", value: "meat" },
    { label: "condiment", value: "condiment" },
    { label: "fish", value: "fish" },
    { label: "dairy", value: "dairy" },
    { label: "grain", value: "grain" },
    { label: "jar-can", value: "jar-can" },
    { label: "snack", value: "snack" },
    { label: "drink", value: "drink" },
    { label: "frozen", value: "frozen" },
  ];
  const orders = [
    { label: "expiring soon", value: "increasing" },
    { label: "expiring last", value: "decreasing" },
    { label: "open date", value: "recently-opened" },
  ];

  return (
    <div className="filter-input">
      <div className="filter-col">
        <h2>Filter</h2>
        <div className="checkbox-section">
          {options.map((option) => (
            <label key={option.value + "filter"} className="checkbox">
              <input
                className="filter-checkbox"
                type="checkbox"
                checked={filter === option.value ? true : false}
                onChange={() => setFilter(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
      <div className="order-col">
        <h2>Order</h2>
        <div className="checkbox-section">
          {orders.map((option) => (
            <label key={option.value} className="checkbox">
              <input
                type="checkbox"
                checked={order === option.value ? true : false}
                onChange={() => setOrder(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
