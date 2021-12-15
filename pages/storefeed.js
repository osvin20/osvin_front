import Link from "next/link";

export default function StoreFeed() {
  return (
    <div className={"storefeed"}>
      <ul className={"storefeed_ul"}>
        <li>
          <Link href="/item">
            <a className={"storefeed_thumb"}>
              <img src="/img/storefeed_01.jpg" />
            </a>
          </Link>
          <Link href="/store">
            <a className={"store_div"}>
              <div className="shop_thumb">
                <img src="/img/shop_01.jpg" />
              </div>
              <div>
                <p>PEPE NOWIE</p>
                <div className={"store_follow"}>
                  <img src="/img/user2.png" />
                  <span>51</span>
                </div>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/item">
            <a className={"storefeed_thumb"}>
              <img src="/img/storefeed_02.jpg" />
            </a>
          </Link>
          <Link href="/store">
            <a className={"store_div"}>
              <div className="shop_thumb">
                <img src="/img/shop_02.jpg" />
              </div>
              <div>
                <p>FOUND VINTAGE</p>
                <div className={"store_follow"}>
                  <img src="/img/user2.png" />
                  <span>51</span>
                </div>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/item">
            <a className={"storefeed_thumb"}>
              <img src="/img/storefeed_03.jpg" />
            </a>
          </Link>
          <Link href="/store">
            <a className={"store_div"}>
              <div className="shop_thumb">
                <img src="/img/shop_03.jpg" />
              </div>
              <div>
                <p>MIlk honey</p>
                <div className={"store_follow"}>
                  <img src="/img/user2.png" />
                  <span>51</span>
                </div>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/item">
            <a className={"storefeed_thumb"}>
              <img src="/img/storefeed_04.jpg" />
            </a>
          </Link>
          <Link href="/store">
            <a className={"store_div"}>
              <div className="shop_thumb">
                <img src="/img/shop_04.jpg" />
              </div>
              <div>
                <p>MOON Shine</p>
                <div className={"store_follow"}>
                  <img src="/img/user2.png" />
                  <span>51</span>
                </div>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/item">
            <a className={"storefeed_thumb"}>
              <img src="/img/storefeed_05.jpg" />
            </a>
          </Link>
          <Link href="/store">
            <a className={"store_div"}>
              <div className="shop_thumb">
                <img src="/img/shop_05.jpg" />
              </div>
              <div>
                <p>MOON Shine</p>
                <div className={"store_follow"}>
                  <img src="/img/user2.png" />
                  <span>51</span>
                </div>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/item">
            <a className={"storefeed_thumb"}>
              <img src="/img/storefeed_06.jpg" />
            </a>
          </Link>
          <Link href="/store">
            <a className={"store_div"}>
              <div className="shop_thumb">
                <img src="/img/shop_06.jpg" />
              </div>
              <div>
                <p>MOON Shine</p>
                <div className={"store_follow"}>
                  <img src="/img/user2.png" />
                  <span>51</span>
                </div>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/item">
            <a className={"storefeed_thumb"}>
              <img src="/img/storefeed_01.jpg" />
            </a>
          </Link>
          <Link href="/store">
            <a className={"store_div"}>
              <div className="shop_thumb">
                <img src="/img/shop_01.jpg" />
              </div>
              <div>
                <p>PEPE NOWIE</p>
                <div className={"store_follow"}>
                  <img src="/img/user2.png" />
                  <span>51</span>
                </div>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/item">
            <a className={"storefeed_thumb"}>
              <img src="/img/storefeed_02.jpg" />
            </a>
          </Link>
          <Link href="/store">
            <a className={"store_div"}>
              <div className="shop_thumb">
                <img src="/img/shop_02.jpg" />
              </div>
              <div>
                <p>PEPE NOWIE</p>
                <div className={"store_follow"}>
                  <img src="/img/user2.png" />
                  <span>51</span>
                </div>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
