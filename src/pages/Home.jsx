import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fanletter } from "shared/data";
import uuid from "react-uuid";
import {
  StHeader,
  MemberButtons,
  MemberBtn,
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
  const [nickname, setNickName] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("카리나");
  const [inputMember, setInputMember] = useState("카리나");

  return (
    <>
      <StHeader>
        <h1>Artist FanLetter</h1>
        <MemberButtons>
          <MemberBtn
            onClick={() => {
              setMember("카리나");
            }}
          >
            카리나
          </MemberBtn>
          <MemberBtn
            onClick={() => {
              setMember("윈터");
            }}
          >
            윈터
          </MemberBtn>
          <MemberBtn
            onClick={() => {
              setMember("지젤");
            }}
          >
            지젤
          </MemberBtn>
          <MemberBtn
            onClick={() => {
              setMember("닝닝");
            }}
          >
            닝닝
          </MemberBtn>
        </MemberButtons>
      </StHeader>
      <Stform>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setMember(inputMember);
            if (nickname === "") {
              alert("닉네임을 입력해주세요");
              return false;
            } else if (content === "") {
              alert("내용을 입력해주세요");
              return false;
            }
            const newletter = {
              id: uuid(),
              nickname,
              content,
              writedTo: inputMember,
              createdAt: new Date().toLocaleDateString(),
              isDeleted: false,
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
              value={nickname}
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
          .filter((item) => item.isDeleted === false)
          .filter((item) => item.writedTo === member)
          .map((fan) => {
            return (
              <Link
                to={`/Detail/${fan.id}`}
                key={fan.id}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Stcard key={fan.id}>
                  <img style={{ borderRadius: "80px" }} src={fan.avatar} />
                  <Stlettercontentbox>
                    <Stnickname>{fan.nickname}</Stnickname>
                    <br />
                    <Staddtime>
                      {new Date(fan.createdAt).toLocaleDateString("ko", {
                        year: "2-digit",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                    </Staddtime>
                    <br />
                    <StletterContent>{fan.content}</StletterContent>
                  </Stlettercontentbox>
                </Stcard>
              </Link>
            );
          })}
      </Stlist>
    </>
  );
}

export default Home;
