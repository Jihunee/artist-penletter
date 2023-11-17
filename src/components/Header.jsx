import React from "react";
import { StHeader, MemberButtons, MemberBtn } from "./StyleComponents";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { karina, winter, giselle, ningning } from "redux/modules/member";

function Header() {
  const [selectedMember, setSelectedMember] = useState("");

  const dispatch = useDispatch();
  return (
    <>
      <StHeader>
        <h1>Artist FanLetter</h1>
        <MemberButtons>
          <MemberBtn
            isSelected={selectedMember === "카리나"}
            onClick={() => {
              dispatch(karina());
              setSelectedMember("카리나");
            }}
          >
            카리나
          </MemberBtn>
          <MemberBtn
            isSelected={selectedMember === "윈터"}
            onClick={() => {
              dispatch(winter());
              setSelectedMember("윈터");
            }}
          >
            윈터
          </MemberBtn>
          <MemberBtn
            isSelected={selectedMember === "지젤"}
            onClick={() => {
              dispatch(giselle());
              setSelectedMember("지젤");
            }}
          >
            지젤
          </MemberBtn>
          <MemberBtn
            isSelected={selectedMember === "닝닝"}
            onClick={() => {
              dispatch(ningning());
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
