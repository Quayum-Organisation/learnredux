
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement,addNumber} from './redux/compteur'
import { useEffect } from 'react';
import { allPoste } from './redux/poste';

function App() {
  const val = useSelector(state =>state?.monCompteur);
  const PosteListe = useSelector(state =>state?.mesPoste);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allPoste())
  }, [])
  console.log(val)
  console.log(PosteListe);
  return (
    <div className="App">
      <h3>Le nombre :{val.value} </h3>
      <button onClick={()=>dispatch(increment()) }>+</button>
      <button onClick={()=>dispatch(decrement()) }>-</button>
      <button onClick={()=>dispatch(addNumber(10)) }>ADD</button>
    </div>
  );
}

export default App;
