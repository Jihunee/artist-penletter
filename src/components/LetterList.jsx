import React from "react";
import { Link } from "react-router-dom";
import {
  Stlist,
  Stcard,
  Stlettercontentbox,
  Stnickname,
  Staddtime,
  StletterContent,
} from "./StyleComponents";

export default function LetterList({ letter, member }) {
  const lettersMember = letter.filter((letters) => letters.writedTo === member);
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
              .filter((item) => item.writedTo === member)
              .map((fan) => {
                return (
                  <Link
                    to={`/Detail/${fan.id}`}
                    key={fan.id}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Stcard key={fan.id}>
                      <img style={{ borderRadius: "80px" }} src={fan.avatar} />
                      <Stlettercontentbox>
                        <Stnickname>{fan.nickname}</Stnickname>
                        <br />
                        <Staddtime>
                          {new Date(fan.createdAt).toLocaleDateString("ko", {
                            year: "2-digit",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          })}
                        </Staddtime>
                        <br />
                        <StletterContent>{fan.content}</StletterContent>
                      </Stlettercontentbox>
                    </Stcard>
                  </Link>
                );
              })}
          </>
        )}
      </Stlist>
    </>
  );
}
