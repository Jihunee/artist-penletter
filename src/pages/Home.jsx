import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { fanletter } from "shared/data";
import uuid from "react-uuid";
import {
  StHeader,
  StBtnBox,
  StBtn,
  Stform,
  Stinputbox,
  Stinput,
  Sttextarea,
  Stlist,
  Stcard,
  StaddBtnbox,
} from "components/StyleComponents";

function Home() {
  const [letter, setLetter] = useState(fanletter);
  const [nickName, setNickName] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("카리나");
  const [inputMember, setInputMember] = useState("");
  // const navigate = useNavigate();

  return (
    <>
      <StHeader>
        <h1>Artist FanLetter</h1>
        <StBtnBox>
          <StBtn
            onClick={() => {
              setMember("카리나");
            }}
          >
            카리나
          </StBtn>
          <StBtn
            onClick={() => {
              setMember("윈터");
            }}
          >
            윈터
          </StBtn>
          <StBtn
            onClick={() => {
              setMember("지젤");
            }}
          >
            지젤
          </StBtn>
          <StBtn
            onClick={() => {
              setMember("닝닝");
            }}
          >
            닝닝
          </StBtn>
        </StBtnBox>
      </StHeader>
      <Stform>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setMember(inputMember);
            if (nickName === "") {
              alert("닉네임을 입력해주세요");
              return false;
            } else if (content === "") {
              alert("내용을 입력해주세요");
              return false;
            }
            const newletter = {
              id: uuid(),
              nickname: nickName,
              content,
              writedTo: inputMember,
              createdAt: new Date().toISOString(),
            };
            setLetter([...letter, newletter]);
            setNickName("");
            setContent("");
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
            <select
              onChange={(e) => {
                setInputMember(e.target.value);
              }}
            >
              <option value="카리나">카리나</option>
              <option value="윈터">윈터</option>
              <option value="지젤">지젤</option>
              <option value="닝닝">닝닝</option>
            </select>
          </Stinputbox>

          <StaddBtnbox>
            <StBtn type="submit">추가</StBtn>
          </StaddBtnbox>
        </form>
      </Stform>

      <Stlist>
        {letter
          .filter((item) => item.writedTo === member)
          .map((fan) => {
            return (
              <Stcard key={fan.id}>
                <img src={fan.avatar} />
                <h2>{fan.nickname}</h2>
                <br />
                <h3>{fan.createdAt}</h3>
                <br />
                <p>{fan.content}</p>
              </Stcard>
            );
          })}
      </Stlist>
    </>
  );
}

export default Home;
