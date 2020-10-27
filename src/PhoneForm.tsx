import React from "react";

interface UserInfo {
  nickname: string;
  phone: string;
}

function PhoneForm({ nickname, phone }: UserInfo) {
  return (
    <div>
      <span>사진</span>
      <span>
        <div>{nickname}</div>
        <div>{phone}</div>
        <div>태그</div>
      </span>
      <div>
        <button>수정하기</button>
        <button>즐겨찾기</button>
        <button>닫기</button>
      </div>
    </div>
  );
}

export default PhoneForm;
