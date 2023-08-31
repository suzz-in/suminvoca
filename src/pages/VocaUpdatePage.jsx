/* eslint-disable */ 
import React, { useState } from 'react';

const VocaUpdatePage = ({ onInsert }) => {
  const initialState = {
    word: '',
    pronunciation: '',
    definition: '',
    exampleEn: '',
    exampleKo: '',
  };

  const [voca, setVoca] = useState(initialState);
  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setVoca({ ...voca, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(voca);
    setVoca(initialState);
  };

  return (
    <form>
      <h1>단어 수정하기</h1>
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
      </div>
      <form onInsert={onInsert}>
        <button onClick={onSubmit}>저장하기</button>
      </form>
    </form>
  );
};

export default VocaUpdatePage;
