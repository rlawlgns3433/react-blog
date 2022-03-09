/* eslint-disable */
import React,{useState} from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['전남대학교 한식 맛집','전남대학교 일식 맛집','전남대학교 중식 맛집']);
  //자주 바뀌는 중요한 데이터는 state로 저장
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기(){
    var newArray = [...글제목]; // deep copy 그냥 copy하면 값 공유가 된다.
    newArray[2] = '전남대학교 양식 맛집';
    글제목변경(newArray);
  }

  function 순서바꾸기(){
    var newArray = [...글제목];
    var temp;

    temp = newArray[1];
    newArray[1] = newArray[2];
    newArray[2] = temp;
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div class = "black-nav">
        <div style={{color: 'blue', fontSize:'30px'}}>
          개발 Blog
        </div> 
      </div>
      <div class = "list">
      <button onClick={제목바꾸기}>제목바꾸기</button>
      <button onClick={순서바꾸기}>순서바꾸기</button>
        <h3>{글제목[0]} <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div class = "list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div class = "list">
        <h3>{글제목[2]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
