import React from 'react';
import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

export default function StoreQna({mb_id}){

  const [list ,setList] = useState([]);

  useEffect(() =>{
    axios.get(process.env.api+"Store/QnaList/"+mb_id
    ).then((res)=>{
      console.log(res.data.data);
      if(typeof(res.data.data) == "object"){
        setList(res.data.data);
      }
    }).catch((error)=> {

    });
  },[]);

  const classes = useStyles();
  return (
  <div>
    <ul className={'notice_list storereqna'}>
    {list.map((val,key) =>(
      <li className={'q_confirm'}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <div className={'store_q'}>
                {val.iq_answer == ""?
                  <div className={'q_state'}>
                      답변예정
                  </div>:
                  <div className={'q_state'}>
                      답변완료
                  </div>
                }


                <div className={'qna_lock'}>
                </div>
                <div className={'q_tit'}>
                  <p className={'bold_txt'}>
                      {val.iq_subject.substr(0,10)}
                  </p>
                  <p>
                      상품
                  </p>
                </div>
                <div className={'q_date'}>
                  <p>
                      {val.iq_time.substr(0,10)}
                  </p>
                  <p>
                      {val.mb_id.substr(0,3)}***
                  </p>
                </div>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className={'q_detail'}>
                <p className={'extra_bold'}>
                    Q. {val.iq_subject}
                </p>
                <p>
                    {val.iq_question}
                </p>
              </div>
              <div className={'store_a'}>
                <div className={'a_shop extra_bold'}>
                    <div className={'extra_bold'}>
                        A.
                    </div>
                    판매자 답변
                </div>
                <div>
                {val.iq_answer}
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </li>
      ))}
    </ul>
  </div>
  );
}
