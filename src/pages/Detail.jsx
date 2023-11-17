import { useNavigate, useParams } from "react-router-dom";
import {
  HomeBtn,
  StBtn,
  CardBox,
  CardBoxTop,
  NickName,
  Time,
  Writed,
  TextBox,
  EditTextBox,
  CardBtn,
} from "components/StyleComponents";
import { useState } from "react";
function Detail() {
  const getData = localStorage.getItem("letters");
  const result = JSON.parse(getData);
  const params = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const [letter, setLetter] = useState(result);

  localStorage.setItem("letters2", JSON.stringify(letter));

  const foundData = letter.find((item) => {
    return item.id === params.id;
  });

  const { nickname, writedTo, createdAt, content } = foundData;
  const [editingText, setEditingText] = useState(content);

  return (
    <div>
      <HomeBtn
        onClick={() => {
          navigate("/");
        }}
      >
        홈으로
      </HomeBtn>
      <CardBox>
        <CardBoxTop>
          <NickName>{nickname}</NickName>
          <Time>
            {new Date(createdAt).toLocaleDateString("ko", {
              year: "2-digit",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </Time>
        </CardBoxTop>
        <Writed>To : {writedTo}</Writed>
        {isEditing ? (
          <EditTextBox
            defaultValue={content}
            value={editingText}
            onChange={(e) => {
              setEditingText(e.target.value);
            }}
          />
        ) : (
          <TextBox>{editingText}</TextBox>
        )}
        <CardBtn>
          {isEditing ? (
            <StBtn
              onClick={() => {
                if (!editingText) return alert("수정된 부분이 없습니다.");
                setIsEditing(false);
                const answer = window.confirm("이대로 수정하시겠습니까?");
                if (!answer) return;

                const editingBox = result.map((item) => {
                  if (item.id === params.id) {
                    item.content = editingText;
                  }
                  return item;
                });
                localStorage.setItem("letters", JSON.stringify(editingBox));
                localStorage.setItem("letters2", JSON.stringify(editingBox));

                navigate("/");
              }}
            >
              수정완료
            </StBtn>
          ) : (
            <>
              <StBtn
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                수정
              </StBtn>
              <StBtn
                onClick={() => {
                  const answer = window.confirm("정말로 삭제하시겠습니까?");
                  if (!answer) return;

                  const resultdata2 = result.filter(
                    (item) => item.id !== params.id
                  );
                  localStorage.setItem("letters2", JSON.stringify(resultdata2));

                  navigate("/");
                }}
              >
                삭제
              </StBtn>
            </>
          )}
        </CardBtn>
      </CardBox>
    </div>
  );
}

export default Detail;
