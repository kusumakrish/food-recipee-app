import './App.css';
import React,{useState} from 'react';
import Product from './component/product';

function App() {
  const [data,setData] = useState("");
  const[menu,setMenu] = useState([]);
  const YOUR_APP_ID = '83ad9b59';
  const YOUR_APP_KEY = '664d7825a555350476af23bc95d24819';
  const SubmitHandler = (e) =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${data}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&"
    `).then((res)=>res.json()).then(menu=>setMenu(menu.hits))
  }


  return (
    <div className="App">
     <h1> Food Recipe App</h1>
     <form onSubmit = {SubmitHandler}>
      <input type="text" value={data} onChange={(e)=>setData (e.target.value)}/> <br /><br />
      <input className='btn btn-primary' type="submit" /><br/><br/>
     </form>
     {menu.length>=1? <Product menu={menu}/> : null}
    </div>
  );
}

export default App;
