import React from 'react';
import Link from "next/link";
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

export default function StoreQna(){
  const classes = useStyles();
  return (
  <div>
    <ul className={'notice_list storereqna'}>
      <li>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
            <div className={'store_q'}>
              <div className={'q_state'}>
                  답변예정
              </div>
              <div className={'qna_lock'}>
                  <img src="/img/lock.png"/>
              </div>
              <div className={'q_tit'}>
                <p className={'bold_txt'}>
                    비공개글입니다.
                </p>
                <p>
                    상품
                </p>
              </div>
              <div className={'q_date'}>
                <p>
                    2021-08-20
                </p>
                <p>
                    als******
                </p>
              </div>
            </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div className={'store_a secret_a'}>
                비밀글입니다.
            </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </li>
      <li className={'q_confirm'}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <div className={'store_q'}>
                <div className={'q_state'}>
                    답변완료
                </div>
                <div className={'qna_lock'}>
                </div>
                <div className={'q_tit'}>
                  <p className={'bold_txt'}>
                      배송 문의합니다.
                  </p>
                  <p>
                      상품
                  </p>
                </div>
                <div className={'q_date'}>
                  <p>
                      2021-08-20
                  </p>
                  <p>
                      als******
                  </p>
                </div>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className={'q_detail'}>
                <p className={'extra_bold'}>
                    Q. 배송 관련 문의합니다.
                </p>
                <p>
                    안녕하세요 어제 결제완료했는데 예상 출고일이 궁금합니다.
                </p>
              </div>
              <div className={'store_a'}>
                <div className={'a_shop extra_bold'}>
                    <div className={'extra_bold'}>
                        A.
                    </div>
                    오스빈 스토어
                </div>
                <div>
                안녕하세요 오스빈스토어입니다.<br/>
                문의 주신 상품은 11월 1일 정상출고 될 예정입니다.<br/>
                감사합니다. 
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </li>
    </ul>
  </div>
  );
}
