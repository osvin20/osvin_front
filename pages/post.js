
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import Slider  from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OsbinModal from '../layout/OsbinModal';
import ModModal from '../layout/ModModal'
import React,{useState} from 'react';
import CheckBox from '../layout/CheckBox.js';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

export default function Post(){
    const [ck ,setCk] = useState(false);
    const classes = useStyles();
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>POST</h1>
            </div>
            <div className={'borderfix'}></div>
            <div className={'post_content'}>
                <div className={'rv_prof'}>
                  <Link href="/userfeed">
                    <a className={'user_prof_div'}>
                      <img src="/img/prof_01.jpg"/>
                      <p>sohee1203</p>
                    </a>
                  </Link>
                  <p className={'rv_date'}>2021-08-20
                    <OsbinModal
                      title=""
                      bnt_title =""
                      class_name={"rv_mod_btn"}
                      modal_id={"review_detail_modal"}
                      close_con={false}
                    >
                      <ModModal/>
                    </OsbinModal>
                  </p>
                </div>
                <div className={'item_pic'}>
                    <Slider {...settings}>
                        <div className={'content_box'}>
                            <img src="/img/post_01.jpg"/>
                        </div>
                        <div className={'content_box'}>
                            <img src="/img/post_02.jpg"/>
                        </div>
                        <div className={'content_box'}>
                            <img src="/img/post_03.jpg"/>
                        </div>
                    </Slider>
                </div>
                <ul className={'post_info'}>
                    <li>
                        <p>스토어명</p>
                        <Link href="/store">
                            <a>오스빈스토어</a>
                        </Link>
                    </li>
                    <li>
                        <p>상품명</p>
                        <Link href="/item">
                            <a>울 모헤어 보카시 니트 가디건</a>
                        </Link>
                    </li>
                </ul>
                <div className={'post_txt'}>
                    맨살에 착용해도 아주 부드럽고 포근하게 감기는 촉감으로 피부가 예민하신 분들도 부담없이 착용하실 수 있어요~! 루즈한 핏이지만 부해보이지 않고 여리여리하게 떨어지는 핏감이고 V넥이 깊게 파이지 않아서 단독으로도 부담 없었어요:) 보온성이 정말 뛰어나서 하나만 입어도 따뜻 포근 그 자체입니다~!
                </div>
                <div className={'post_react'}>
                    <div>
                        <img src="/img/heart5.png"/>
                        <p>51</p>
                    </div>
                    <div>
                        <img src="/img/chat.png"/>
                        <p>7</p>
                    </div>
                </div>
            </div>
            <div className={'post_comment'}>
                <ul>
                    <li>
                        <div className={'comment_div'}>
                            <div className={'user_comment'}>
                                <Link href='/userfeed'>
                                  <a className={'comment_prof'}>
                                    <img src="/img/prof_02.jpg"/>
                                  </a>
                                </Link>
                                <div>
                                    <div className={'comment'}>
                                      <Link href='/userfeed'>
                                        <a>
                                          hyeri0820
                                        </a>
                                      </Link>가디건이 너무 이뻐요!ㅜㅜ
                                    </div>
                                    <div className={'comment_info'}>
                                        <p className={'comment_date'}>2021-08-20</p>
                                        <p className={'comment_like'}>
                                            좋아요 10개
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <CheckBox
                              id={"checkBox1"}
                              defCk={false}
                              offEl={
                                <div className={'comment_heart'}>
                                    <img src="/img/heart5.png"/>
                                </div>
                              }
                              onEl={
                                <div className={'comment_heart'}>
                                  <img src="/img/heart6.png"/>
                                </div>
                              }
                            />
                        </div>
                        <ul>
                            <li>
                                <div className={'user_comment'}>
                                    <Link href='/userfeed'>
                                      <a className={'comment_prof'}>
                                        <img src="/img/prof_03.jpg"/>
                                      </a>
                                    </Link>
                                    <div>
                                        <div className={'comment'}>
                                          <Link href='/userfeed'>
                                            <a>
                                              minah1121
                                            </a>
                                          </Link>저도 얼른 장만하고싶네요!
                                        </div>
                                        <div className={'comment_info'}>
                                            <p className={'comment_date'}>2021-08-20</p>
                                            <p className={'comment_like'}>
                                                좋아요 10개
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <CheckBox
                                  id={"checkBox1"}
                                  defCk={false}
                                  offEl={
                                    <div className={'comment_heart'}>
                                        <img src="/img/heart5.png"/>
                                    </div>
                                  }
                                  onEl={
                                    <div className={'comment_heart'}>
                                      <img src="/img/heart6.png"/>
                                    </div>
                                  }
                                />
                            </li>
                        </ul>
                        <Link href='/comment'>
                            <a className={'more_comment'}>
                                답글 5개 보기
                                <img src="/img/arrow_07.png"/>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <div className={'comment_div'}>
                            <div className={'user_comment'}>
                                <Link href='/userfeed'>
                                  <a className={'comment_prof'}>
                                    <img src="/img/prof_02.jpg"/>
                                  </a>
                                </Link>
                                <div>
                                    <div className={'comment'}>
                                      <Link href='/userfeed'>
                                        <a>
                                          hyeri0820
                                        </a>
                                      </Link>가디건이 너무 이뻐요!ㅜㅜ
                                    </div>
                                    <div className={'comment_info'}>
                                        <p className={'comment_date'}>2021-08-20</p>
                                        <p className={'comment_like'}>
                                            좋아요 10개
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <CheckBox
                              id={"checkBox1"}
                              defCk={false}
                              offEl={
                                <div className={'comment_heart'}>
                                    <img src="/img/heart5.png"/>
                                </div>
                              }
                              onEl={
                                <div className={'comment_heart'}>
                                  <img src="/img/heart6.png"/>
                                </div>
                              }
                            />
                        </div>
                        <ul>
                            <li>
                                <div className={'user_comment'}>
                                    <Link href='/userfeed'>
                                      <a className={'comment_prof'}>
                                        <img src="/img/prof_03.jpg"/>
                                      </a>
                                    </Link>
                                    <div>
                                        <div className={'comment'}>
                                          <Link href='/userfeed'>
                                            <a>
                                              minah1121
                                            </a>
                                          </Link>저도 얼른 장만하고싶네요!
                                        </div>
                                        <div className={'comment_info'}>
                                            <p className={'comment_date'}>2021-08-20</p>
                                            <p className={'comment_like'}>
                                                좋아요 10개
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <CheckBox
                                  id={"checkBox1"}
                                  defCk={false}
                                  offEl={
                                    <div className={'comment_heart'}>
                                        <img src="/img/heart5.png"/>
                                    </div>
                                  }
                                  onEl={
                                    <div className={'comment_heart'}>
                                      <img src="/img/heart6.png"/>
                                    </div>
                                  }
                                />
                            </li>
                        </ul>
                        <Link href='/comment'>
                            <a className={'more_comment'}>
                                답글 5개 보기
                                <img src="/img/arrow_07.png"/>
                            </a>
                        </Link>
                    </li>
                </ul>
                <div className={'comment_input'}>
                    <img src="/img/prof_01.jpg"/>
                    <div>
                        <textarea placeholder="댓글 달기..." />
                        <button className={'extra_bold'}>게시</button>
                    </div>
                </div>
            </div>
        </TitleLayout>
    )
}
