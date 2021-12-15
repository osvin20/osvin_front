import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import React from 'react';
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

export default function Faq(){
    const classes = useStyles();
    return (
        <TitleLayout>
            <h1 className={'page_tit'}>FAQ</h1>
            <div className={'border borderfix'}></div>
            <div className={'notice_list faq_list'}>
                <div>
                    <p className={'faq_tit'}>
                        1. 주문/결제/배송
                    </p>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                <p className={'notice_tit'}>
                                    <span className={'tit_q'}>Q</span>
                                    상품에 대해 문의하고 싶어요!
                                </p>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            <span className={'tit_q tit_a'}>A</span>
                            상품에 대해 궁금하신 점이 있다면 해당 상품 페이지 내 Q&A 를 이용해주세요. 문의글을 작성하면 해당 스토어에서 확인 후 답변을 드립니다.<br/>
                            문의방법 : APP ▶ MY페이지 ▶ 주문/배송조회 클릭 ▶ 상품의 이미지 클릭 ▶  상세페이지 접속▶ Q&A 문의글 작성<br/>
                            단, 비회원의 경우 Q&A 작성이 불가하니 참고바랍니다.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                <p className={'notice_tit'}>
                                    <span className={'tit_q'}>Q</span>
                                    주문 상태(진행 현황에 대해 알고 싶어요!)
                                </p>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            <span className={'tit_q tit_a'}>A</span>
                            <br/>- 결제대기 : 주문이 완료되어 결제를 기다리는 상태(가상 계좌 입금전)<br/>

                            - 결제완료 : 주문 요청이 완료된 상태<br/>

                            - 상품준비 : 스토어가 상품준비중인 상태<br/>

                            - 배송준비 : 스토어가 상품 검수 후 배송을 보내기 위한 준비 상태<br/>

                            - 배송중 : 상품 송장 번호 등록되어 출고된 상태<br/>

                            - 배송완료 : 고객님께 상품이 배송된 상태<br/>

                            - 구매확정 : 상품 수령 후 교환/환불 의사가 없는 상태▶ 리뷰 작성 가능<br/>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div>
                    <p className={'faq_tit'}>
                        2. 취소/환불/교환
                    </p>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                <p className={'notice_tit'}>
                                    <span className={'tit_q'}>Q</span>
                                    주문 취소, 환불 시 사용한 포인트와 쿠폰은 복원되나요?
                                </p>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            <span className={'tit_q tit_a'}>A</span>
                            <br/> [포인트]<br/>- 취소/환불 완료 즉시 환급됩니다.<br/>
                            - 단, 부분 취소/환불의 경우 실 결제하신 상품가 전액 환급되며, 포인트는 환급되지 않습니다.<br/>
                            [쿠폰]<br/> 
                            - 취소/환불 완료 즉시 복원됩니다. <br/> 
                            - 유효 기간이 지났을 경우 자동소멸됩니다.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                <p className={'notice_tit'}>
                                    <span className={'tit_q'}>Q</span>
                                    반품비는 환불금액에서 차감이 가능한가요?
                                </p>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            <span className={'tit_q tit_a'}>A</span>
                            오스빈의 경우, 여러 스토어가 입점한 플랫폼입니다.

                            따라서 각 스토어마다 반품 방법과 배송비가 상이하며 현재는 배송비 차감 시스템이 제공되지 않습니다.

                            번거로우시더라도 구매하신 스토어를 통하여 반품비 문의 후 입금 부탁드립니다.<br/> 

                            ※ 반품비 입금이 늦어질 경우 환불처리가 지연될 수 있는 점 참고 바랍니다.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </TitleLayout>
    )
}
