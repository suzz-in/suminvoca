/* eslint-disable */ 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VocaAddPage from './pages/VocaAddPage';
import VocaUpdatePage from './pages/VocaUpdatePage';
import HomePage from './pages/HomePage';
import { useReducer } from 'react';

const App = () => {

  const vocaReducer = (state, action) => {
    const nextId = Math.max(0, ...state.map(voca=> voca.id)) + 1;
    switch (action.type){
      case "ADD" :
        return state.concat({
          id: nextId,
          word: action.word,
          pronunciation: action.pronunciation,
          definition: action.definition,
          exampleEn: action.exampleEn,
          exampleKo: action.exampleKo
        })
      case "REMOVE" : 
        return state.filter((voca)=> voca.id !== action.id);
      case "EDIT" :
        return state.map((voca)=> (voca.id === action.id ? {...action} : voca));
      default:
        return state;
    }
  }

  const [voca, dispatch] = useReducer(vocaReducer, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage />}></Route>
      </Routes>
      <Routes>
        <Route path='/voca/add' element={<VocaAddPage />}></Route>
      </Routes>
      <Routes>
        <Route path='/voca/update' element={<VocaUpdatePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
