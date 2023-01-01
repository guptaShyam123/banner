import React from "react";
import axios from "axios";

const Firebaseform = () => {
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
 let value 
  value = {name , email , password}
  console.log(value)

  return (
    <>
      <form onSubmit={postdata} method="POST">
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Firebaseform;
