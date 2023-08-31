/* eslint-disable */ 
import React, { useState, useRef, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import VocaTemplate from '../components/VocaTemplate';
import VocaList from '../components/VocaList';
import VocaAdd from '../components/VocaAdd';


export default function Home({voca, dispatch}) {

  const initialState = {
    word: '',
    pronunciation: '',
    definition: '',
    exampleEn: '',
    exampleKo: '',
  };

  return (
    <VocaTemplate>
      <VocaList voca={voca}  dispatch={dispatch} />
      <VocaAdd  dispatch={dispatch} initialState={initialState}/>
    </VocaTemplate>
  );
}
