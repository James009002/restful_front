
import { Button, Input } from "antd";
import React from "react";



export default function CreateMember() {
  return (
    <div>
        認證手機號碼 :
        <Input placeholder="0912345678"/>
        姓 :
        <Input placeholder="王"/>
        email :
        <Input placeholder="test@gmail.com"/>
    </div>
  );
}
