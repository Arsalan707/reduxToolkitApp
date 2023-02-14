import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './redux/slice/userSlice';

function App() {
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state);

  if (dataState.user.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(fetchUser());
        }}>
        FETCH API
      </button>
      {dataState.user.dataa?.map((e) => (
        <li>{e.name}</li> //show only name field instead all other
      ))}
    </div>
  );
}

export default App;
