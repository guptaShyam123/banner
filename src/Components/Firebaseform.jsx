import React from "react";
import axios from "axios";
import { datas } from "../Newfile";

const Firebaseform = () => {
  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "apple", text: "Apple 🍏" },
    { value: "banana", text: "Banana 🍌" },
    { value: "kiwi", text: "Kiwi 🥝" },
  ];

  const [selected, setSelected] = React.useState(options[0].value);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const postdata = async (e) => {
    e.preventDefault();

    if (name && email && password) {
      const { data } = await axios.post(
        "https://reactyoutubrform-default-rtdb.firebaseio.com/reactyoutubeform.json",
        {
          name,
          email,
          password,
          selected,
        },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("my data is ", data);
    } else {
      alert("please fiil the from");
    }
  };
  let value;
  value = { name, email, password };
  console.log(value);

  const [news, setNews] = React.useState(() => datas());
  console.log("my news ", news);
  React.useEffect(() => {
    setNews(news);
  });

  const [image, setImage] = React.useState();
  const [arr, setArr] = React.useState([]);

  const change = (e) => {
    const x = e.target.files;
    console.log(x);
    setImage(URL.createObjectURL(e.target.files[0]));

    setArr([...arr, { x: x }]);
    console.log("arr is ", arr);
  };

  return (
    <>
      <form onSubmit={postdata} method="POST">
        <input
          required
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          required
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <button type="submit">submit</button>
      </form>
      <button onClick={datas}>click me</button>
      <input type="file" multiple onChange={change} />
      <img src={image} />
    </>
  );
};

export default Firebaseform;
