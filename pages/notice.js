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
    const [noteLIst ,setNoteList] = useState([]);
    useEffect(() =>{
      axios.get(process.env.api+'Borad/BoradNoticeList?limit=5'
      ).then((res)=>{
        if(typeof(res.data.data) == 'object'){
          setNoteList(res.data.data);
        }
      }).catch((error)=> {

      });
    },[]);

    return (
        <div className={'notice_list'}>
            {/* // defaultExpanded */}
              {noteLIst.map((val,key) =>(
            <Accordion  key={key}>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
              >
              <Typography className={classes.heading}>
                  <p className={'notice_tit'}>{val.wr_subject}</p>
                  <span className={'notice_date'}>{val.wr_datetime}</span>
              </Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                    {val.wr_content}
                  </Typography>
              </AccordionDetails>
            </Accordion>
              ))}
        </div>
    );
  }