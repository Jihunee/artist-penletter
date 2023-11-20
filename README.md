# Artist Fanletter

🔸아티스트 팬레터 useState로 구현하기

# Header

### 조건부 스타일링

#### Header Component

    <MemberButtons>
              <MemberBtn
                isSelected={selectedMember === "카리나"}
                onClick={() => {
                  setMember("카리나");
                  setSelectedMember("카리나");
                }}

1. selectedMember State를 하나만든다.
2. selectedMember가 카리나랑 일치하면 해당 스타일 적용

#### Stylecomponent

    export const MemberBtn = styled.div`
      padding: 10px;
      font-size: 30px;
      border-radius: 15px;
      background-color: ${(props) => (props.isSelected ? "salmon" : "white")};
      color: ${(props) => (props.isSelected ? "white" : "salmon")};
      cursor: pointer;

      &:hover {
        background-color: ${(props) => (props.isSelected ? "salmon" : "white")};
        color: ${(props) => (props.isSelected ? "white" : "salmon")};
        transform: scale(1.3);
        transition: all 0.2s ease-in-out;
      }
    `;

### 로컬스토리지 활용

#### 활용한 계기
🔸메인페이지에서 추가한 데이터값을 상세페이지에서는 값을 받지 못하여 데이터를 담아 둘 곳이 필요하여 활용하였습니다.

#### 활용 코드

    localStorage.setItem("letters", JSON.stringify(letter));

1.먼저 메인에서 데이터값을 담아둔다.

    const getData = localStorage.getItem("letters");
      const result = JSON.parse(getData);
      const [letter, setLetter] = useState(result);

2. 데이터 값을 상세페이지에서 parse 문법으로 받아준다.

        localStorage.setItem("letters2", JSON.stringify(letter));

3. 다시 상세페이지 데이터 값을 담아둔다.

        const sharedDate = localStorage.getItem("letters2");
          const reuslt2 = JSON.parse(sharedDate);
          const [letter, setLetter] = useState(reuslt2);

4. 다시 상세페이지 데이터를 다시 메인페이지에서 받아준다.

### Home.Jax

#### Context를 사용하기 전 Home 컴포넌트 구성

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

   
