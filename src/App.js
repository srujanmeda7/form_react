import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const[items,setItems]=useState({
    
    firstname:"",
    lastname:"",
    email:"",
    number:""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItems({ ...items, [name]: value });
  };

  function onSubmit(e){
e.preventDefault();
axios.post("http://localhost:8080/additem",items).then((response)=>{
  console.log("done",response);
}).catch((error)=>{
  console.error("error",error);
})
  }
  return (
    <>
    {/* <form className='form' onSubmit={onSubmit}>
      <input placeholder='id' onChange={handleInputChange} value={items.id} name='id'/>
      <input placeholder='name' onChange={handleInputChange} value={items.name} name='name'/>
<input type='submit'/>
    </form> */}
    
    <form className="form" onSubmit={onSubmit}>
    <p className="title">Register </p>
        <div className="flex">
        <label>
            <input className="input" type="text" placeholder="" onChange={handleInputChange} value={items.firstname} required="" name='firstname'/>
            <span>Firstname</span>
        </label>

        <label>
            <input className="input" type="textr" placeholder="" onChange={handleInputChange} value={items.lastname} name='lastname' required=""/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input className="input" type="email" placeholder="" onChange={handleInputChange} value={items.email} name='email' required=""/>
        <span>Email</span>
    </label> 
    <label>
        <input className="input" type="tel" placeholder="" onChange={handleInputChange} name='number' value={items.number} required=""/>
        <span>Number</span>
    </label> 
    <button className="submit">Submit</button>
</form>
    {/* <div>
        <h2>Product List</h2>
        {products.length > 0 ? (
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                {product.id}: {product.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No products available.</p>
        )}
      </div> */}
      </>
  );
}

export default App;
