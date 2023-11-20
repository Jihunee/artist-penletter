# redux 리팩토링

### Member.js라는 스테이트 그룹을 만들어줌

    const KARINA = "카리나";
    const WINTER = "윈터";
    const GISELLE = "지젤";
    const NINGNING = "닝닝";

    export const karina = () => {
      return {
        type: KARINA,
      };
    };
    export const winter = () => {
        return {
        type: WINTER,
      };
    };
    export const giselle = () => {
     return {
        type: GISELLE,
      };
    };
    export const ningning = () => {
      return {
        type: NINGNING,
      };
    };

    const intialState = {
      member: "카리나",
    };

    const member = (state = intialState, action) => {
      switch (action.type) {
        case KARINA:
          return {
           member: (state.member = "카리나"),
          };
        case WINTER:
          return {
            member: (state.member = "윈터"),
           };
        case GISELLE:
          return {
            member: (state.member = "지젤"),
          };
        case NINGNING:
          return {
            member: (state.member = "닝닝"),
          };
        default:
          return state;
       }
    };

     export default member;

### Header

         <MemberBtn
                isSelected={selectedMember === "카리나"}
                onClick={() => {
                  dispatch(karina());
                  setSelectedMember("카리나");
                }}
              >
                카리나
              </MemberBtn>

🔸헤더에서 젹용하고 페이지를 실행해보니 멤버에 맞게 리스트가 나오질 않아서 letterlist도 수정하였습니다.

    export default function LetterList() {
      const members = useSelector((state) => state.member);
      const { letter } = useContext(MainContext);
      const lettersMember = letter.filter(
        (letters) => letters.writedTo === members.member
      );
      return (
        <>
          <Stlist>
            {lettersMember.length === 0 ? (
              <Stcard>
                아직 등록한 팬래터가 없습니다. 첫번째 팬레터의 주인공이 되세요!
              </Stcard>
            ) : (
              <>
                {letter
                  .filter((item) => item.writedTo === members.member)

🔸useSelector를 활용하여 member값을 가져와서 리스트에 적용 




