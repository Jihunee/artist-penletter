import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { penletter } from "shared/data";
import uuid from "react-uuid";
import styled from "styled-components";

const StHeader = styled.header`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 60px;
  background-image: url("https://cdn.imweb.me/upload/S202207202685e30f16e24/8b48c67f8cdf6.jpeg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 50px;
  color: white;
`;

const StBtnBox = styled.div`
  padding: 30px 0;
  margin-top: 50px;
  width: 400px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  border-radius: 20px;
  background-color: blanchedalmond;
`;

const StBtn = styled.button`
  font-size: 20px;
  padding: 10px;
  border: 0;
  border-radius: 15px;
  background-color: salmon;
  cursor: pointer;
  color: white;
`;

const Stform = styled.div`
  border: 5px solid salmon;
  width: 500px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  background-color: blanchedalmond;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Stinputbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;
  text-align: center;
  gap: 10px;
  width: 400px;
`;

const Stinput = styled.input`
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  border: 0;
  outline: 0;
`;

const Sttextarea = styled.textarea`
  resize: none;
  height: 100px;
  padding: 10px;
  font-size: 15px;
  border-radius: 10px;
  border: 0;
  outline: 0;
`;

const StaddBtnbox = styled.div`
  display: flex;
  justify-content: center;
`;

const Stlist = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
`;

const Stcard = styled.div`
  border: 1px solid black;
  margin: 10px;
  width: 500px;
  padding: 20px;
  border-radius: 10px;
`;

function Home() {
  const [letter, setLetter] = useState(penletter);
  const [nickName, setNickName] = useState("");
  const [content, setContent] = useState("");
  // const navigate = useNavigate();

  return (
    <>
      <StHeader>
        <h1>Artist PenLetter</h1>
        <StBtnBox>
          <StBtn>카리나</StBtn>
          <StBtn>윈터</StBtn>
          <StBtn>지젤</StBtn>
          <StBtn>닝닝</StBtn>
        </StBtnBox>
      </StHeader>
      <Stform>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newLetter = {
              id: uuid(),
              nickname: nickName,
              content: content,
            };
            setLetter([...letter, newLetter]);
          }}
        >
          <Stinputbox>
            닉네임
            <Stinput
              type="text"
              value={nickName}
              onChange={(e) => {
                setNickName(e.target.value);
              }}
              placeholder="최대 20글자까지 작성 할 수 있습니다."
            />
            내용
            <Sttextarea
              type="text"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="최대 100자까지 작성 할 수 있습니다."
            />
          </Stinputbox>

          <StaddBtnbox>
            <StBtn type="submit">추가</StBtn>
          </StaddBtnbox>
        </form>
      </Stform>

      <Stlist>
        {letter.map((pen) => {
          return (
            <Stcard key={pen.id}>
              <h2>{pen.nickname}</h2>
              <br />
              <h3>{pen.createdAt}</h3>
              <br />
              <p>{pen.content}</p>
            </Stcard>
          );
        })}
      </Stlist>
    </>
  );
}

export default Home;
