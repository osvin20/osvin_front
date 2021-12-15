import Link from 'next/link'

export default function StoreReview(){
    return (
    <ul className={'reviewlist storereview'}>
        <li>
            <Link href='/userfeed'>
              <a className={'storereview_img'}>
                <div className={'storereview_prof'}>
                  <img src="/img/prof_01.jpg"/>
                </div>
                <div>
                  <p className={'rl_name'}>sohee1203</p>
                  <p className={'rl_shop'}>2021-08-20</p>
                </div>
              </a>
            </Link>
            <Link href='/post'>
                <a>
                  <p className={'review_txt'}>
                    사이즈 루즈하니 예쁘게 잘 맞고 핏도 정말 예뻐요! 재질도 앙고라라 보들보들하고 좋습니다! 브이넥라인이라 여성스럽게 안에 폴라티를 레이어드해서 입으면 연말룩에도 정말 좋고, 그냥 흰티에 레이어드하면 데일리룩으로 캠퍼스룩으로 정말 좋아요! 저는 캠퍼스에서도, 연말모임에서도 잘 입었어요! 굳굳!
                  </p>
                  <div className={'review_img'}>
                    <div>
                      <img src="/img/item09.jpg"/>
                    </div>
                    <div>
                      <img src="/img/item10.jpg"/>
                    </div>
                    <div>
                      <img src="/img/item11.jpg"/>
                    </div>
                    <div>
                      <img src="/img/item12.jpg"/>
                    </div>
                  </div>
                </a>
            </Link>
            <Link href='/item'>
              <a>
                <div className={'storereview_info'}>
                  <img src="/img/item11.jpg"/>
                  <div>
                    <p>앙고라 V넥 니트</p>
                    <p className={'extra_bold'}>31,000원</p>
                  </div>
                </div>
              </a>
            </Link>
        </li>
        <li>
            <Link href='/userfeed'>
                <a className={'storereview_img'}>
                    <div className={'storereview_prof'}>
                        <img src="/img/prof_02.jpg"/>
                    </div>
                    <div>
                        <p className={'rl_name'}>hyeri9512</p>
                        <p className={'rl_shop'}>2021-08-20</p>
                    </div>
                </a>
            </Link>
            <Link href='/post'>
                <a>
                  <p className={'review_txt'}>
                  검정색 가방 밖에 없어서 밝은 색 사려고 둘러보던 중 너무 이뻐서 홀린듯 샀어요! 우선 색깔이 너무 맘에 들어요. 윗부분이랑 아랫부분이 살짝 다른 색인데 그게 또 너무 이쁩니다. 그리고 수납공간이 너무 좋아요!! 3칸이나 있어서 화장품 지갑 보조배터리 다 들어갔어요 진짜!! 너무 좋습니다!!
                  </p>
                  <div className={'review_img'}>
                      <div>
                          <img src="/img/item13.jpg"/>
                      </div>
                      <div>
                          <img src="/img/item14.jpg"/>
                      </div>
                      <div>
                          <img src="/img/item15.jpg"/>
                      </div>
                  </div>
                </a>
            </Link>

            <Link href='/item'>
              <a>
                <div className={'storereview_info'}>
                    <img src="/img/item08.jpg"/>
                    <div>
                        <p>레터 스퀘어 레더 백</p>
                        <p className={'extra_bold'}>21,000원</p>
                    </div>
                </div>
              </a>
            </Link>

        </li>
    </ul>
    );
}
