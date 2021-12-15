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
  export default function SimpleAccordion() {
    const classes = useStyles();
  
    return (
        <div className={'notice_list'}>
            {/* // defaultExpanded */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        <p className={'notice_tit'}>택배사 별 배송 지연 안내</p>
                        <span className={'notice_date'}>2021-08-20</span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    회원등급 확인은 로그인, 마이페이지에서 확인 가능합니다. 최근 1년간 배송 완료 주문건 실 결제 금액 기준으로 등급이 조정됩니다. 등급은 매월 1일 자동 등록되며 1개월간 유지됩니다. 배송비 혜택은 기본 배송비
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
                        <p className={'notice_tit'}>택배사 별 배송 지연 안내</p>
                        <span className={'notice_date'}>2021-08-20</span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    회원등급 확인은 로그인, 마이페이지에서 확인 가능합니다. 최근 1년간 배송 완료 주문건 실 결제 금액 기준으로 등급이 조정됩니다. 등급은 매월 1일 자동 등록되며 1개월간 유지됩니다. 배송비 혜택은 기본 배송비
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
  }