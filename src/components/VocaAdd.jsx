/* eslint-disable */ 
import React, { useState } from 'react';

const VocaAdd = ({ dispatch, initialState}) => {


  const [voca, setVoca] = useState(initialState);

  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setVoca({ ...voca, [name]: value });
  };

  //props로 전달받은 dispatch 실행하기 위한 함수
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type:"ADD", 
      word: voca.word,
      pronunciation: voca.pronunciation,
      definition: voca.definition,
      exampleEn: voca.exampleEn,
      exampleKo: voca.exampleKo
    });
    setVoca(initialState);
  };

  return (
    <form>
      <h1>단어 추가하기</h1>
      <div>
        <input type='text' name='word' value={voca.word} onChange={onChange} />
      </div>
      <div>
        <input
          type='text'
          name='pronunciation'
          value={voca.pronunciation}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type='text'
          name='definition'
          value={voca.definition}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type='text'
          name='exampleEn'
          value={voca.exampleEn}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type='text'
          name='exampleKo'
          value={voca.exampleKo}
          onChange={onChange}
        />
        <div>
          <button onClick={onSubmit}>저장하기</button>
        </div>
      </div>
    </form>
  );
};

export default VocaAdd;
