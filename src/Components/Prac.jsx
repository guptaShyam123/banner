import React from "react";
import styled from "styled-components";

const Maindiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Firstdiv = styled.div`
  background-color: green;
  height: 400px;
  width: 300px;
  margin-top: -290px;
`;
const Input = styled.div`
  display: grid;
  padding-top: 20px;
  gap: 20px;
`;
const Input1 = styled.div`
  display: grid;
  padding-top: 20px;
  gap: 20px;
`;
const Input2 = styled.div`
  display: grid;
  padding-top: 20px;
  gap: 20px;
`;
const Input3 = styled.div`
  display: grid;
  padding-top: 20px;
  gap: 20px;
`;
const Para = styled.p``;
const Inputtype = styled.input`
  height: 30px;
  width: 140px;
`;
const Inputtype1 = styled.input`
  height: 30px;
  width: 140px;
`;
const Inputtype2 = styled.input`
  height: 30px;
  width: 140px;
`;
const Inputtype3 = styled.input`
  height: 30px;
  width: 140px;
`;
const Image = styled.img`
  height: 200px;
  width: 200px;
`;
const Seconddiv = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
const Firstdiv1 = styled.div`
  display: flex;
  margin-top: 100px;
  background-color: red;
  width: 600px;
  height: 200px;
`;
const Homediv = styled.div`
  margin-left: 20px;
  padding-top: 30px;
  margin-left: 70px;
`;
const Prac = () => {
  return (
    <>
      <Maindiv>
        <Seconddiv>
          <Firstdiv1>
            <Image src="https://ocean.go2andaman.com/wp-content/uploads/2021/05/DSC_0773-scaled-e1620667491685.jpg?compress=true&quality=90&w=1000&dpr=1.3" />
            <Homediv>
              <Para>HOME</Para>
              <Para>HOME</Para>
              <Para>HOME</Para>
              <Para>HOME</Para>
            </Homediv>
          </Firstdiv1>
          <Firstdiv1>
            <Image src="https://ocean.go2andaman.com/wp-content/uploads/2021/05/DSC_0773-scaled-e1620667491685.jpg?compress=true&quality=90&w=1000&dpr=1.3" />
            <Homediv>
              <Para>HOME</Para>
              <Para>HOME</Para>
              <Para>HOME</Para>
              <Para>HOME</Para>
            </Homediv>
          </Firstdiv1>
          <Firstdiv1>
            <Image src="https://ocean.go2andaman.com/wp-content/uploads/2021/05/DSC_0773-scaled-e1620667491685.jpg?compress=true&quality=90&w=1000&dpr=1.3" />
            <Homediv>
              <Para>HOME</Para>
              <Para>HOME</Para>
              <Para>HOME</Para>
              <Para>HOME</Para>
            </Homediv>
          </Firstdiv1>
        </Seconddiv>
      </Maindiv>
    </>
  );
};

export default Prac;
