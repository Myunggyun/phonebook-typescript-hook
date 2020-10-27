import React from "react";
import PhoneForm from "./PhoneForm";

interface UserInfo {
  id: number;
  nickname: string;
  phone: string;
}

interface PropsData {
  course: UserInfo[];
}

function PhoneList({ course }: PropsData) {
  return (
    <div>
      {course.map(list => (
        <PhoneForm nickname={list.nickname} phone={list.phone} key={list.id} />
      ))}
    </div>
  );
}

export default PhoneList;
