import "./ExpenseItem.css";

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$245.884</div>
      </div>
    </div>
  );
}
