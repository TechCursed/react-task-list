
import {useState} from 'react';

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
    <div>

      {/* form has the method onsubmit for post submission functionalities  */}
      
      <form onSubmit={handleSubmit}>

        <input type="text" 
        placeholder="Enter Items" 

        // onchange is required to eep track of entered values in the form

        onChange={(e) => setItem(e.target.value)}
        />

        <button type="submit">Add Items</button>
      </form>

      {
        list.map((li) => {
          return <h3>{li.item}</h3>
        })
      }

    </div>
  );
};

export default App;

