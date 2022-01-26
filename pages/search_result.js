import TitleLayout from '../layout/TitleLayout'
import Link from 'next/link'
import ItemBox from '../atomic/ItemBox';
import {useEffect,useState} from 'react';
import axios from 'axios';
function SearchResult({query}){
    const useChange = (init) =>{
      const [value,setValue] = useState(init);
      const onChange = (e) =>{
        setValue(e.target.value);
      }
      return {onChange,value}
    }
    const {it_shop_memo} = query;
    const text = useChange(it_shop_memo);
    const getItemList = (val) =>{
       console.log(0)
      axios.get(process.env.api+"Item/List",{
        params: {
          key_text:'it_shop_memo',
          val_text:val,
        }
      }).then((res)=>{
        if(res.data){
          setItemList(res.data.data);
        }
      }).catch((error)=> {

      });
    }
    const [itemList,setItemList] = useState([]);
    useEffect(() =>{
      getItemList(text.value)
    },[]);
    return (
        <TitleLayout>
          <div className={'pagetit_div'}>
            <h1 className={'page_tit'}>SEARCH</h1>
          </div>
          <div className={'borderfix'}></div>
          <div className={'search_div search_result_input'}>
            <input type='text' {...text}/>
            <img src="/img/search.png" onClick={()=>getItemList(text.value)}/>
          </div>
          <div className={'itemlist s_result'}>
            <ItemBox
              className={'s_result_list'}
              list={itemList}
            />
          </div>
        </TitleLayout>
    )
}
SearchResult.getInitialProps = async ({ req ,query }) => {
  return {query}
}
export default SearchResult;
