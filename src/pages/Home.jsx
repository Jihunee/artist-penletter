import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fanletter } from "shared/data";
import uuid from "react-uuid";
import {
  StHeader,
  StBtnBox,
  StDiv,
  Stform,
  Stinputbox,
  Stinput,
  Sttextarea,
  Stlist,
  Stcard,
  StaddBtnbox,
  StBtn,
  StletterContent,
  Stlettercontentbox,
  Stnickname,
  Staddtime,
  Stselect,
} from "components/StyleComponents";

function Home() {
  const [letter, setLetter] = useState(fanletter);
  const [nickName, setNickName] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("카리나");
  const [inputMember, setInputMember] = useState("카리나");
  const navigate = useNavigate();

  return (
    <>
      <StHeader>
        <h1>Artist FanLetter</h1>
        <StBtnBox>
          <StDiv
            member={member}
            onClick={() => {
              setMember("카리나");
            }}
          >
            카리나
          </StDiv>
          <StDiv
            onClick={() => {
              setMember("윈터");
            }}
          >
            윈터
          </StDiv>
          <StDiv
            onClick={() => {
              setMember("지젤");
            }}
          >
            지젤
          </StDiv>
          <StDiv
            onClick={() => {
              setMember("닝닝");
            }}
          >
            닝닝
          </StDiv>
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
            setLetter([newletter, ...letter]);
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
            내 용
            <Sttextarea
              type="text"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="최대 100자까지 작성 할 수 있습니다."
            />
            누구에게 보낼까요 ?
            <Stselect
              onChange={(e) => {
                setInputMember(e.target.value);
              }}
            >
              <option value="카리나">카리나</option>
              <option value="윈터">윈터</option>
              <option value="지젤">지젤</option>
              <option value="닝닝">닝닝</option>
            </Stselect>
          </Stinputbox>

          <StaddBtnbox>
            <StBtn type="submit">팬레터 등록</StBtn>
          </StaddBtnbox>
        </form>
      </Stform>

      <Stlist>
        {letter
          .filter((item) => item.writedTo === member)
          .map((fan) => {
            return (
              <Stcard
                key={fan.id}
                onClick={() => {
                  navigate(`/Detail/${fan.id}`);
                }}
              >
                <img src={fan.avatar} />
                <Stlettercontentbox>
                  <Stnickname>{fan.nickname}</Stnickname>
                  <br />
                  <Staddtime>{fan.createdAt}</Staddtime>
                  <br />
                  <StletterContent>{fan.content}</StletterContent>
                </Stlettercontentbox>
              </Stcard>
            );
          })}
      </Stlist>
    </>
  );
}

export default Home;
