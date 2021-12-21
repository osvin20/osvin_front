import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import React from "react";

export default function OrderDetail() {
  return (
    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={'page_tit'}>EVENT</h1>
      </div>
      <div className={'borderfix'}>
      </div>
      <div className={'event_div'}>
        <p className={'event_tit'}>굿바이 어텀 50% 세일</p>
        <div className={'event_date'}>
          2021-08-20
        </div>
        <div className={'event_txt'}>
          <img src="/img/event_01.jpg"/>
        </div>
      </div>
    </TitleLayout>
  );
}
