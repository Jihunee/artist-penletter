import React, { useState } from "react";

import Header from "components/Header";
import Form from "components/Form";
import LetterList from "components/LetterList";
import MainContext from "context/MainContext";

function Home() {
  const sharedDate = localStorage.getItem("letters2");
  const result2 = JSON.parse(sharedDate);
  const [letter, setLetter] = useState(result2);
  const [nickname, setNickName] = useState("");
  const [content, setContent] = useState("");
  const [inputMember, setInputMember] = useState("카리나");
  localStorage.setItem("letters", JSON.stringify(letter));

  return (
    <MainContext.Provider
      value={{
        inputMember,
        setInputMember,
        nickname,
        setNickName,
        content,
        setContent,
        letter,
        setLetter,
      }}
    >
      <Header />
      <Form />
      <LetterList />
    </MainContext.Provider>
  );
}

export default Home;
