import React, { useContext } from "react";
import { StHeader, MemberButtons, MemberBtn } from "./StyleComponents";
import { useState } from "react";
import MainContext from "context/MainContext";

function Header() {
  const { setMember } = useContext(MainContext);
  const [selectedMember, setSelectedMember] = useState("");
  return (
    <>
      <StHeader>
        <h1>Artist FanLetter</h1>
        <MemberButtons>
          <MemberBtn
            isSelected={selectedMember === "카리나"}
            onClick={() => {
              setMember("카리나");
              setSelectedMember("카리나");
            }}
          >
            카리나
          </MemberBtn>
          <MemberBtn
            isSelected={selectedMember === "윈터"}
            onClick={() => {
              setMember("윈터");
              setSelectedMember("윈터");
            }}
          >
            윈터
          </MemberBtn>
          <MemberBtn
            isSelected={selectedMember === "지젤"}
            onClick={() => {
              setMember("지젤");
              setSelectedMember("지젤");
            }}
          >
            지젤
          </MemberBtn>
          <MemberBtn
            isSelected={selectedMember === "닝닝"}
            onClick={() => {
              setMember("닝닝");
              setSelectedMember("닝닝");
            }}
          >
            닝닝
          </MemberBtn>
        </MemberButtons>
      </StHeader>
    </>
  );
}

export default Header;
