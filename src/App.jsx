/* eslint-disable */ 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import { useReducer, useState } from 'react';


const App = () => {

   // 단어 list mock 데이터
   const [vocas, setVocas] = useState([
     {
       id: 1,
       word: 'Apple',
       pronunciation: '[æpl]',
       definition: '사과',
       exampleEn: 'Apple is fruit',
       exampleKo: '사과는 과일이다',
     },
     {
       id: 2,
       word: 'Orange',
       pronunciation: '[ˈɔrɪndʒ]',
       definition: '오렌지',
       exampleEn: 'Orange is fruit',
       exampleKo: '오렌지는 과일이다',
     },
     {
       id: 3,
       word: 'Banana',
       pronunciation: '[bəˈnænə]',
       definition: '바나나',
       exampleEn: 'Banana is fruit',
       exampleKo: '바나나는 과일이다',
     },
   ]);
 
 
 //리듀서 함수 정의
   const vocaReducer = (state, action) => {
     console.log("---vocaReducer실행됨///state---", state)
     console.log("---vocaReducer실행됨///action---", action)
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
         return state.map((voca)=> (voca.id == action.id ? {...action} : voca));
       default:
         return state;
     }
   }
 //useReducer 사용-> 최상위 페이지에서 선언후 props로 내려줄 예정 !
   const [voca, dispatch] = useReducer(vocaReducer, vocas)
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage voca={voca} dispatch={dispatch}/>}></Route>
      </Routes>
      <Routes>
        <Route path='/detail/:id' element={<DetailPage voca={voca} dispatch={dispatch}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
