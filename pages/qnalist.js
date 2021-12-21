import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
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

export default function QnaList(){
    const classes = useStyles();
    return (
        <TitleLayout>
          <div className={'pagetit_div'}>
            <h1 className={"page_tit"}>Q&A</h1>
          </div>
          <div className={'borderfix'}></div>
          <ul className={'qnalist'}>
            <li>
              <Link href='/item'>
                <a className={'qnaitem'}>
                  <div className={'qnaitem_img'}>
                  <img src='img/item01.jpg'/>
                  </div>
                  <p className={'qnaitem_info'}>
                    오스빈 스토어
                    <span className={'extra_bold'}>도리 믹스 박시 핏 니트</span>
                  </p>
                </a>
              </Link>
              <p className={'qnastate extra_bold'}>주문/배송
                <span className={'qnadate'}>2021-12-04</span>
              </p>
              <p className={'extra_bold qnatit'}>
                Q <span className={'extra_bold'}>배송 문의합니다.</span>
              </p>
              <p className={'qnatxt'}>
                A <span>12월 1일에 결제완료했습니다. 예상 출고일이 어떻게 되나요?</span>
              </p>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                  <div className={'answer_flex'}>
                    <p className={'answer_state extra_bold'}>답변대기</p>
                    <p className={'qna_del extra_bold'}>삭제</p>
                  </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>

                  </Typography>
                </AccordionDetails>
              </Accordion>
            </li>
            <li>
              <Link href='/item'>
                <a className={'qnaitem'}>
                  <div className={'qnaitem_img'}>
                  <img src='img/item08.jpg'/>
                  </div>
                  <p className={'qnaitem_info'}>
                    오스빈 스토어
                    <span className={'extra_bold'}>레터 스퀘어 레더 백</span>
                  </p>
                </a>
              </Link>
              <p className={'qnastate extra_bold'}>상품
                <span className={'qnadate'}>2021-12-04</span>
              </p>
              <p className={'extra_bold qnatit'}>
                Q <span className={'extra_bold'}>상품 문의합니다.</span>
              </p>
              <p className={'qnatxt'}>
                A <span>상품 상세 사이즈가 궁금합니다.</span>
              </p>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    <div className={'answer_flex'}>
                      <p className={'answer_state extra_bold answer_complete'}>답변완료</p>
                      <p className={'qna_del extra_bold'}>삭제</p>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  <div className={'qna_a'}>
                      <div className={'qna_shop'}>
                        <div className={'qna_a_shop'}>
                          <img src="img/shop_01.jpg"/>
                        </div>
                        오스빈 스토어
                      </div>
                      <div className={'qna_a_txt'}>
                        안녕하세요. 오스빈 스토어입니다.<br/>주문하신 상품은 당일 출고예정입니다.<br/>감사합니다.
                      </div>
                  </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </li>
          </ul>
        </TitleLayout>
    )
}
