export default function TodoItem({ id, title, checked, onDelete }) {

  return (
    <li>
      <div className="todo__main">
        <div className="todo__main-input">
          <input type="checkbox" checked={checked} />
          <lable
            htmlFor="item_${index}"
            className="${item.important ? 'important' : ''}"
          >
            {title}
          </lable>
        </div>
        <button
          className="liBefore"
          onClick={() => onDelete(id)}
        >
          Del
        </button>
      </div>
    </li>
  );
}
