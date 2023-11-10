import React, {  } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({todo, onUpdate, onDelete}) {
  // const [checked, setChecked] = useState(false);
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({...todo, status})
  } 
  const handleDelete = () => onDelete(todo);
  return (
  <li>
    <input 
    id='checkbox' 
    type='checkbox' 
    checked={status === 'completed'} 
    onChange={handleChange} />
    <label htmlFor='checkbox'>{text}</label>
    <button onClick={handleDelete}><FaTrashAlt /></button>
    </li>
  );
}

