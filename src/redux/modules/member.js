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
