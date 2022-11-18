
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addNumber } from './redux/compteur'
import { useEffect } from 'react';
import { allPoste } from './redux/poste';

function App() {
  const val = useSelector(state => state?.monCompteur);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allPoste())
  }, [])
  const PosteListe = useSelector(state => state?.mesPoste);
  const { posteListe, loading } = PosteListe;
  console.log(posteListe, loading);
  return (
    <div className="App">
      <h3>Le nombre :{val.value} </h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(addNumber(10))}>ADD</button>

      {loading ? (<h3>Loading .... </h3>) : (posteListe?.map(poste => (
        <>
          <h5>{poste?.title}</h5>
        </>
      )))

      }
      {/* {loading &&
        <h3>Loading .... </h3>
      } */}
    </div>
  );
}

export default App;
