
import {useState} from 'react';
import uuid from 'react-uuid';
import './App.css'

const App = () => {
  
  //for storing the current form item
  const [item, setItem] = useState('');

  //for storing the current submitted form item in the main array
const [list, setList] = useState([
  {id: uuid(), item: "Go out for a walk"},
  {id: uuid(), item: "Read React Fundamentals"},
  {id: uuid(), item: "Practice Guitar"},
  {id: uuid(), item: "Buy Groceries for the Dinner"},
  {id: uuid(), item: "Study Computer Fundamentals"},
]);

  const handleSubmit = (e) => {
    
    // prevent page refresh
    e.preventDefault(); 
     
    if(item!=='')
    {
      setList([{id: uuid(), item}, ...list]);

      setItem('');
    }

    // "${item}-${Date.now()" gives unique ID 
    // "..." is the spread operator

  };

  const handleDelete = (id) =>{
    //filters the list based on id which is to be deleted
    const deleteList = list.filter((to) => to.id !== id);

    // set the current state to display deleted item by passing the filtered array to setList
    setList([...deleteList])
  }

  return (

    <div className="App">
      <div className="container">

       <h2> React Tasks App </h2>
        <form  onSubmit={handleSubmit} className="form-div">

    <input 
    className="text-inp"
    type="text" 
    placeholder="Enter Items" 
    value={item}
    // onchange is required to eep track of entered values in the form

    onChange={(e) => setItem(e.target.value)}
    />

  <button className="btn-submit" type="submit" > ADD ITEMS </button>
  </form>

    {
      list.map((li) => {
      return ( 
        <ul className="item-list">
          <li className='single-li'>
          <span className='list-text'>{li.item}</span>
          <button className="btn-delete" type="submit" onClick={()=>handleDelete(li.id)}> DELETE </button>
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

