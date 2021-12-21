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

export default function AdPakage(){
    const classes = useStyles();
    const onchangeHandler = (e) =>{
      console.log() //데이터 받기
    }
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>ADVERTISEMENT</h1>
            </div>
            <div className={'adpakage_div'}>
              <div className={'adpakage'}>
                <ul className={'adpakagelist'}>
                  <li>
                    <input type='checkbox' id='ad_ck1' />
                    <label htmlFor='ad_ck1'>
                      <div>
                        <p className={'ad_tit'}>상품 끌어올리기 150개</p>
                        <p className={'ad_price'}><span>70,000</span>원</p>
                      </div>
                      <div className={'ad_sum'}>
                        <NumberInput onchangeHandler={onchangeHandler} defNum={0} min={0} max={100}/>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input type='checkbox' id='ad_ck2' />
                    <label htmlFor='ad_ck2'>
                      <div>
                        <p className={'ad_tit'}>스토어 끌어올리기 31개</p>
                        <p className={'ad_price'}><span>80,000</span>원</p>
                      </div>
                      <div className={'ad_sum'}>
                        <NumberInput onchangeHandler={onchangeHandler} defNum={0} min={0} max={100}/>
                      </div>
                    </label>
                  </li>
                  <li className={'spakage'}>
                    <input type='checkbox' id='ad_ck2' />
                    <label htmlFor='ad_ck2'>
                      <div>
                        <p className={'ad_tit'}>S 패키지</p>
                        <p className={'ad_price'}><span>80,000</span>원</p>
                      </div>
                      <div className={'spakage_txt'}>상품 끌어올리기 310개 + 스토어 끌어올리기 62개</div>
                      <div className={'ad_sum'}>
                        <NumberInput onchangeHandler={onchangeHandler} defNum={0} min={0} max={100}/>
                      </div>
                    </label>
                  </li>
                </ul>
                <div className={'ad_total_sum'}>
                  <p>총 결제금액</p>
                  <p>
                    <span>70,000</span>원
                  </p>
                </div>
                <div className={'ad_txt notice_list'}>
                  <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                          <p className={'ad_a_tit'}>
                            <span>?</span>광고 패키지란?
                          </p>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                          <div className={'ad_txt'}>
                            <div>
                              <p>● 상품 끌어올리기</p>
                              <p>
                                - 상품 끌어올리기를 사용하면 해당 상품이 페이지 상단에 노출되어 사용자에게 노출되는 빈도가 상승합니다.
                              </p>
                              <p>
                                - 횟수 제안은 따로 없으나 한 상품당 3시간마다 사용이 가능합니다.
                              </p>
                            </div>
                            <div>
                              <p>● 스토어 끌어올리기</p>
                              <p>
                                - 상품 끌어올리기를 사용하면 해당 상품이 페이지 상단에 노출되어 사용자에게 노출되는 빈도가 상승합니다.
                              </p>
                              <p>
                                - 횟수 제안은 따로 없으나 한 상품당 3시간마다 사용이 가능합니다.
                              </p>
                            </div>
                          </div>
                        </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              <div className={'ad_buy'}>
                <Link href='/ad_pay'>
                  <a>구매하기</a>
                </Link>
              </div>
            </div>

        </TitleLayout>
    )
}
