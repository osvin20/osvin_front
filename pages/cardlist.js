import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";

export default function CardList() {
  return (
    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={'page_tit'}>MY CARD</h1>
      </div>
      <div className={'cardlist'}>
        <Link href="/cardform">
          <a className={'plus_ico'}>
            <img src="/img/plus.png" />
          </a>
        </Link>
        <ul>
          <li>
            <div>
              <p>부산은행비씨체크</p>
              <span>0488</span>
            </div>
            <p className={'card_del'}>삭제</p>
          </li>
          <li>
            <div>
              <p>현대카드</p>
              <span>1542</span>
            </div>
            <p className={'card_del'}>삭제</p>
          </li>
        </ul>
      </div>
    </TitleLayout>
  );
}
