import React from 'react';
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
  export default function StoreNotice({mb_id}) {
    const classes = useStyles();

    const [list ,setList] = useState([]);

    useEffect(() =>{
      axios.get(process.env.api+"Store/NoticeList/"+mb_id
      ).then((res)=>{
        console.log(res.data.data);
        if(typeof(res.data.data) == "object"){
          setList(res.data.data);
        }
      }).catch((error)=> {

      });
    },[]);

    return (
      <div className={'notice_list store_notice'}>
        {list.map((val,key) =>(
          <div className={classes.root} key={key}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  <p className={'notice_tit'}>{val.wr_subject}</p>
                  <span className={'notice_date'}>{val.wr_last}</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {val.wr_content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    );
  }
