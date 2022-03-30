import React, { useRef, useState } from "react";
import readXlsxFile from "read-excel-file";
import ChartTest from "./ChartTest";

function App() {
  const input = useRef();
  let data = {
    labels: [],
    datasets: [
      {
        label: "날짜별 접속자 수",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [],
      },
    ],
  };

  const [element, setElement] = useState(null);
  const onChange = () => {
    readXlsxFile(input.current.files[0]).then((rows) => {
      console.log(rows);
      for (let i = 1; i < rows.length; i++) {
        data.datasets[0].data.push(rows[i][1]);
        data.labels.push(rows[i][0]);
      }
      console.log(data);
      setElement(<ChartTest props={data} />);
    });
  };

  return (
    <div>
      <input type="file" ref={input} onChange={onChange} />
      {element}
    </div>
  );
}

export default App;
