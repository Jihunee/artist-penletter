import React, { useState } from "react";
import Header from "components/Header";
import Form from "components/Form";
import LetterList from "components/LetterList";

function Home() {
  const sharedDate = localStorage.getItem("letters2");
  const reuslt2 = JSON.parse(sharedDate);
  const [letter, setLetter] = useState(reuslt2);
  const [nickname, setNickName] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("카리나");
  const [inputMember, setInputMember] = useState("카리나");
  localStorage.setItem("letters", JSON.stringify(letter));

  return (
    <>
      <Header setMember={setMember} />
      <Form
        setMember={setMember}
        inputMember={inputMember}
        setInputMember={setInputMember}
        nickname={nickname}
        setNickName={setNickName}
        content={content}
        setContent={setContent}
        letter={letter}
        setLetter={setLetter}
      />

      <LetterList letter={letter} member={member} />
    </>
  );
}

export default Home;
