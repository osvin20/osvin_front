import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";
import React from "react";

export default function FollowFeed() {
  return (
    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={'page_tit'}>FOLLOW FEED</h1>
      </div>
      <div className={"storefeed followfeed"}>
        <ul className={"storefeed_ul"}>
          <li>
            <Link href="/item">
              <a className={"storefeed_thumb"}>
                <img src="/img/storefeed_01.jpg" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/item">
              <a className={"storefeed_thumb"}>
                <img src="/img/storefeed_02.jpg" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/item">
              <a className={"storefeed_thumb"}>
                <img src="/img/storefeed_03.jpg" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/item">
              <a className={"storefeed_thumb"}>
                <img src="/img/storefeed_04.jpg" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/item">
              <a className={"storefeed_thumb"}>
                <img src="/img/storefeed_05.jpg" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/item">
              <a className={"storefeed_thumb"}>
                <img src="/img/storefeed_06.jpg" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/item">
              <a className={"storefeed_thumb"}>
                <img src="/img/storefeed_01.jpg" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/item">
              <a className={"storefeed_thumb"}>
                <img src="/img/storefeed_02.jpg" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </TitleLayout>
  );
}
