/* eslint-disable */ 
import React, { useState, useRef, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import VocaTemplate from '../components/VocaTemplate';
import VocaList from '../components/VocaList';
import VocaAdd from '../components/VocaAdd';


export default function Home() {

  //페이지 이동을 하기 위한 변수(navigate)와 함수(goAddpage) 
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
    <VocaTemplate>
      <VocaList voca={voca}  dispatch={dispatch} />
      <VocaAdd  dispatch={dispatch} initialState={initialState}/>
        {/* <button onClick={goAddpage}>+</button> */}

    </VocaTemplate>
  );
}
