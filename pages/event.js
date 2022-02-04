import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useEffect,useState} from 'react';
import Swal from 'sweetalert2'
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

  export default function SimpleAccordion() {
    const classes = useStyles(0);
    const [evList ,setEvList] = useState([]);
    useEffect(() =>{
      axios.get(process.env.api+'Borad/BoradEventList?limit=5'
      ).then((res)=>{
        if(typeof(res.data.data) == 'object'){
          setEvList(res.data.data);
        }
        console.log(res.date.date);
      }).catch((error)=> {

      });
    },[]);
  
    return (
        <div className={'notice_list'}>
            <div className={classes.root}>
              {evList.map((val, key) => (
                <Accordion key={key}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                            <p className={'notice_tit'}>{val.ev_subject}</p>
                            <span className={'notice_date'}>{val.ev_time}</span>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                          <img src={
                              val.ev_img != ''?
                              val.ev_img:
                              '/img/no_img.png'
                            }
                          />
                          {val.ev_subject}
                        </Typography>
                    </AccordionDetails>
                </Accordion> 
              ))}
            </div>
        </div>
    );
  }