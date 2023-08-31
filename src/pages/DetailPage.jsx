/* eslint-disable */ 
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailPage = ({voca}) => {
    const {id} = useParams();

    const detailItem = voca.filter((word)=> word.id ==id)


    const navigate = useNavigate();
    return( 
        <>
    <h1>디테일페이지</h1>
    <div>
          <h4>{detailItem[0].word}</h4>
          <span>{detailItem[0].pronunciation}</span>
        </div>
        <p>{detailItem[0].definition}</p>
        <div>{detailItem[0].exampleEn}</div>
        <div>{detailItem[0].exampleKo}</div>
        <button onClick={()=> navigate(`/home`)}>홈으로</button>
    </>)
}

export default DetailPage;