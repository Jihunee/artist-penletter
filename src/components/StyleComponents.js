import styled from "styled-components";

export const StHeader = styled.header`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 60px;
  background-image: url("https://cdn.imweb.me/upload/S202207202685e30f16e24/8b48c67f8cdf6.jpeg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 50px;
  color: white;
`;

export const StBtnBox = styled.div`
  padding: 30px 0;
  margin-top: 50px;
  width: 400px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  border-radius: 20px;
  background-color: blanchedalmond;
`;

export const StBtn = styled.button`
  font-size: 20px;
  padding: 10px;
  border: 0;
  border-radius: 15px;
  background-color: salmon;
  cursor: pointer;
  color: white;
  &:hover {
    background-color: white;
    color: salmon;
    transform: scale(1.3);
    transition: all 0.5s ease-in-out;
  }
`;

export const Stform = styled.div`
  border: 5px solid salmon;
  width: 500px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  background-color: blanchedalmond;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Stinputbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;
  text-align: center;
  gap: 10px;
  width: 400px;
`;

export const Stinput = styled.input`
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  border: 0;
  outline: 0;
`;

export const Sttextarea = styled.textarea`
  resize: none;
  height: 100px;
  padding: 10px;
  font-size: 15px;
  border-radius: 10px;
  border: 0;
  outline: 0;
`;

export const StaddBtnbox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Stlist = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const Stcard = styled.div`
  border: 1px solid black;
  margin: 10px;
  width: 500px;
  padding: 20px;
  border-radius: 10px;
`;
