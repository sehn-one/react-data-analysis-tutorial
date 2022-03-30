import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const ChartTest = ({ props }) => {
  console.log(props);
  return <Line data={props} />;
};

export default ChartTest;

/*

------
모(페이지) 
  - 레이아웃_0
    - 레이아웃 0번은 멀티 슬라이더 와 차트를 배치하는 레이아웃
    0. dumb component(정적인 데이터, 화면에 나타내기만 하는 컴포넌트) / smart component(유저의 입력에 따라서 화면이 바뀌거나, 서버에서 데이터를 불러오는 컴포넌트) 
    1. 차트 컴포넌트
    2. 멀티 슬라이더 컴포넌트 (데이터를 정제 )
  - 레이아웃_1 
    - 레이아웃 1번은 멀티플 셀럭트 박스와 차트를 배치하는 레이아웃
------

*/
