import "./App.css";
// import Example7 from "./components/Example7";
import Example9 from "./components/Example9";
import { useState } from "react";
import Test7 from "./components/Test7";
import Test8 from "./components/Test8";
import useSomeAPI from "./utils/useSomeAPI";
import Test9 from "./components/Test9";

export default function App() {
  const [isOn, setIsOn] = useState(false); // example 7
  // const [data, setData] = useState(null); // example 8
  const data = useSomeAPI();

  return (
    <div>
      {/* example 7 */}
      {/* <p>{isOn ? "On" : "Off"}</p> */}
      {/* <Test7 onChange={setIsOn} /> */}
      {/* <Example7 onChange={setIsOn} /> */}

      {/* example 8 */}
      {/* <p>{data && data}</p>
      <Test8 data={data} /> */}
      {/* <Example8 data={data} /> */}
      {/* <Example9 /> */}
      <Test9 />
    </div>
  );
}
