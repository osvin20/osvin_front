import Link from 'next/link'
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
export default function FootTab({children,...props}){
    const router = useRouter();
    const arr1 = ["/"];
    const arr2 = ["/zzim"];
    const arr3 = ["/search"];
    const arr4 = ["/category","/itemlist"];
    const arr5 = ["/userfeed","/post","/addpost"];
    const arr6 = ["/mypage","/followingstore","/myreview","/address_list","/setting","/notice_event","/cardlist","/faq","/qnalist"];
    const [tabNav,setTabNav] = useState();
    useEffect(() => {
        if(typeof router.route != "undefined"){
            if(arr1.indexOf(router.route)!== -1){setTabNav(1);}
            if(arr2.indexOf(router.route)!== -1){setTabNav(2);}
            if(arr3.indexOf(router.route)!== -1){setTabNav(3);}
            if(arr4.indexOf(router.route)!== -1){setTabNav(4);}
            if(arr5.indexOf(router.route)!== -1){setTabNav(5);}
            if(arr6.indexOf(router.route)!== -1){setTabNav(6);}
        }

    }, []);

    return (
        <ul className={'footer_tab'}>
                <li>
                    <Link href="/">
                        <a>
                            {tabNav==1?
                            <img src="/img/home_tab.png"/>
                            :<img src="/img/home.png"/>}
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/zzim">
                        <a>
                            {tabNav==2?
                            <img src="/img/heart_tab.png"/>
                            :<img src="/img/heart.png"/>}
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/search">
                        <a>
                            {tabNav==3?
                            <img src="/img/search_tab.png"/>
                            :<img src="/img/search.png"/>}
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/category">
                        <a>
                            {tabNav==4?
                            <img src="/img/category_tab.png"/>
                            :<img src="/img/category.png"/>}
                        </a>
                    </Link>
                </li>
                <li className={'userfeed_ico'}>
                    <Link href="/userfeed">
                        <a>
                            {tabNav==5?
                            <img src="/img/camera_tab.png"/>
                            :<img src="/img/camera.png"/>}
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/mypage">
                        <a>
                            {tabNav==6?
                            <img src="/img/user_tab.png"/>
                            :<img src="/img/user.png"/>}
                        </a>
                    </Link>
                </li>
            </ul>
    )
}
