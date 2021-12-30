
import NoneTab from '../layout/NoneTab'
import Link from 'next/link'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OsbinModal from '../layout/OsbinModal';
import AddressModal from '../layout/AddressModal'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

export default function Order(){
  const classes = useStyles();
  return (
    <NoneTab>
      <div className={'pagetit_div'}>
        <h1 className={'page_tit'}>ORDER</h1>
      </div>
      <div className={'borderfix'}></div>
      <div className={'notice_list order_div'}>
        <div className={'border_top'}></div>
        <Accordion defaultExpanded>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >
              <Typography className={classes.heading}>
                  <div className={'order_tit extra_bold'}>
                      상품정보
                  </div>
              </Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography>
                  <ul className={'order_ul'}>
                      {/* <li>
                        <Link href='/item'>
                          <a>
                            <div className={'order_item'}>
                                <img src="/img/item08.jpg"/>
                            </div>
                            <div className={'orderitem_info'}>
                                <div>
                                    <p className={'order_shop'}>오스빈스토어</p>
                                    <p className={'order_name bold_txt'}>레터 스퀘어 레더 백</p>
                                </div>
                                <div className={'orderitem_price'}>
                                    <p className={'del_cost'}>
                                        배송비<span>무료</span>
                                    </p>
                                    <p className={'price extra_bold'}>
                                        20,000원
                                    </p>
                                </div>
                            </div>
                          </a>
                        </Link>
                      </li> */}
                      <li>
                        <Link href='/item'>
                          <a>
                            <div className={'order_item'}>
                                <img src="/img/item16.jpg"/>
                            </div>
                            <div className={'orderitem_info'}>
                                <div>
                                    <p className={'order_shop'}>오스빈스토어</p>
                                    <p className={'order_name bold_txt'}>컬러링 펄 버튼 니트 가디건</p>
                                </div>
                                <div className={'orderitem_price'}>
                                    <p className={'del_cost'}>
                                        배송비<span>무료</span>
                                    </p>
                                    <p className={'price extra_bold'}>
                                        20,000원
                                    </p>
                                </div>
                            </div>
                          </a>
                        </Link>
                      </li>
                  </ul>
              </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={'notice_list order_div'}>
        <div className={'border_top'}></div>
        <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>
                    <div className={'order_tit extra_bold'}>
                        주문자 정보
                    </div>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <ul className={'order_ul'}>
                        <li className={'order_input'}>
                            <p>이름</p>
                            <div className={'order_input_div'}>
                                <input type='text' placeholder="주문자 성함을 입력해주세요."/>
                            </div>
                        </li>
                        <li className={'order_input'}>
                            <p>연락처</p>
                            <div className={'order_input_div'}>
                                <input type='text' placeholder="주문자 연락처를 입력해주세요."/>
                            </div>
                        </li>
                    </ul>
                </Typography>
            </AccordionDetails>
        </Accordion>
      </div>
      <div className={'notice_list order_div'}>
        <div className={'border_top'}></div>
        <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>
                    <div className={'order_tit extra_bold'}>
                        배송지 정보
                        <OsbinModal
                          title=""
                        //   modalFun ={()=>router.push("/")}
                          bnt_title ="배송지 목록"
                          class_name={"del_list"}
                        >
                          <AddressModal/>
                        </OsbinModal>
                    </div>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                  <ul className={'order_ul'}>
                    <li className={'order_input'}>
                      <p>수령인</p>
                      <div className={'order_input_div'}>
                          <input type='text' placeholder="수령인 성함을 입력해주세요."/>
                      </div>
                    </li>
                    <li className={'order_input'}>
                      <p>연락처</p>
                      <div className={'order_input_div'}>
                          <input type='text' placeholder="수령인 연락처를 입력해주세요."/>
                      </div>
                    </li>
                    <li className={'order_input order_button'}>
                      <p>주소</p>
                      <div className={'order_input_div'}>
                          <input type='text' placeholder="우편번호"/>
                          <button className={'adrs_find'}>우편번호 찾기</button>
                      </div>
                    </li>
                    <li className={'order_input'}>
                      <p></p>
                      <div className={'order_input_div'}>
                          <input type='text' placeholder=""/>
                      </div>
                    </li>
                    <li className={'order_input'}>
                      <p></p>
                      <div className={'order_input_div'}>
                          <input type='text' placeholder="상세주소를 입력해주세요."/>
                      </div>
                    </li>
                    <li className={'order_input order_sel'}>
                      <p>배송메모</p>
                      <div className={'order_input_div'}>
                          <select>
                              <option style={{color: "red"}}>배송메모를 선택해주세요.</option>
                          </select>
                          <img src="/img/arrow_10.png"/>
                      </div>
                    </li>
                  </ul>
                </Typography>
            </AccordionDetails>
        </Accordion>
      </div>
      <div className={'notice_list order_div'}>
        <div className={'border_top'}></div>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <div className={'order_tit extra_bold'}>
                  에코포인트 사용
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className={'eco_point'}>
                <p>
                    보유 에코포인트
                    <span>
                        5100P
                    </span>
                </p>
                <div>
                    <input type="text" placeholder="0" />P
                    <button>전액사용</button>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={'notice_list order_div'}>
        <div className={'border_top'}></div>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <div className={'order_tit extra_bold'}>
                  결제 정보
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography>
                  <div className={'osbin_pay'}>
                      <div className={'pay_radio'}>
                          <input type="radio" id="pay_radio1" checked name="payradio"/>
                          <label htmlFor="pay_radio1">오스빈 페이</label>
                      </div>
                      <ul>
                          <li className={'card_none'}>
                              <Link href='/cardform'>
                                  <a>
                                      <div className={'plus_ico'}>
                                          <img src="/img/plus.png"/>
                                      </div>
                                      <p>카드를 등록해보세요.</p>
                                      <span>카드를 한 번만 등록해놓으면<br/>매번 쉽게 결제할 수 있어요!</span>
                                  </a>
                              </Link>
                          </li>
                          <li>
                              <input type="radio" id="osbinpay1" name="osbinpay"/>
                              <label htmlFor="osbinpay1">
                                  <div className={'paycard hdcard'}>
                                      <div className={'paycard_info'}>
                                          <p>현대카드</p>
                                          <p>745896******1452</p>
                                      </div>
                                  </div>
                              </label>
                          </li>
                          <li>
                              <input type="radio" id="osbinpay2" name="osbinpay"/>
                              <label htmlFor="osbinpay2">
                                  <div className={'paycard kbcard'}>
                                      <div className={'paycard_info'}>
                                          <p>국민카드</p>
                                          <p>745896******1452</p>
                                      </div>
                                  </div>
                              </label>
                          </li>
                          <li>
                              <input type="radio" id="osbinpay3" name="osbinpay"/>
                              <label htmlFor="osbinpay3">
                                  <div className={'paycard bccard'}>
                                      <div className={'paycard_info'}>
                                          <p>비씨카드</p>
                                          <p>745896******1452</p>
                                      </div>
                                  </div>
                              </label>
                          </li>
                      </ul>
                  </div>
                  <div className={'normal_pay'}>
                      <div className={'pay_radio'}>
                          <input type="radio" id="pay_radio2" name="payradio" />
                          <label htmlFor="pay_radio2">일반 결제</label>
                      </div>
                  </div>
                  <div className={'normalpay_sel'}>
                      <input type="radio" id="normal_pay1" name="normal_pay" />
                      <label htmlFor="normal_pay1" className={'cardpay'}>
                          <p>신용카드</p>
                      </label>
                      <input type="radio" id="normal_pay2" name="normal_pay" />
                      <label htmlFor="normal_pay2" className={'cashpay'}>
                          <p>실시간<br/>계좌이체</p>
                      </label>
                      <input type="radio" id="normal_pay3" name="normal_pay" />
                      <label htmlFor="normal_pay3" className={'bankpay'}>
                          <p>무통장<br/>입금</p>
                      </label>
                      <input type="radio" id="normal_pay4" name="normal_pay" />
                      <label htmlFor="normal_pay4" className={'mbpay'}>
                          <p>휴대폰<br/>결제</p>
                      </label>
                  </div>
                  {/*<div className={'card_sel'}>
                      <div>
                          <select>
                              <option>카드를 선택해주세요.</option>
                          </select>
                          <img src="/img/arrow_10.png"/>
                      </div>
                      <div>
                          <select>
                              <option>일시불</option>
                          </select>
                          <img src="/img/arrow_10.png"/>
                      </div>
                      <p className={'pay_note'}>
                          총 결제 금액 5만원부터 할부결제가 가능합니다.
                      </p>
                  </div>*/}
              </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={'notice_list order_div'}>
        <div className={'border_top'}></div>
        <Accordion defaultExpanded>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >
              <Typography className={classes.heading}>
                  <div className={'order_tit extra_bold'}>
                      최종결제금액
                  </div>
              </Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography>
                  <div className={'total_pay'}>
                      <ul>
                          <li>
                              <p>총 상품금액</p>
                              <p>
                                  <span>
                                      125,000
                                  </span>원
                              </p>
                          </li>
                          <li>
                              <p>총 배송비</p>
                              <p>
                                  <span>
                                      5,000
                                  </span>원
                              </p>
                          </li>
                          <li>
                              <p>총 할인금액</p>
                              <p>-
                                  <span>
                                      5,000
                                  </span>원
                              </p>
                          </li>
                      </ul>
                      <div className={'total_bold'}>
                          <p>총 결제금액</p>
                          <p>
                              <span>125,000</span>원
                          </p>
                      </div>
                  </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={'notice_list order_div pay_div'}>
        <div className={'border_top'}></div>
        <Accordion defaultExpanded>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >
              <Typography className={classes.heading}>
                  <div className={'order_tit extra_bold'}>
                      구매조건/약관 및 개인정보 이용동의
                  </div>
              </Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography>
                  <ul className={'pay_agree'}>
                      <li>
                          <input type="checkbox" id="payagree1"/>
                          <label htmlFor="payagree1">오스빈 약관 동의</label>
                          <p>보기</p>
                      </li>
                      <li>
                          <input type="checkbox" id="payagree2"/>
                          <label htmlFor="payagree2">개인정보 수집 및 이용에 대한 안내</label>
                          <p>보기</p>
                      </li>
                      <li>
                          <input type="checkbox" id="payagree3"/>
                          <label htmlFor="payagree3">구매조건 및 개인정보 제3자 제공</label>
                          <p>보기</p>
                      </li>
                  </ul>
              </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={'mb75'}></div>
      <div className={'pay_btn paybtn'}>
        <Link href="/order_confirm">
            <a>결제하기</a>
        </Link>
      </div>
    </NoneTab>
  )
}
