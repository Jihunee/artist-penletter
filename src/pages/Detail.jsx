import React from "react";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  return (
    <div>
      Detail
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        홈으로
      </button>
    </div>
  );
}

export default Detail;
