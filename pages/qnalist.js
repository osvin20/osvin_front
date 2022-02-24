import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useRouter} from 'next/router'
import {useEffect,useState,useRef} from 'react';
import DaumPostCode from 'react-daum-postcode';
import axios from 'axios';

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
  const [list,setList] = useState([]);
  useEffect(() => {
    // 배송지 조회
    axios.get(process.env.api+"Borad/QnaList",{
      params: {
        mb_token:localStorage.mb_token
      }
    }).then((res)=>{
      if(res.data.state){
        console.log(res.data.data);
        setList(res.data.data);
      }
    }).catch((error)=>{});
   }, []);
  return (
    <TitleLayout>
      <div className={'pagetit_div'}>
        <h1 className={"page_tit"}>Q&A</h1>
      </div>
      <div className={'borderfix'}></div>
      <ul className={'qnalist'}>
        {list.map((val,key) =>(
          <li key={key}>
            <p className={'qnastate extra_bold'}>상품
              <span className={'qnadate'}>{val.iq_time}</span>
            </p>
            <p className={'extra_bold qnatit'}>
              Q <span className={'extra_bold'}>{val.iq_subject}</span>
            </p>
            <p className={'qnatxt'}>
              A <span>{val.iq_question}</span>
            </p>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  <div className={'answer_flex'}>
                    {val.iq_answer == "" ?
                      <p className={'answer_state extra_bold answer_complete'}>답변대기</p>:
                      <p className={'answer_state extra_bold answer_complete'}>답변완료</p>
                    }


                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className={'qna_a'}>
                    <div className={'qna_shop'}>
                      <div className={'qna_a_shop'}>
                        <img
                          src={val.mb_img}
                          onError={(e)=>{e.target.src =  "/img/no_img.png"}}
                        />
                      </div>
                      {val.mb_nick}
                    </div>
                    <div className={'qna_a_txt'}>
                      {val.iq_answer}
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </li>
        ))}
      </ul>
    </TitleLayout>
  )
}
