# Context API로 리팩토링

### 리팩토링 후 Home.Jax 컴포넌트 구성

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

#### 수정 후 좋아진 점
🔸props를 한번에 내려주어서 props-drilling 현상 방지

#### 단점

🔸값이 하나라도 바뀌면 전체에 영향을 줌

### context로 부터 값을 가져오는 코드

     const { letter, member } = useContext(MainContext);

🔸MainContext에서 제공하고 있는 필요한 props들만 가져와서 사용
