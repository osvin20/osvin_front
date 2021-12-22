import TitleLayout from '../layout/TitleLayout'
import NumberInput from "../layout/NumberInput";
import Link from 'next/link'
import React from 'react';
import {useState,useEffect} from "react";
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

export default function AdPay(){
    const classes = useStyles();
    const onchangeHandler = (e) =>{
      console.log() //데이터 받기
    }
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>ADVERTISEMENT</h1>
            </div>
            <div className={'borderfix'}></div>
            <div className={'adpakage_div adpakage_pay'}>
              <div className={'adpakage'}>
                <ul className={'adpakagelist'}>
                  <li>
                    <p className={'ad_name'}>
                      상품 끌어올리기 150개
                      <span className={'cart_del'}>
                          <img src="img/close.png"/>
                      </span>
                    </p>
                    <p className={'ad_sum_txt'}>수량 1개</p>
                    <p className={'ad_pay_price'}>70,000원</p>
                  </li>
                  <li className={'spakage'}>
                    <p className={'ad_name'}>
                      상품 끌어올리기 150개
                      <span className={'cart_del'}>
                          <img src="img/close.png"/>
                      </span>
                    </p>
                    <p className={'ad_sum_txt'}>수량 1개</p>
                    <p className={'ad_pay_price'}>70,000원</p>
                  </li>
                </ul>
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
                            </div>
                            <div className={'card_sel'}>
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
                            </div>
                        </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className={'ad_total_sum'}>
                  <p>총 결제금액</p>
                  <p>
                    <span>70,000</span>원
                  </p>
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
              </div>
              <div className={'ad_buy'}>
                <Link href='/'>
                  <a>결제하기</a>
                </Link>
              </div>
            </div>

        </TitleLayout>
    )
}
