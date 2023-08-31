/* eslint-disable */ 
import React, { useState } from 'react';
import { Link, Router, Route, BrowserRouter, useNavigate } from 'react-router-dom';
// import { TiTickOutline, TiTick, TiEdit, TiTimes } from 'react-icons/ti';

const VocaListItem = ({ voca, dispatch }) => {
  const navigate = useNavigate();
  const { id, word, pronunciation, definition, exampleEn, exampleKo } = voca;
  const [value, setValue] = useState(
    voca || {
      id: '',
      word: '',
      pronunciation: '',
      definition: '',
      exampleEn: '',
      exampleKo: '',
    }
  );

  const update = (content) => {
    dispatch({type:"EDIT",   
    id: content.id,     
    word: content.word,
    pronunciation: content.pronunciation,
    definition: content.definition,
    exampleEn: content.exampleEn,
    exampleKo: content.exampleKo })

    // setValue({ ...value, [name]: text });
  };

  const remove= ()=>{
    const notice = window.confirm("정말 삭제하시겠습니까?")
    if(notice){
      dispatch({type:"REMOVE", id: voca.id })
    }
  } 
  return (
    <article>
      <div>
        <button>암기 완료</button>
          <button onClick={() => navigate('/voca/update')}>수정하기</button>
        <button onClick={() => remove()}>삭제</button>
      </div>
      <div>
        <h4>{word}</h4>
        <span>{pronunciation}</span>
      </div>
      <p>{definition}</p>
      <div>{exampleEn}</div>
      <div>{exampleKo}</div>
    </article>
  );
};

export default VocaListItem;
