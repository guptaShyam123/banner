import React from "react";
import { data } from "./data";
import { useSelector, useDispatch } from "react-redux";
import { add, deletes } from "../Reduxtoolkit/Counterslice";
import { getValue } from "@testing-library/user-event/dist/utils";
import { useLocation } from "react-router-dom";
const Home = (props) => {
  const location = useLocation();
  console.log("my l ", location);
  const { state } = useSelector((state) => state);

  const dispatch = useDispatch();
  const [genders, setGender] = React.useState("");
  const [update, setUpdate] = React.useState(data);

  const filtermens = (para) => {
    const up = data.filter((curdata) => curdata.text === para);

    console.log(up);

    setUpdate(up);
  };

  const [select, setselect] = React.useState("");

  const handle = (e) => {
    const up1 = data.filter((curdata) => curdata.text === e);

    setUpdate(up1);
    console.log(up1);
  };

  const handle1 = (e) => {
    const up1 = data.filter((curdata) => curdata.text === e);

    setUpdate(up1);
    console.log(up1);
  };
  const change = (xy) => {
    const val = data.filter((curdata) => curdata.text === xy);
    setUpdate(val);
  };

  const [counts, setCount] = React.useState(0);

  const inc = () => {
    setCount(counts + 1);
  };

  const dec = () => {
    if (counts <= 1) return;
    setCount(counts - 1);
  };
  const [show, setShow] = React.useState(false);
  const truefalse = () => {
    setShow(!show);
  };

  const getValue = setTimeout(() => {
    console.log("value is");
  }, 3000);

  React.useEffect(() => {});

  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => filtermens("men")}>man</button>
        <button onClick={() => filtermens("Women")}>women</button>
      </div>
      <select value={update} onChange={() => handle("men", "wonen")}>
        <option value="volvo">Lo</option>
        <option onChange={() => handle1("men")}>Men</option>
        <option onChange={() => handle1("women")}>Women</option>
      </select>
      <div style={{ display: "flex" }}>
        <label>men</label>
        <input type="checkbox" onChange={() => change("men")} />
      </div>
      <div style={{ display: "flex" }}>
        <label>Women</label>
        <input type="checkbox" onChange={() => change("Women")} />
      </div>

      {update.map((i) => {
        return (
          <>
            <div key={i.id}>
              <img src={i.image} />
              <p>{i.text}</p>
            </div>
          </>
        );
      })}
      <button>click</button>
      <h1>{props.x}</h1>
      <p>{counts}</p>
      <button onClick={() => dispatch(add())}>count</button>
      <button onClick={dec}>dec</button>
      <div>
        <button onClick={truefalse}>true:false</button>
        {show ? <p>hello</p> : null}
      </div>
      <p>name{location?.state?.newdata?.name}</p>
    </>
  );
};

export default Home;
