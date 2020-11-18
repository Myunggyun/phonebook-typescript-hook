import React from "react";
import PhoneForm from "./PhoneForm";

interface UserInfo {
  nickname: string;
  phone: string;
}

interface PropsData {
  course: UserInfo[];
}

function PhoneList({ course }: PropsData) {
  return (
    <div>
      {course.map((list, index) => (
        <PhoneForm nickname={list.nickname} phone={list.phone} key={index} />
      ))}
    </div>
  );
}

export default PhoneList;
