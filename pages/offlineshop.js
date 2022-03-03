
import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import {useEffect,useState,useLayoutEffect } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

export default function OfflineShop(){
    const [ofshopdetail, setOfshopdetail] = useState([]);
    const [lat, setLat] = useState(37.5182479131886);
    const [lng, setlng] = useState(127.023139471153);
    const [idx, setIdx] = useState(false);

    useEffect(() => {
      const mapScript = document.createElement("script");
      mapScript.async = true;
      mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=59248c71ebc85b261033ea9d37d68249&autoload=false`;
      document.head.appendChild(mapScript);
      mapScript.addEventListener("load", getMapLoad);
    },[])

    const getMapLoad = () =>{
      window.kakao.maps.load(() => {
        let container = document.getElementById("map");
        let latLng = new window.kakao.maps.LatLng(lat, lng);
        let options = {
          center:latLng,
          level: 7,
        };
        let map = new window.kakao.maps.Map(container, options);
        kakao.maps.event.addListener(map, 'dragend', function() {
          memberOfflineList(map);
        });
        kakao.maps.event.addListener(map, 'zoom_changed', function() {
          memberOfflineList(map);
        });
        memberOfflineList(map);
        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition ((pos)=> {
            map.setCenter(new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            memberOfflineList(map)
          });
        }
      });
    }

    const memberOfflineList = (map) =>{
      //마커 초기화
      var marker = new kakao.maps.Marker({map: map})
      marker.setMap(null);
      setIdx(false)

      var bounds = map.getBounds();
      var swLatLng = bounds.getSouthWest();
      var neLatLng = bounds.getNorthEast();

      axios.get(process.env.api+'Borad/MemberOfflineList',{
        params:{
          lat1:swLatLng.Ma,
          lat2:neLatLng.Ma,
          lng1:swLatLng.La,
          lng2:neLatLng.La
        }
      }).then((res)=>{
        if(typeof(res.data.data) == 'object'){
          setOfshopdetail(res.data.data);
          let i = 0;
          for (let val of res.data.data) {
            let marker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(val.of_lat,val.of_lng)
            });
            kakao.maps.event.addListener(marker, 'click',clickEvent(i,map,val.of_lat,val.of_lng));
            marker.setMap(map);
            i++;
          }

        }
      }).catch((error) => {

      })
    }
    const clickEvent = (i,map,lat,lng) =>{
      return function () {
        map.setCenter(new kakao.maps.LatLng(lat,lng));
        setIdx(i)
      };
    }


    return (
        <TitleLayout>

          <div className={'pagetit_div'}>
            <h1 className={'page_tit'}>OFFLINESHOP </h1>
          </div>
          <div className={'offshop_map'}>
            <div id="map"/>
          </div>
          {idx !== false &&
            <Link href={`/store?mb_id=${ofshopdetail[idx].mb_id}`}>
              <a className={'offshop_box'}>
                <div className={'offshop_thumb'}>
                  <img src={
                    ofshopdetail[idx].of_img != ''?
                    ofshopdetail[idx].of_img:
                    '/img/no_img.png'
                  }/>
                </div>
                <div className={'offshop_info'}>
                  <div>
                    <p className={'offshop_name'}>
                      {ofshopdetail[idx].of_name}
                    </p>
                    <p className={'offshop_adrs'}>{ofshopdetail[idx].of_address1}{ofshopdetail[idx].of_address2}</p>
                  </div>
                  <p className={'offshop_phone'}>{ofshopdetail[idx].mb_hp}</p>
                </div>

              </a>
            </Link>
          }

          <ul className={'offshoplist'}>
            {ofshopdetail != ''?
              ofshopdetail.map((val, key) => (
                <li key={key}>
                  <Link href={`/store?mb_id=${val.mb_id}`}>
                    <a>
                      <div className={'offshop_info'}>
                        <div>
                          <p className={'offshop_name'}>
                            {val.of_name}
                          </p>
                          <p className={'offshop_adrs'}>{val.of_address1}{val.of_address2}</p>
                        </div>
                        <p className={'offshop_phone'}>{val.mb_hp}</p>
                      </div>
                      <div className={'offshop_thumb'}>
                        <img src={
                          val.of_img != ''?
                          val.of_img:
                            '/img/no_img.png'
                        }/>
                      </div>
                    </a>
                  </Link>
                </li>
              ))
            :
            <li className={'offshop_none'}>
              검색 결과가 없습니다.
            </li>
            }
          </ul>
        </TitleLayout>
    )
}
