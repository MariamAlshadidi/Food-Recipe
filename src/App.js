import './App.css';
import Axios from 'axios'
import { useState} from 'react'
import ReacipeTile from './ReacipeTile';
import Logo from './img/logo.png'

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setrecipes] = useState([]);
  const [healthLable, sethealthLable] = useState('vegan');

  const YOUR_APP_ID = '59329a27';
  const YOUR_APP_KEY = '63f36f968711f81d2ac90f1f976ab98a';

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthLable}`;
  
  async function getRecipes(){
  var results = await Axios.get(url);
  setrecipes(results.data.hits)
  console.log(results.data);
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="app">
<h1 >FOOD Recipe <span> <img className='logo' src={Logo}/></span></h1>
<form className='app-searchForm' onSubmit={onSubmit}>
  <input  className="app-input" type='text'  placeholder='enter ingridient' value={query} onChange={(e) => setQuery(e.target.value) }/>
<select className='app-healthLable'>
  <option onClick={() => sethealthLable('vegan') }>vegan</option>
  <option onClick={() => sethealthLable('vegetarian') }>vegetarian</option>
  <option onClick={() => sethealthLable('paleo') }>paleo</option>
  <option onClick={() => sethealthLable('dairy-free') }>dairy-free</option>
  <option onClick={() => sethealthLable('gluten-free') }>gluten-free</option>
  <option onClick={() => sethealthLable('wheat-free') }>wheat-free”</option>
  <option onClick={() => sethealthLable('vfat-free') }>fat-free”</option>
  <option onClick={() => sethealthLable('low-sugar') }>low-sugar</option>
  <option onClick={() => sethealthLable('egg-free') }>egg-free</option>
  <option onClick={() => sethealthLable('peanut-free') }>peanut-free</option>
</select>
<input className='app-submit' type='submit' value='search'/>
</form>
<div className='app-recipes'>
 {recipes.map((recipe) => {
  return <ReacipeTile recipe={recipe} />;
 })} 
</div>
    </div>
  );
}

export default App;
