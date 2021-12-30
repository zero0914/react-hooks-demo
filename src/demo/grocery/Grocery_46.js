import React, { useState , useEffect} from 'react'
import './Grocery_46.css'
import List_46 from './List_46';
import Alert_46 from './Alert_46';

const Grocery_46 = () => {
    
    const [name, setName] = useState('');
    const [list, setList] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [alert, setAlert] = useState({
        show: false,
        type: '',
        msg: '',
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            showAlert(true, 'danger' , 'please enter value')
        }else if (name && isEditing){
            setIsEditing(false);
        }else {
            showAlert(true, 'success' , 'item added to the list')
            const newItem = { 
                id: new Date().getTime().toString(),
                title: name
            }
            setList([...list, newItem]);
            setName('');
        }
    };

    const removeItem = (id) => {
        showAlert(true, 'danger' , 'item removed');
        setList(list.filter( (item)=> item.id !==id ));
    };

    const editItem = (id) => {
        const specificItem = list.find( (item) => item.id ===id);
        setIsEditing(true);
        setEditId(id);
        setName(specificItem.title);
    }

    const clearList = () => {
        showAlert(true, 'danger' , 'empty list')
        setList([]);
    }

    const showAlert = (show=false , type='' , msg='') => {
        setAlert( {show ,type ,msg} );
    }   

    return (
    
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        { alert.show && (<Alert_46 {...alert} removeAlert={showAlert} list={list} />)}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? `edit` : `submit`}  
          </button>
        </div>
      </form>
      { list.length > 0 && (
        <div className="grocery-container">
            <List_46 items={list} removeItem={removeItem} editItem={editItem}/>
        <button className="clear-btn" onClick={clearList}>clear items</button>
        </div>
      )}   
    </section>
    
  )
}

export default Grocery_46
