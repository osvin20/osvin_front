
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import React,{useState} from 'react';
import CheckBox from '../layout/CheckBox.js';
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

export default function Comment(){
  const [ck ,setCk] = useState(false);
  const classes = useStyles();
  let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <TitleLayout>
            <div className={'pagetit_div'}>
              <h1 className={'page_tit'}>COMMENT</h1>
            </div>
            <div className={'borderfix'}></div>
            <div className={'post_comment comment_page'}>
                <ul>
                    <li>
                        <div className={'comment_div'}>
                            <div className={'user_comment'}>
                                <Link href='/userfeed'>
                                  <a className={'comment_prof'}>
                                    <img src="/img/prof_02.jpg"/>
                                  </a>
                                </Link>
                                <div>
                                    <div className={'comment'}>
                                        <Link href='/userfeed'>
                                          <a>
                                            hyeri0820
                                          </a>
                                        </Link>
                                        가디건이 너무 이뻐요!ㅜㅜ
                                    </div>
                                    <div className={'comment_info'}>
                                        <p className={'comment_date'}>2021-08-20</p>
                                        <p className={'comment_like'}>
                                            좋아요 10개
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <CheckBox
                              id={"checkBox1"}
                              defCk={false}
                              offEl={
                                <div className={'comment_heart'}>
                                    <img src="/img/heart5.png"/>
                                </div>
                              }
                              onEl={
                                <div className={'comment_heart'}>
                                  <img src="/img/heart6.png"/>
                                </div>
                              }
                            />
                        </div>
                        <ul>
                            <li>
                                <div className={'user_comment'}>
                                    <div className={'comment_prof'}>
                                        <img src="/img/prof_03.jpg"/>
                                    </div>
                                    <div>
                                        <div className={'comment'}>
                                            <Link href='/userfeed'>
                                              <a>
                                                minah1121
                                              </a>
                                            </Link>저도 얼른 장만하고싶네요!
                                        </div>
                                        <div className={'comment_info'}>
                                            <p className={'comment_date'}>2021-08-20</p>
                                            <p className={'comment_like'}>
                                                좋아요 10개
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <CheckBox
                                  id={"checkBox2"}
                                  defCk={false}
                                  offEl={
                                    <div className={'comment_heart'}>
                                        <img src="/img/heart5.png"/>
                                    </div>
                                  }
                                  onEl={
                                    <div className={'comment_heart'}>
                                      <img src="/img/heart6.png"/>
                                    </div>
                                  }
                                />
                            </li>
                        </ul>
                        <div className={'comment_more'}>
                          <Accordion>
                              <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                              >
                                  <Typography className={classes.heading}>
                                      <p className={'more_comment'}>답글 5개 보기<img src="/img/arrow_07.png"/></p>
                                  </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                  <Typography>
                                  <ul>
                                      <li>
                                          <div className={'user_comment'}>
                                              <div className={'comment_prof'}>
                                                  <img src="/img/prof_03.jpg"/>
                                              </div>
                                              <div>
                                                  <div className={'comment'}>
                                                      <Link href='/userfeed'>
                                                        <a>
                                                          minah1121
                                                        </a>
                                                      </Link>저도 얼른 장만하고싶네요!
                                                  </div>
                                                  <div className={'comment_info'}>
                                                      <p className={'comment_date'}>2021-08-20</p>
                                                      <p className={'comment_like'}>
                                                          좋아요 10개
                                                      </p>
                                                  </div>
                                              </div>
                                          </div>
                                          <CheckBox
                                            id={"checkBox8"}
                                            defCk={false}
                                            offEl={
                                              <div className={'comment_heart'}>
                                                  <img src="/img/heart5.png"/>
                                              </div>
                                            }
                                            onEl={
                                              <div className={'comment_heart'}>
                                                <img src="/img/heart6.png"/>
                                              </div>
                                            }
                                          />
                                      </li>
                                      <li>
                                          <div className={'user_comment'}>
                                              <div className={'comment_prof'}>
                                                  <img src="/img/prof_03.jpg"/>
                                              </div>
                                              <div>
                                                  <div className={'comment'}>
                                                      <Link href='/userfeed'>
                                                        <a>
                                                          minah1121
                                                        </a>
                                                      </Link>저도 얼른 장만하고싶네요!
                                                  </div>
                                                  <div className={'comment_info'}>
                                                      <p className={'comment_date'}>2021-08-20</p>
                                                      <p className={'comment_like'}>
                                                          좋아요 10개
                                                      </p>
                                                  </div>
                                              </div>
                                          </div>
                                          <CheckBox
                                            id={"checkBox8"}
                                            defCk={false}
                                            offEl={
                                              <div className={'comment_heart'}>
                                                  <img src="/img/heart5.png"/>
                                              </div>
                                            }
                                            onEl={
                                              <div className={'comment_heart'}>
                                                <img src="/img/heart6.png"/>
                                              </div>
                                            }
                                          />
                                      </li>
                                  </ul>
                                  </Typography>
                              </AccordionDetails>
                          </Accordion>
                        </div>
                    </li>
                    <li>
                        <div className={'comment_div'}>
                            <div className={'user_comment'}>
                                <div className={'comment_prof'}>
                                    <img src="/img/prof_02.jpg"/>
                                </div>
                                <div>
                                    <div className={'comment'}>
                                        <Link href='/userfeed'>
                                          <a>
                                            hyeri0820
                                          </a>
                                        </Link>가디건이 너무 이뻐요!ㅜㅜ
                                    </div>
                                    <div className={'comment_info'}>
                                        <p className={'comment_date'}>2021-08-20</p>
                                        <p className={'comment_like'}>
                                            좋아요 10개
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <CheckBox
                              id={"checkBox3"}
                              defCk={false}
                              offEl={
                                <div className={'comment_heart'}>
                                    <img src="/img/heart5.png"/>
                                </div>
                              }
                              onEl={
                                <div className={'comment_heart'}>
                                  <img src="/img/heart6.png"/>
                                </div>
                              }
                            />
                        </div>
                        <ul>
                            <li>
                                <div className={'user_comment'}>
                                    <div className={'comment_prof'}>
                                        <img src="/img/prof_03.jpg"/>
                                    </div>
                                    <div>
                                        <div className={'comment'}>
                                            <Link href='/userfeed'>
                                              <a>
                                                minah1121
                                              </a>
                                            </Link>저도 얼른 장만하고싶네요!
                                        </div>
                                        <div className={'comment_info'}>
                                            <p className={'comment_date'}>2021-08-20</p>
                                            <p className={'comment_like'}>
                                                좋아요 10개
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <CheckBox
                                  id={"checkBox4"}
                                  defCk={false}
                                  offEl={
                                    <div className={'comment_heart'}>
                                        <img src="/img/heart5.png"/>
                                    </div>
                                  }
                                  onEl={
                                    <div className={'comment_heart'}>
                                      <img src="/img/heart6.png"/>
                                    </div>
                                  }
                                />
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className={'comment_div'}>
                            <div className={'user_comment'}>
                                <div className={'comment_prof'}>
                                    <img src="/img/prof_02.jpg"/>
                                </div>
                                <div>
                                    <div className={'comment'}>
                                        <Link href='/userfeed'>
                                          <a>
                                            hyeri0820
                                          </a>
                                        </Link>가디건이 너무 이뻐요!ㅜㅜ
                                    </div>
                                    <div className={'comment_info'}>
                                        <p className={'comment_date'}>2021-08-20</p>
                                        <p className={'comment_like'}>
                                            좋아요 10개
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <CheckBox
                              id={"checkBox5"}
                              defCk={false}
                              offEl={
                                <div className={'comment_heart'}>
                                    <img src="/img/heart5.png"/>
                                </div>
                              }
                              onEl={
                                <div className={'comment_heart'}>
                                  <img src="/img/heart6.png"/>
                                </div>
                              }
                            />
                        </div>
                        <ul>
                            <li>
                                <div className={'user_comment'}>
                                    <div className={'comment_prof'}>
                                        <img src="/img/prof_03.jpg"/>
                                    </div>
                                    <div>
                                        <div className={'comment'}>
                                            <Link href='/userfeed'>
                                              <a>
                                                minah1121
                                              </a>
                                            </Link>저도 얼른 장만하고싶네요!
                                        </div>
                                        <div className={'comment_info'}>
                                            <p className={'comment_date'}>2021-08-20</p>
                                            <p className={'comment_like'}>
                                                좋아요 10개
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <CheckBox
                                  id={"checkBox6"}
                                  defCk={false}
                                  offEl={
                                    <div className={'comment_heart'}>
                                        <img src="/img/heart5.png"/>
                                    </div>
                                  }
                                  onEl={
                                    <div className={'comment_heart'}>
                                      <img src="/img/heart6.png"/>
                                    </div>
                                  }
                                />
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className={'comment_div'}>
                            <div className={'user_comment'}>
                                <div className={'comment_prof'}>
                                    <img src="/img/prof_02.jpg"/>
                                </div>
                                <div>
                                    <div className={'comment'}>
                                        <Link href='/userfeed'>
                                          <a>
                                            hyeri0820
                                          </a>
                                        </Link>가디건이 너무 이뻐요!ㅜㅜ
                                    </div>
                                    <div className={'comment_info'}>
                                        <p className={'comment_date'}>2021-08-20</p>
                                        <p className={'comment_like'}>
                                            좋아요 10개
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <CheckBox
                              id={"checkBox7"}
                              defCk={false}
                              offEl={
                                <div className={'comment_heart'}>
                                    <img src="/img/heart5.png"/>
                                </div>
                              }
                              onEl={
                                <div className={'comment_heart'}>
                                  <img src="/img/heart6.png"/>
                                </div>
                              }
                            />
                        </div>
                        <ul>
                            <li>
                                <div className={'user_comment'}>
                                    <div className={'comment_prof'}>
                                        <img src="/img/prof_03.jpg"/>
                                    </div>
                                    <div>
                                        <div className={'comment'}>
                                            <Link href='/userfeed'>
                                              <a>
                                                minah1121
                                              </a>
                                            </Link>저도 얼른 장만하고싶네요!
                                        </div>
                                        <div className={'comment_info'}>
                                            <p className={'comment_date'}>2021-08-20</p>
                                            <p className={'comment_like'}>
                                                좋아요 10개
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <CheckBox
                                  id={"checkBox8"}
                                  defCk={false}
                                  offEl={
                                    <div className={'comment_heart'}>
                                        <img src="/img/heart5.png"/>
                                    </div>
                                  }
                                  onEl={
                                    <div className={'comment_heart'}>
                                      <img src="/img/heart6.png"/>
                                    </div>
                                  }
                                />
                            </li>
                        </ul>
                        <div className={'comment_more'}>
                          <Accordion>
                              <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                              >
                                  <Typography className={classes.heading}>
                                      <p className={'more_comment'}>답글 5개 보기<img src="/img/arrow_07.png"/></p>
                                  </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                  <Typography>
                                  <ul>
                                      <li>
                                          <div className={'user_comment'}>
                                              <div className={'comment_prof'}>
                                                  <img src="/img/prof_03.jpg"/>
                                              </div>
                                              <div>
                                                  <div className={'comment'}>
                                                      <Link href='/userfeed'>
                                                        <a>
                                                          minah1121
                                                        </a>
                                                      </Link>저도 얼른 장만하고싶네요!
                                                  </div>
                                                  <div className={'comment_info'}>
                                                      <p className={'comment_date'}>2021-08-20</p>
                                                      <p className={'comment_like'}>
                                                          좋아요 10개
                                                      </p>
                                                  </div>
                                              </div>
                                          </div>
                                          <CheckBox
                                            id={"checkBox8"}
                                            defCk={false}
                                            offEl={
                                              <div className={'comment_heart'}>
                                                  <img src="/img/heart5.png"/>
                                              </div>
                                            }
                                            onEl={
                                              <div className={'comment_heart'}>
                                                <img src="/img/heart6.png"/>
                                              </div>
                                            }
                                          />
                                      </li>
                                      <li>
                                          <div className={'user_comment'}>
                                              <div className={'comment_prof'}>
                                                  <img src="/img/prof_03.jpg"/>
                                              </div>
                                              <div>
                                                  <div className={'comment'}>
                                                      <Link href='/userfeed'>
                                                        <a>
                                                          minah1121
                                                        </a>
                                                      </Link>저도 얼른 장만하고싶네요!
                                                  </div>
                                                  <div className={'comment_info'}>
                                                      <p className={'comment_date'}>2021-08-20</p>
                                                      <p className={'comment_like'}>
                                                          좋아요 10개
                                                      </p>
                                                  </div>
                                              </div>
                                          </div>
                                          <CheckBox
                                            id={"checkBox8"}
                                            defCk={false}
                                            offEl={
                                              <div className={'comment_heart'}>
                                                  <img src="/img/heart5.png"/>
                                              </div>
                                            }
                                            onEl={
                                              <div className={'comment_heart'}>
                                                <img src="/img/heart6.png"/>
                                              </div>
                                            }
                                          />
                                      </li>
                                  </ul>
                                  </Typography>
                              </AccordionDetails>
                          </Accordion>
                        </div>
                    </li>
                </ul>
                <div className={'comment_input'}>
                    <img src="/img/prof_01.jpg"/>
                    <div>
                        <textarea placeholder="댓글 달기..." />
                    </div>
                </div>
            </div>
        </TitleLayout>
    )
}
