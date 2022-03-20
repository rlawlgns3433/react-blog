/* eslint-disable */
import React,{useState} from 'react';
import './App.css';
import Clock from './Component/Clock';



function App() {

  let [글제목, 글제목변경] = useState(['전남대학교 한식 맛집','전남대학교 일식 맛집','전남대학교 중식 맛집']);
  let [발행날짜, 발행날짜변경] = useState(['3월 11일', '3월 10일', '3월 9일']);
  let [상세내용, 상세내용변경] = useState(['전남대학교 한식 맛집 : 콩불(콩나물&불고기) 불고기와 콩나물을 볶아서 주는 맛있는 음식점',
                                         '전남대학교 한식 맛집 : 나주곰탕 냉면도 맛있지만 곰탕은 역시 나주곰탕!',
                                         '전남대학교 한식 맛집 : 앞으로 더 찾아볼 예정!!']);
  //자주 바뀌는 중요한 데이터는 state로 저장
  let [따봉, 따봉변경] = useState(0);

  // function 제목바꾸기(){
  //   var newArray = [...글제목]; // deep copy 그냥 copy하면 값 공유가 된다.
  //   newArray[2] = '전남대학교 양식 맛집';
  //   글제목변경(newArray);
  // }

  // function 순서바꾸기(){
  //   var newArray = [...글제목];
  //   var temp;

  //   temp = newArray[1];
  //   newArray[1] = newArray[2];
  //   newArray[2] = temp;
  //   글제목변경(newArray);
  // }

  var i =0;
  return (
    <div className="App">
      <div class = "black-nav">
        <div style={{color: 'blue', fontSize:'30px'}}>
        Kenny's Blog
        </div> 
      </div>
      <Clock/>
      <Modal/>{/* component */}
      <div class = "list">
      {/* <button onClick={제목바꾸기}>제목바꾸기</button>
      <button onClick={순서바꾸기}>순서바꾸기</button> */}
        <h3>{글제목[0]} <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span>{따봉}</h3>
        <p>{발행날짜[i]}</p>
        <hr/>
      </div>
      <div class = "list">
        <h3 e>{글제목[1]}<span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span>{따봉}</h3>
        <p>{발행날짜[i+1]}</p>
        <hr/>
      </div>
      <div class = "list">
        <h3>{글제목[2]}<span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span>{따봉}</h3>
        <p>{발행날짜[i+2]}</p>
        <hr/>
      </div>
    </div>
  );


function Modal(props){ /* 1. component 만들기 반복적으로 사용할 때 만듬
                     2. 자주 바뀌는 UI를 사용할 때 만듬
                     3. e다른 페이지 만들 때도 만듬
  */
  return(
    <div class = "modal">
      <h2>{글제목[0]}</h2>
      <p>{발행날짜[0]}</p>
      <p>{상세내용[0]}</p>
    </div>
  );
}


}



export default App;


