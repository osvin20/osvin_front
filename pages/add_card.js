import TitleLayout from "../layout/TitleLayout";
import Link from "next/link";

export default function OrderDetail() {

  return (
    <TitleLayout>
      <h1 className={"page_tit"}>MY CARD</h1>
      <div>
        <Link href='/cardform'>
          <a className={'add_card'}>
            <div className={'plus_ico'}>
              <img src="/img/plus.png" />
            </div>
            <p>카드를 등록해보세요.</p>
            <span>
              카드를 한 번만 등록해놓으면<br/>매번 쉽게 결제할 수 있어요!
            </span>
          </a>
        </Link>
      </div>
    </TitleLayout>
  );
}
