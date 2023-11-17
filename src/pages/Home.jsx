import React, { useState } from "react";

import Header from "components/Header";
import Form from "components/Form";
import LetterList from "components/LetterList";
import MainContext from "context/MainContext";

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
    <MainContext.Provider
      value={{
        setMember,
        inputMember,
        setInputMember,
        nickname,
        setNickName,
        content,
        setContent,
        letter,
        setLetter,
        member,
      }}
    >
      <Header />
      <Form />
      <LetterList />
    </MainContext.Provider>
  );
}

export default Home;
