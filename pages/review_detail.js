import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import Slider  from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OsbinModal from '../layout/OsbinModal';
import ModModal from '../layout/ModModal'

export default function ReviewDetail(){
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
        <h1 className={'page_tit'}>REVIEW</h1>
        <div className={'borderfix'}></div>
        <div className={'post_content review_content'}>
          <div className={'rv_prof'}>
            <Link href="/userfeed">
              <a className={'user_prof_div'}>
                <img src="/img/prof_01.jpg"/>
                <p>sohee1203</p>
              </a>
            </Link>
            <p className={'rv_date'}>2021-08-20
              <OsbinModal
                title=""
                bnt_title =""
                class_name={"rv_mod_btn"}
                modal_id={"review_detail_modal"}
                close_con={false}
              >
                <ModModal/>
              </OsbinModal>
            </p>
          </div>
          <div className={'item_pic'}>
            <Slider {...settings}>
              <div className={'content_box'}>
                <img src="/img/post_01.jpg"/>
              </div>
              <div className={'content_box'}>
                <img src="/img/post_02.jpg"/>
              </div>
              <div className={'content_box'}>
                <img src="/img/post_03.jpg"/>
              </div>
            </Slider>
          </div>
          <div className={'post_txt'}>
            맨살에 착용해도 아주 부드럽고 포근하게 감기는 촉감으로 피부가 예민하신 분들도 부담없이 착용하실 수 있어요~! 루즈한 핏이지만 부해보이지 않고 여리여리하게 떨어지는 핏감이고 V넥이 깊게 파이지 않아서 단독으로도 부담 없었어요:) 보온성이 정말 뛰어나서 하나만 입어도 따뜻 포근 그 자체입니다~!
          </div>
        </div>
      </TitleLayout>
    )
}
