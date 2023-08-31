/* eslint-disable */ 
import React, { useState, useRef, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import VocaTemplate from '../components/VocaTemplate';
import VocaList from '../components/VocaList';
import VocaAddPage from './VocaAddPage';


export default function Home() {
  const [isHome, setIsHome] = useState(true);
  const nextId = useRef(4);


  const navigate = useNavigate();


  const goAddpage = () =>{
    navigate(`/voca/add`)
  }
  const initialState = {
    word: '',
    pronunciation: '',
    definition: '',
    exampleEn: '',
    exampleKo: '',
  };
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



  const vocaReducer = (state, action) => {
    console.log("---vocaReducer실행됨///state---", state)
    console.log("---vocaReducer실행됨///action---", action.type)
    const nextId = Math.max(0, ...state.map(voca=> voca.id)) + 1;
    console.log("nextId", nextId)
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

  const [voca, dispatch] = useReducer(vocaReducer, vocas)





  // 단어 삭제
  const onRemove = (id) => {
    setVocas(vocas.filter((voca) => voca.id !== id));
  };

  // 단어 수정
  const onUpdate = (voca) => {
    const target = vocas.findIndex((currentVoca) => currentVoca.id === voca.id);
    const newVocas = [...vocas];
    newVocas.splice(target, 1, voca);
    setVocas(newVocas);
  };

  return (
    <VocaTemplate>
      <VocaList voca={voca}  dispatch={dispatch} />
      <VocaAddPage  dispatch={dispatch} initialState={initialState} setVocas={setVocas} vocas={vocas}/>
        <button onClick={goAddpage}>+</button>

    </VocaTemplate>
  );
}
