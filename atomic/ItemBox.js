import Link from 'next/link'

export default function ItemBox({list,className}){
  return (
    <div className={'storefeed itemlist '+className}>
        <ul className={'storefeed_ul'}>
          {list.map((val,key) =>(
            <li key={key}>
                <Link href={"/item?it_id="+val.it_id}>
                    <a>
                      <div>
                        {val.it_stock_qty == 0&&
                          <div className={'soldout'}>
                              SOLD OUT
                          </div>
                        }
                        <img
                          src ={
                            val.it_img1 != ''?
                            process.env.domain+'data/item/'+val.it_img1:
                            "/img/no_img.png"
                          }
                        />
                      </div>
                    </a>
                </Link>
                <Link href={"/item?it_id="+val.it_id}>
                    <a>
                      <div className={'iteminfo'}>
                          <p className={'itemname'}>{val.it_name}</p>
                          <p className={'itemprice'}>
                              <span>{val.it_price_text}</span>
                              원
                          </p>
                      </div>
                    </a>
                </Link>
            </li>
          ))}
        </ul>
    </div>
  );
}
ItemBox.defaultProps ={
    list: [],
};
