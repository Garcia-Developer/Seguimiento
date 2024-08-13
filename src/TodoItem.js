import './TodoItem.css';

function TodoItem(props) {
    return (
  
      <li className="TodoItem">
        <span className={`Icon Icon-check 
          ${props.completed && "Icon-check--active"}`}>
        V
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}
        `}>
          {props.text}
        
          </p>
        <spam className="Icon Icon-delete">
        X
          </spam>
      </li>
    );
  }
  export {TodoItem}