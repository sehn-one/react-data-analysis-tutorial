import React, { useState, useRef } from "react";
import readXlsxFile from "read-excel-file";

function App() {
  const input = useRef();
  const [data, setData] = useState(null);
  const onChange = () => {
    readXlsxFile(input.current.files[0]).then((rows) => {
      setData(rows);
    });
  };

  console.log(data);

  return (
    <div>
      <input type="file" ref={input} onChange={onChange} />
    </div>
  );
}

export default App;
