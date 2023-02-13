
import {useState} from 'react';
import './App.css'

const App = () => {
  
  //for storing the current form item
  const [item, setItem] = useState('');

  //for storing the current submitted form item in the main array
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {

    console.log('handleSubmit ran');
    
    // prevent page refresh
    e.preventDefault(); 
     
    if(item!=='')
    {
      setList([{id: `${item}-${Date.now()}`, item}, ...list])
    }

    // "${item}-${Date.now()" gives unique ID 
    // "..." is the spread operator

  };

  return (

    <div className="App">
      <div className="container">

       <h1> React Tasks App </h1>
        <form  onSubmit={handleSubmit}>

    <input 
    className="text-inp"
    type="text" 
    placeholder="Enter Items" 

    // onchange is required to eep track of entered values in the form

    onChange={(e) => setItem(e.target.value)}
    />

  <button className="btn-submit" type="submit">Add Items</button>
  </form>

    {
      list.map((li) => {
      return ( 
        <ul className="item-list">
          <li className='single'>
          <span className='list-text'>{li.item}</span>
          <button className="btn-edit" type="submit">Edit</button>
          <button className="btn-delete" type="submit">Delete</button>
          </li>

        </ul>
    
  )
})
} 
    </div>
    </div>
  );
};

export default App;

